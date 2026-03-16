// axios
import axios from "axios";
// auth-actions
import { getToken, createSession, logout } from "../auth-actions/auth-actions";
// API
import { renewAccessToken } from "./httpServices";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

// REQUEST INTERCEPTOR: Attach the current Access Token
apiClient.interceptors.request.use(async (config) => {
  const accessToken = await getToken("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      error.response?.data?.code === "TOKEN_EXPIRED" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = await getToken("refreshToken");

        const res = await axios.post(
          renewAccessToken(),
          { refreshToken: refreshToken }, // This matches your Joi schema { body: { refreshToken } }
        );

        if (res.status === 200) {
          await createSession(res.data.accessToken, res.data.refreshToken);

          originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;

          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        console.error(
          "--- DEBUG: REFRESH TOKEN FAILED ---",
          refreshError.response?.data,
        );
        await logout();

        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
