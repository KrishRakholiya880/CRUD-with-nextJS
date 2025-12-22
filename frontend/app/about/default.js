import React from "react";
// import Form from "next/form";

export default function Default() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <h1 className="text-4xl">Default page</h1>
      {/* Next Form component example */}
      {/* action ma path hoi e.g. "/search" then te path ma jai ne input na name attr. ma je name aapyu hoi to ne param tarike le che. e.g. name="query" then /search?query=... */}
      {/* <Form action={"/search"} className="flex flex-col items-center p-5">
        <div>
          Search:{" "}
          <input type="text" name="query" className="border border-white" />
        </div>
        <button
          type="submit"
          className="p-5 bg-green-500 rounded-xl cursor-pointer">
          Submit
        </button>
      </Form> */}
    </div>
  );
}
