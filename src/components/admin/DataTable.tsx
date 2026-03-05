import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export interface Column {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "image" | "toggle";
}

interface DataTableProps {
  title: string;
  columns: Column[];
  data: Record<string, any>[];
  onAdd: (item: Record<string, any>) => void;
  onEdit: (id: number, item: Record<string, any>) => void;
  onDelete: (id: number) => void;
}

export default function DataTable({ title, columns, data, onAdd, onEdit, onDelete }: DataTableProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Record<string, any> | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const openAdd = () => {
    setEditingItem(null);
    const initial: Record<string, any> = {};
    columns.forEach((c) => {
      initial[c.key] = c.type === "toggle" ? true : c.type === "number" ? 0 : "";
    });
    setFormData(initial);
    setDialogOpen(true);
  };

  const openEdit = (item: Record<string, any>) => {
    setEditingItem(item);
    const initial: Record<string, any> = {};
    columns.forEach((c) => {
      initial[c.key] = item[c.key] ?? "";
    });
    setFormData(initial);
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (editingItem) {
      onEdit(editingItem.id, formData);
    } else {
      onAdd(formData);
    }
    setDialogOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-xl text-foreground">{title}</h2>
        <Button onClick={openAdd} className="gap-2">
          <Plus className="w-4 h-4" /> Add New
        </Button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              {columns.map((col) => (
                <TableHead key={col.key}>{col.label}</TableHead>
              ))}
              <TableHead className="w-24 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + 2} className="text-center text-muted-foreground py-8">
                  No data yet. Click "Add New" to get started.
                </TableCell>
              </TableRow>
            ) : (
              data.map((item, i) => (
                <TableRow key={item.id ?? i}>
                  <TableCell className="text-muted-foreground">{i + 1}</TableCell>
                  {columns.map((col) => (
                    <TableCell key={col.key}>
                      {col.type === "toggle" ? (
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${item[col.key] ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                          {item[col.key] ? "Active" : "Inactive"}
                        </span>
                      ) : col.type === "image" && item[col.key] ? (
                        <img src={item[col.key]} alt="" className="w-10 h-10 rounded object-cover" />
                      ) : (
                        <span className="text-sm line-clamp-2">{item[col.key]}</span>
                      )}
                    </TableCell>
                  ))}
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(item)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => onDelete(item.id)}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingItem ? "Edit" : "Add"} {title.replace(/s$/, "")}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            {columns.map((col) => (
              <div key={col.key}>
                <Label className="text-sm font-medium mb-1 block">{col.label}</Label>
                {col.type === "textarea" ? (
                  <Textarea
                    value={formData[col.key] ?? ""}
                    onChange={(e) => setFormData({ ...formData, [col.key]: e.target.value })}
                  />
                ) : col.type === "toggle" ? (
                  <Switch
                    checked={!!formData[col.key]}
                    onCheckedChange={(v) => setFormData({ ...formData, [col.key]: v })}
                  />
                ) : col.type === "number" ? (
                  <Input
                    type="number"
                    value={formData[col.key] ?? ""}
                    onChange={(e) => setFormData({ ...formData, [col.key]: Number(e.target.value) })}
                  />
                ) : (
                  <Input
                    value={formData[col.key] ?? ""}
                    onChange={(e) => setFormData({ ...formData, [col.key]: e.target.value })}
                  />
                )}
              </div>
            ))}
            <Button onClick={handleSave} className="w-full">
              {editingItem ? "Update" : "Add"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
