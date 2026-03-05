import { useState } from "react";
import DataTable, { Column } from "@/components/admin/DataTable";

const columns: Column[] = [
  { key: "title", label: "Title" },
  { key: "description", label: "Description", type: "textarea" },
  { key: "discount_percent", label: "Discount %", type: "number" },
  { key: "image_url", label: "Image URL" },
  { key: "is_active", label: "Active", type: "toggle" },
];

export default function OffersPage() {
  const [data, setData] = useState<Record<string, any>[]>([
    { id: 1, title: "Free AC Check-up", description: "Get free AC diagnostics with every service", discount_percent: 0, image_url: "", is_active: true },
    { id: 2, title: "10% OFF Denting & Painting", description: "Limited time offer on body work", discount_percent: 10, image_url: "", is_active: true },
  ]);

  let nextId = data.length ? Math.max(...data.map(d => d.id)) + 1 : 1;

  return (
    <DataTable
      title="Offers"
      columns={columns}
      data={data}
      onAdd={(item) => setData([...data, { ...item, id: nextId++ }])}
      onEdit={(id, item) => setData(data.map(d => d.id === id ? { ...d, ...item } : d))}
      onDelete={(id) => setData(data.filter(d => d.id !== id))}
    />
  );
}
