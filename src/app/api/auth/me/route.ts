import { verify, decode } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import Client from '../../../../../model/client'

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get("OutsiteJWT")

  if (!token) {
    return new NextResponse("Unauthorized", {
      status: 401,
    })
  }
  const { value } = token
  const secret = process.env.JWT_SECRET || ""

  const client = await Client.find({ "email": decode(value)?.email })

  try {
    verify(value, secret)
    return new NextResponse(JSON.stringify(client[0]), {
      status: 200,
    })

  } catch (e) {
    return new NextResponse("Error", {
      status: 400,
    })
  }


}