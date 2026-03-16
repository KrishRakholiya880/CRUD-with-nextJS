import React from "react";
// Components
import LoadMore from "../_components/LoadMore/LoadMore";
// auth actions
import { getCurrentUser, getToken } from "../auth-actions/auth-actions";

// Metadata remains the same
export async function generateMetadata({ searchParams }) {
  const { q } = await searchParams;

  return {
    title: q || "Search Products",
    alternates: {
      canonical: `/products/search/${q}`,
    },
  };
}

export default async function page({ searchParams }) {
  const accessToken = await getToken();
  const userData = await getCurrentUser();
  // search params
  const { q } = await searchParams;

  return (
    <div className="max-w-7xl px-4 mx-auto">
      <div className="flex flex-col items-center w-full mt-10">
        {q && (
          <p className="mb-6 text-xl self-center">
            Search results for: <strong>" {q} "</strong>
          </p>
        )}
        <LoadMore accessToken={accessToken} userData={userData} query={q} />
      </div>
    </div>
  );
}
