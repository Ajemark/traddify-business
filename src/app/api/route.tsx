import connectMongo from "@/database/dbconnection";
import { NextResponse } from "next/server";

export async function GET(req) {
  // Do whatever you want

  connectMongo()
  return new Response('Hello World!', {
    status: 200,
  });
}