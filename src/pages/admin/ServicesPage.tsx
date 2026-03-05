import { useState } from "react";
import DataTable, { Column } from "@/components/admin/DataTable";

const columns: Column[] = [
  { key: "title", label: "Title" },
  { key: "description", label: "Description", type: "textarea" },
  { key: "icon", label: "Icon Name" },
  { key: "price", label: "Price (₹)", type: "number" },
  { key: "sort_order", label: "Sort Order", type: "number" },
  { key: "is_active", label: "Active", type: "toggle" },
];

export default function ServicesPage() {
  const [data, setData] = useState<Record<string, any>[]>([
    { id: 1, title: "General Service", description: "Complete car servicing", icon: "wrench", price: 2999, sort_order: 1, is_active: true },
    { id: 2, title: "Denting & Painting", description: "Body repair and paint", icon: "paintbrush", price: 4999, sort_order: 2, is_active: true },
    { id: 3, title: "AC Service", description: "AC repair and gas refill", icon: "snowflake", price: 1999, sort_order: 3, is_active: true },
  ]);
  let nextId = data.length ? Math.max(...data.map(d => d.id)) + 1 : 1;

const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add credentials: "include" so the PHP session cookie is saved
      const response = await fetch('/backend/api/auth.php', {
        method: 'POST',
        credentials: 'include', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

  return (
    <DataTable
      title="Services"
      columns={columns}
      data={data}
      onAdd={(item) => setData([...data, { ...item, id: nextId++ }])}
      onEdit={(id, item) => setData(data.map(d => d.id === id ? { ...d, ...item } : d))}
      onDelete={(id) => setData(data.filter(d => d.id !== id))}
    />
  );
}
