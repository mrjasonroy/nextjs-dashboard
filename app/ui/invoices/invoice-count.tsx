import { fetchInvoiceCount } from "@/app/lib/data";

export default async function InvoiceCount() {
  const count = await fetchInvoiceCount();
  return (
    <div className="flex items-center justify-between">
      <p className="text-2xl font-medium">{count}</p>
      <p className="text-sm text-gray-500">Invoices</p>
    </div>
  )
} 