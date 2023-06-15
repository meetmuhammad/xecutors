import { NextResponse } from "next/server";

export default function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('accessToken');
    if(!token){
      // return NextResponse.redirect("http://localhost:3000");
    }


  }
}