"use client";

// Schema
import { LoginSchema } from "@/Schema/LoginSchema/LoginSchema";
// Formik
import { Field, Form, Formik } from "formik";
// Link
import Link from "next/link";
// Login Action
import { signInAction } from "../httpServices/clientActions";
// Router
import { useRouter } from "next/navigation";
// Toast
import { toast } from "react-toastify";
// auth-action
import { createSession } from "../auth-actions/auth-actions";

export default function Login() {
  // Router
  const router = useRouter();

  // Handle Submit
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await signInAction(values);

      // create session // Old
      await createSession(
        res?.result?.accessToken,
        res?.result?.refreshToken,
        res?.result?.user,
      );
      toast.success(res.result.success);

      // Same
      if (res?.result?.user?.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/");
      }

      resetForm();
    } catch (error) {
      toast.error(error.message);
    }
  };
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div className="flex justify-center items-center min-h-screen w-full px-4 bg-black">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched, isSubmitting }) => (
          <div className="w-full flex justify-center">
            <Form className="w-full max-w-md p-8 rounded-[2.5rem] border border-zinc-800 bg-zinc-950 shadow-2xl flex flex-col space-y-6">
              {/* Header */}
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-black text-white tracking-tight uppercase">
                  Welcome <span className="text-yellow-400">Back</span>
                </h1>
                <p className="text-zinc-500 text-sm italic">
                  Log in to your premium account
                </p>
              </div>

              <div className="space-y-5">
                {/* EMAIL */}
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    className="bg-zinc-900 border border-zinc-800 w-full px-4 py-3.5 rounded-2xl outline-none text-white placeholder:text-zinc-700 focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-400 text-xs mt-1 ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* PASSWORD */}
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="password"
                    className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    Password
                  </label>
                  <Field
                    type="password"
                    className="bg-zinc-900 border border-zinc-800 w-full px-4 py-3.5 rounded-2xl outline-none text-white placeholder:text-zinc-700 focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-400 text-xs mt-1 ml-1">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end items-center">
                <Link
                  href="/forgot-password"
                  size="sm"
                  className="text-xs text-zinc-500 hover:text-yellow-400 uppercase underline tracking-tighter transition-colors">
                  Forgot Password?
                </Link>
              </div>

              {/* LOGIN BUTTON */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-sm font-black text-black bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.1)] active:scale-[0.97] uppercase tracking-wide">
                  {isSubmitting ? "Authenticating..." : "Log In"}
                </button>
              </div>

              {/* FOOTER */}
              <div className="text-center pt-2">
                <p className="text-sm text-zinc-500">
                  New here?{" "}
                  <Link
                    className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors"
                    href="/signup">
                    Create a new account
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
