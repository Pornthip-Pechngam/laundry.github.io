import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()

  // TODO: บันทึกลง database
  console.log(data)

  return NextResponse.json({ success: true })
}
