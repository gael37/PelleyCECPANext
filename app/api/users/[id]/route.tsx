import { NextRequest, NextResponse } from "next/server"
import schema from "../schema";
import prisma from "@/prisma/client";



export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  })
  // If user not found, user is falsy
  if (!user) {
    return NextResponse.json('User not found.', { status: 404 })
  }
  return NextResponse.json(user)
}



export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  /*
  We validate the request body
  if invalid, return 400,
  else fetch the user with the given id
  id user doesn't exist, return 404
  else update user and return updated user 
  */
  // const log = await request.json()
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 })
  }

  const existingUser = await prisma.user.findUnique({
    where: { id: params.id }
  })

  if (!existingUser) {
    return NextResponse.json({ error: 'User to update not found.' }, { status: 404 })
  }

  const updatedUser = await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      name: body.name,
      email: body.email
    }
  })

  return NextResponse.json(updatedUser, { status: 200 })
}



export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  /*
  We fetch the user with the given id
  id user doesn't exist, return 404
  else delete user and return success message
  */
  const existingUser = await prisma.user.findUnique({
    where: { id: params.id }
  })
  if (!existingUser) {
    return NextResponse.json({ error: 'User not found.' }, { status: 404 })
  }
  await prisma.user.delete({
    where: { id: existingUser.id }
  })
  return NextResponse.json('User successfully deleted.')
}