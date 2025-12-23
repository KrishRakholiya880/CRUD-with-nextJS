"use client";

// Schema
import { LoginSchema } from "@/Schema/LoginSchema/LoginSchema";
// Formik
import { Field, Form, Formik } from "formik";
// Link
import Link from "next/link";
// Login API
import { loginAPI } from "../httpServices/httpServices";
// Set token & userdata
import { SetToken } from "../CookieAction/SetToken";
import { SetUserData } from "../CookieAction/SetUserData";
// Axios
import axios from "axios";
// Router
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Login() {
  // Router
  const router = useRouter();

  // Handle Submit
  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const res = await axios.post(loginAPI(), {
        email,
        password,
      });
      await SetToken(res.data.token);
      await SetUserData(res.data.user);
      if (res.data.user.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
      toast.success(res.data.message);
      resetForm();
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div className="flex justify-center items-start min-h-screen w-full px-4 py-10 sm:py-0 sm:items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <div className="w-full flex justify-center">
            <Form className="w-full max-w-md p-5 sm:p-6 rounded-3xl shadow-md dark:shadow-slate-300 shadow-slate-900 flex flex-col space-y-4 dark:bg-white text-black">
              <h1 className="text-center text-2xl sm:text-3xl font-semibold">
                Login
              </h1>

              {/* EMAIL */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-sm sm:text-base">
                  Email:
                </label>
                <Field
                  type="email"
                  className="border border-slate-300 w-full px-3 py-2.5 rounded-xl outline-0 text-base"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs sm:text-sm">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="password" className="text-sm sm:text-base">
                  Password:
                </label>
                <Field
                  type="password"
                  className="border border-slate-300 w-full px-3 py-2.5 rounded-xl outline-0 text-base"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                {errors.password && touched.password && (
                  <p className="text-red-500 text-xs sm:text-sm">
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-2.5 text-base text-white border-2 border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 rounded-xl">
                Log in
              </button>

              <p className="text-center text-sm sm:text-base mt-2">
                New here?{" "}
                <Link className="text-blue-500 font-bold" href="/signup">
                  Create a new account
                </Link>
              </p>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
