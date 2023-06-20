import { NextResponse } from "next/server"
import Client from "../../model/client"

export async function getClient(req: any) {
  try {
    const clients = await Client.find({ "email": "Sam@gm.com", "password": "123456" })
    if (!clients) {
      return new NextResponse("Data Not Found", {
        status: 404,
      })
    }
    return new NextResponse((JSON.stringify({ clients })))
  } catch (error) {
    return new NextResponse("Error While Fecthing Data", {
      status: 404
    })
  }
}

// POST TO DB 
export async function postClient(req: any) {
  try {
    const formData = await req.json()

    if (!formData) {
      return new NextResponse("Data Not Provided", {
        status: 404
      })
    }
    const resData = await Client.create(formData)
    return new NextResponse(resData, {
      status: 200
    })

  } catch (error) {
    return new NextResponse("Error While Submitting Data", {
      status: 404
    })
  }

}

// PUT to DB 
export async function putClient(req: any) {
  try {

    const { searchParams } = new URL(req.url);
    const clientId = searchParams.get("id");
    console.log(clientId)

    const formData = await req.json()


    if (!formData) {
      return new NextResponse("Data Not Provided", {
        status: 404
      })
    }

    const resData = await Client.findByIdAndUpdate(clientId, formData)
    return new NextResponse(resData, {
      status: 200
    })

  } catch (error) {
    return new NextResponse("Error While Submitting Data", {
      status: 404
    })
  }

}

