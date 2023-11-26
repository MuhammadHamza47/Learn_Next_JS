import { NextResponse } from "next/server";
export const  GET = (req, route) => {
    console.log('route', route.params);
    return NextResponse.json({
      message: "GET method called /api/users/dynamic path ", data: route.params.userName
    });
  }