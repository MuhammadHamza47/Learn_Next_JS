import { NextResponse } from "next/server";


export const GET = () =>{

    let services = {
        title: 'A service page',
        description: 'A service page description'
    }
    console.log("GET called");
    return NextResponse.json(services);
}

export const POST = async (req) =>{
    const body = await req.json();
    console.log("body", body);
    return NextResponse.json({message: "POST called"});
}

export const PUT =  () =>{
    // some working
    
    return NextResponse.json({message: "PUT called"});
}

export const DELETE = () =>{
    // some working
    console.log("DELETE called");
    return NextResponse.json({message: "DELETE called"});
}