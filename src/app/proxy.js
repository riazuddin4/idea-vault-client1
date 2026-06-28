// import { headers } from 'next/headers';
// import { NextResponse } from 'next/server';
// import { auth } from './lib/auth';

// // This function can be marked `async` if using `await` inside
// export async function proxy(request) {
//   const session = await auth.api.getSession({
//     headers: await headers(), // headers containing the user's session token
//   });

//   // if(!session?.user?.role == "lesson-creator" && session?.user?.plan === "free") {
//   //   return NextResponse.redirect(new URL('/pricing', request.url));
//   // }

//   console.log(session, "session in proxy");

//   if (!session && !session?.user) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }
// }

// // Alternatively, you can use a default export:
// // export default function proxy(request: NextRequest) { ... }

// export const config = {
//   matcher: ['/ideas/:id', '/my-ideas/:path*', '/my-interactions', '/add-idea'] // Protect these routes,
// };
// http://localhost:3000/about/all-path


import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { cookies, headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  // if(!session?.user?.role == "lesson-creator" && session?.user?.plan === "free") {
  //   return NextResponse.redirect(new URL('/pricing', request.url));
  // }

  // console.log(session, "session in proxy");
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

}

export const config = {
  matcher: ['/my-ideas', '/dashboard/lesson-creator']
}