export default function OrderPage() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">รับออเดอร์ซักรีด</h1>

      <input className="border w-full p-2 mb-3" placeholder="ชื่อลูกค้า" />
      <input className="border w-full p-2 mb-3" placeholder="เบอร์โทร" />

      <select className="border w-full p-2 mb-3">
        <option>ซัก</option>
        <option>รีด</option>
      </select>

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        ส่งออเดอร์
      </button>
    </div>
  );
}
