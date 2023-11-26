import { NextResponse } from "next/server";


export const  GET = () => {
  return NextResponse.json({
    message: "GET method called /api/todo path "
  });
}

export const  POST = (req) => {
  const title = new URL(req.url).searchParams.get("title");
  return NextResponse.json({
    message: "POST method called /api/todo path ", data:title
  });
}

