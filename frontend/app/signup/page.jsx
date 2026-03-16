"use client";

// Schema
import { SignupSchema } from "@/Schema/SignupSchema/SignupSchema";
// Formik
import { Field, Form, Formik } from "formik";
// Link & Navigation
import Link from "next/link";
// Navigation
import { useRouter } from "next/navigation";
// Login Action
import { signupAction } from "../httpServices/clientActions";
// Toast
import { toast } from "react-toastify";
// auth-action // Old
import { createSession } from "../auth-actions/auth-actions";

export default function Signup() {
  // router
  const router = useRouter();

  // HandleSubmit function
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await signupAction(values);

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
      toast.error(error?.message);
    }
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full px-4 bg-black">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched, isSubmitting }) => (
          <div className="w-full flex justify-center">
            <Form className="w-full max-w-md p-8 rounded-[2rem] border border-zinc-800 bg-zinc-950 shadow-2xl flex flex-col space-y-6">
              {/* Header */}
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-black text-white tracking-tight uppercase">
                  Create <span className="text-yellow-400">Account</span>
                </h1>
                <p className="text-zinc-500 text-sm">
                  Join our premium community today
                </p>
              </div>

              <div className="space-y-4">
                {/* USERNAME */}
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="username"
                    className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">
                    Username
                  </label>
                  <Field
                    type="text"
                    className="bg-zinc-900 border border-zinc-800 w-full px-4 py-3 rounded-2xl outline-none text-white placeholder:text-zinc-600 focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                    id="username"
                    name="username"
                    placeholder="How should we call you?"
                  />
                  {errors.username && touched.username && (
                    <p className="text-red-400 text-xs mt-1 ml-1">
                      {errors.username}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    className="bg-zinc-900 border border-zinc-800 w-full px-4 py-3 rounded-2xl outline-none text-white placeholder:text-zinc-600 focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
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
                    className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">
                    Password
                  </label>
                  <Field
                    type="password"
                    className="bg-zinc-900 border border-zinc-800 w-full px-4 py-3 rounded-2xl outline-none text-white placeholder:text-zinc-600 focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-400 text-xs mt-1 ml-1">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full py-4 text-sm font-black text-black bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.2)] active:scale-[0.98] uppercase tracking-tighter">
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>

              {/* FOOTER */}
              <p className="text-center text-sm text-zinc-500">
                Already have an account?{" "}
                <Link
                  className="text-yellow-400 font-bold hover:underline"
                  href="/login">
                  Sign in
                </Link>
              </p>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
