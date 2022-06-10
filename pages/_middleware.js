import { NextResponse } from "next/server"

export default async function middleware(req) {
  const url = req.nextUrl.clone()
  const country = req.cookies.selectedCountry || "US"

  url.searchParams.set("selectedCountry", country)

  return NextResponse.rewrite(url)
}
