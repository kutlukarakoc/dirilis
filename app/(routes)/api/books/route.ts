import {connectToDB}  from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDB()	

	return new NextResponse('route connected')
}	