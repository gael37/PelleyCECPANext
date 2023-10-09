import { NextRequest, NextResponse } from "next/server";


interface Props {
  params: { id: string }
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  // if course not found
  if (parseInt(id) > 10) {
    return NextResponse.json('Course not found.', { status: 404 })
  }
  return NextResponse.json(
    {
      id: id, title: 'Linkedin'
    }
  )
}