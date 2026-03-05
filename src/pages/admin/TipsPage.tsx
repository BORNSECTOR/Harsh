import { useState } from "react";
import DataTable, { Column } from "@/components/admin/DataTable";

const columns: Column[] = [
  { key: "title", label: "Title" },
  { key: "content", label: "Content", type: "textarea" },
  { key: "image_url", label: "Image URL" },
  { key: "is_active", label: "Active", type: "toggle" },
];

export default function TipsPage() {
  const [data, setData] = useState<Record<string, any>[]>([]);
  let nextId = data.length ? Math.max(...data.map(d => d.id)) + 1 : 1;

  return (
    <DataTable
      title="Car Care Tips"
      columns={columns}
      data={data}
      onAdd={(item) => setData([...data, { ...item, id: nextId++ }])}
      onEdit={(id, item) => setData(data.map(d => d.id === id ? { ...d, ...item } : d))}
      onDelete={(id) => setData(data.filter(d => d.id !== id))}
    />
  );
}
