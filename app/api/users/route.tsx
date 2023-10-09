import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";



export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}



export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  /*
  Validation of the request body.
  If invalid, return 400.
  If valid, return the cerated data".
 */
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const registeredUser = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  })

  if (registeredUser) {
    return NextResponse.json({ error: 'User already registered.' }, { status: 400 })
  }

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  })
  return NextResponse.json(user,
    {
      status: 201
    })
}