import { NextResponse } from "next/server";

const isDomainValid = (hostname) => {
  const domains = ["domain1", "domain2"];
  return domains.includes(hostname);
};

export default async function middleware(req) {
  const url = req.nextUrl;
  let hostname = req.headers.get("host").replace(".localhost:3000", "");
  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  const homeUrl = new URL("/", "http://localhost:3000");

  if (hostname === "localhost:3000") {
    return;
  }

  if (isDomainValid(hostname)) {
    return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
  } else if (!isDomainValid(hostname)) {
    return NextResponse.rewrite(homeUrl);
  }
}
