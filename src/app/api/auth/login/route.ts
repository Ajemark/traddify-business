
import connectMongo from "@/database/dbconnection"
import { NextResponse } from "next/server"
import Client from "../../../../../model/client"
import { sign } from "jsonwebtoken"
import { serialize } from "cookie"

export async function POST(req: Request) {
  connectMongo().catch(() => new NextResponse("Error In Connection", {
    status: 404
  }))

  const data = await req.json()
  const { email, password } = data

  const client = await Client.find({ "email": email, "password": password })
  if (client.length < 1) {
    return new NextResponse("Unauthorized", {
      status: 401,
    })
  }

  const secret = process.env.JWT_SECRET || ""
  const token = sign(
    {
      email,
    },
    secret,
    {
      expiresIn: 60 * 60 * 24 * 15
    }
  )

  const serialized = serialize("OutsiteJWT", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 15,
    path: '/'
  })
  return new NextResponse(JSON.stringify(client[0]), {
    status: 200,
    headers: { 'Set-Cookie': serialized }
  })
}