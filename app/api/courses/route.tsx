import { NextRequest, NextResponse } from "next/server";
import schema from './schema'

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, title: 'Linkedin' },
    { id: 2, title: '1031 exchange' }
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }
  return NextResponse.json({ id: 1, title: body.title, duration: body.duration, description: body.description }, { status: 201 })
}