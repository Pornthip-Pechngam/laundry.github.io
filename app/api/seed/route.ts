// app/api/seed/route.ts
import { prisma } from '@/lib/prisma'

export async function GET() {
  await prisma.order.create({
    data: {
    name: 'ลูกค้าทดสอบ',
    status: 'รับผ้าแล้ว',
    phone: '0812345678',
    service: 'ซัก + รีด'
  }
  })

  return Response.json({ ok: true })
}
