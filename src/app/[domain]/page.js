import React from "react";
import Link from "next/link";

const Page = ({ params }) => {
  const domain = decodeURIComponent(params.domain);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        height: "100vh",
        backgroundColor: domain === "domain1" ? "LavenderBlush" : "HoneyDew",
      }}
    >
      your domain is {domain}
      <Link href="http://localhost:3000">back</Link>
    </div>
  );
};

export async function generateStaticParams({ params }) {
  const domain = decodeURIComponent(params.domain);
  return [{ domain }];
}
export default Page;
