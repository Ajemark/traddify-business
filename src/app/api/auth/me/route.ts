import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get("OutsiteJWT")


  if (!token) {
    return new NextResponse("Unauthorized", {
      status: 401,
    })

    // see CountQueuing
    // see passwrd
    // text color
    // logo 

  }
  const { value } = token
  const secret = process.env.JWT_SECRET || ""

  try {
    verify(value, secret)
    return new NextResponse("Singned in", {
      status: 200,
    })

  } catch (e) {
    return new NextResponse("Error", {
      status: 400,
    })
  }


}