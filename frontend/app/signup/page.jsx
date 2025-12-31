"use client";

// Schema
import { SignupSchema } from "@/Schema/SignupSchema/SignupSchema";
// Formik
import { Field, Form, Formik } from "formik";
// Link & Navigation
import Link from "next/link";
import { useRouter } from "next/navigation";
// API
import { signupAPI } from "../httpServices/httpServices";
// Axios
import axios from "axios";
// Auth-actions
import { createSession } from "../auth-actions/auth-actions";
// Toast
// import { toast } from "react-toastify";

export default function Signup() {
  // router
  const router = useRouter();

  // HandleSubmit function
  const handleSubmit = async (
    { username, email, password, role },
    { resetForm }
  ) => {
    try {
      const res = await axios.post(signupAPI(), {
        username,
        email,
        password,
        role,
      });

      await createSession(res.data.token, res.data.user);

      // Redirect based on role
      if (res.data.user.role === "admin") {
        router.push("/admin");
        // toast.success("Admin Signup Successfully");
      } else {
        router.push("/");
      }
      resetForm();
      // toast.success(res.data.message || "Signup Successfully");
    } catch (error) {
      // toast.error(error?.data?.response?.message || "Error while login");
      console.log(error);
    }
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
    role: "user",
  };

  return (
    <div className="flex justify-center items-start min-h-screen w-full px-4 py-10 sm:py-0 sm:items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <div className="w-full flex justify-center">
            <Form className="w-full max-w-md p-5 sm:p-6 rounded-3xl shadow-md dark:shadow-slate-300 shadow-slate-900 flex flex-col space-y-4 dark:bg-white text-black">
              <h1 className="text-center text-2xl sm:text-3xl font-semibold">
                Signup
              </h1>

              {/* USERNAME */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="username" className="text-sm sm:text-base">
                  Username
                </label>
                <Field
                  type="text"
                  className="border border-slate-300 w-full px-3 py-2.5 rounded-xl outline-0 text-base"
                  id="username"
                  name="username"
                  placeholder="Enter your name"
                />
                {errors.username && touched.username && (
                  <p className="text-red-500 text-xs sm:text-sm">
                    {errors.username}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-sm sm:text-base">
                  Email
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

              {/* PASSWORD */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="password" className="text-sm sm:text-base">
                  Password
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
                Sign up
              </button>

              <p className="text-center text-sm sm:text-base">
                Already a user?{" "}
                <Link className="text-blue-500 font-bold" href="/login">
                  Login
                </Link>
              </p>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
