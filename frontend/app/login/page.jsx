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
    <div className="flex justify-center items-center h-screen w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <div>
            <Form className="w-[500px] h-auto p-5 rounded-3xl shadow-md dark:shadow-slate-300 shadow-slate-900 flex flex-col space-y-3 dark:bg-white text-black">
              <h1 className="text-center text-3xl">Login</h1>
              <div className="flex flex-col justify-baseline items-start space-y-3">
                <label htmlFor="email" className="text-balance">
                  Email:
                </label>
                <Field
                  type="email"
                  className="border border-slate-300 w-full p-2 rounded-xl outline-0"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500">{errors.email}</p>
                ) : null}
              </div>
              <div className="flex flex-col justify-baseline items-start space-y-3">
                <label htmlFor="password" className="text-balance">
                  Password:
                </label>
                <Field
                  type="password"
                  className="border border-slate-300 w-full p-2 rounded-xl outline-0"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                {errors.password && touched.password ? (
                  <p className="text-red-500">{errors.password}</p>
                ) : null}
              </div>
              <div>
                <button
                  type="submit"
                  className="px-3 py-1.5 text-white border-2 border-blue-500 hover:border-blue-600 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-md">
                  Log in
                </button>
              </div>
              <p className="my-3">
                New here? &nbsp;
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
