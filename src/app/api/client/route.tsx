import { getClient, postClient, putClient } from "@/database/controller";
import connectMongo from "@/database/dbconnection";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  connectMongo().catch(() => new NextResponse("Error In Connection", {
    status: 404
  }))
  return getClient(req)
}

export async function POST(req: Request) {
  connectMongo().catch(() => new NextResponse("Error In Connection", {
    status: 404
  }))
  return postClient(req)
}

export async function PUT(req: Request) {
  connectMongo().catch(() => new NextResponse("Error In Connection", {
    status: 404
  }))
  return putClient(req)
}

