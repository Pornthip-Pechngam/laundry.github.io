// app/admin/page.tsx
import { prisma } from '@/lib/prisma'

export default async function AdminPage() {
  const orders = await prisma.order.findMany()

  return (
    <div>
      <h1>รายการออเดอร์</h1>
      {orders.map(o => (
        <div key={o.id}>{o.name} - {o.status}</div>
      ))}
    </div>
  )
}
