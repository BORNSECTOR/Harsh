import { useState } from "react";
import DataTable, { Column } from "@/components/admin/DataTable";

const columns: Column[] = [
  { key: "name", label: "Partner Name" },
  { key: "logo_url", label: "Logo URL" },
  { key: "website_url", label: "Website URL" },
  { key: "sort_order", label: "Sort Order", type: "number" },
  { key: "is_active", label: "Active", type: "toggle" },
];

export default function PartnersPage() {
  const [data, setData] = useState<Record<string, any>[]>([]);
  let nextId = data.length ? Math.max(...data.map(d => d.id)) + 1 : 1;

  return (
    <DataTable
      title="Trusted Partners"
      columns={columns}
      data={data}
      onAdd={(item) => setData([...data, { ...item, id: nextId++ }])}
      onEdit={(id, item) => setData(data.map(d => d.id === id ? { ...d, ...item } : d))}
      onDelete={(id) => setData(data.filter(d => d.id !== id))}
    />
  );
}
