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
// Set token & userdata
import { SetToken } from "../CookieAction/SetToken";
import { SetUserData } from "../CookieAction/SetUserData";
import { toast } from "react-toastify";

export default function Signup() {
  // Router
  const router = useRouter();
  // HandleSubmit
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
    username: "",
    email: "",
    password: "",
    role: "user",
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <div>
            <Form className="w-[500px] h-auto p-5 rounded-3xl shadow-md dark:shadow-slate-300 shadow-slate-900 flex flex-col space-y-3 dark:bg-white text-black">
              <h1 className="text-center text-3xl">Signup</h1>
              <div className="flex flex-col justify-baseline items-start space-y-3">
                <label htmlFor="username" className="text-balance">
                  Username:
                </label>
                <Field
                  type="text"
                  className="border border-slate-300 w-full p-2 rounded-xl outline-0"
                  id="username"
                  name="username"
                  placeholder="Enter your name"
                />
                {errors.name && touched.name ? (
                  <p className="text-red-500">{errors.name}</p>
                ) : null}
              </div>
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
                  Sign up
                </button>
              </div>
              <p className="my-3">
                Already a user? &nbsp;
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
