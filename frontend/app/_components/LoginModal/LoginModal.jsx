"use client";

import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
    //   <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
    //     <div className="text-center">
    //       <h2 className="text-2xl font-bold text-gray-800">Login Required</h2>
    //       <p className="mt-2 text-gray-600">You need to login first</p>
    //     </div>

    //     <div className="flex flex-col gap-3 mt-6">
    //       <button
    //         onClick={() => router.push("/login")}
    //         className="w-full py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600 font-medium">
    //         Login Now
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Login Required</h2>
        <p className="mt-2 text-gray-600">You need to login first</p>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <button
          onClick={() => router.push("/login")}
          className="w-full py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600 font-medium">
          Login Now
        </button>
      </div>
    </div>
  );
}
