"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { DUMMY_EBOOKS } from "@/lib/dummyData";

const INITIAL_EBOOKS = DUMMY_EBOOKS.filter(
  (e) => typeof e.writerId === "object" && e.writerId._id === "w1"
).map((e) => ({ ...e }));

export default function ManageEbooksPage() {
  const [ebooks, setEbooks] = useState(INITIAL_EBOOKS);

  function togglePublish(id) {
    setEbooks((prev) =>
      prev.map((e) =>
        e._id === id
          ? { ...e, status: e.status === "published" ? "unpublished" : "published" }
          : e
      )
    );
    // TODO: apiFetch(`/api/ebooks/${id}/toggle-publish`, { method: "PATCH" })
    toast.success("Status updated.");
  }

  function handleDelete(id) {
    if (!confirm("Delete this ebook? This cannot be undone.")) return;
    setEbooks((prev) => prev.filter((e) => e._id !== id));
    // TODO: apiFetch(`/api/ebooks/${id}`, { method: "DELETE" })
    toast.success("Ebook deleted.");
  }

  return (
    <div>
      <DashboardPageHeader
        title="My Ebooks"
        subtitle={`${ebooks.length} ebooks in your catalogue`}
        action={<Button href="/dashboard/writer/add" size="sm">+ Add Ebook</Button>}
      />

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-xl border border-ink/10 dark:border-parchment/10 md:block">
        <table className="w-full text-sm">
          <thead className="bg-darkCream/40 dark:bg-white/[0.03]">
            <tr>
              {["Title", "Price", "Format", "Chapters", "Status", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-parchment/50">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10 bg-parchment dark:divide-parchment/10 dark:bg-ink">
            {ebooks.map((e) => (
              <tr key={e._id} className="hover:bg-ink/[0.02] dark:hover:bg-parchment/[0.02]">
                <td className="px-4 py-3 font-medium text-ink dark:text-parchment">{e.title}</td>
                <td className="px-4 py-3 text-forest">${e.price.toFixed(2)}</td>
                <td className="px-4 py-3 capitalize text-ink/60 dark:text-parchment/60">{e.format}</td>
                <td className="px-4 py-3 text-ink/60 dark:text-parchment/60">
                  {e.format === "serialized" ? e.totalChapters : "—"}
                </td>
                <td className="px-4 py-3">
                  <Badge
                    variant={e.status === "published" ? "moss" : "outline"}
                    className="text-[10px]"
                  >
                    {e.status}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/dashboard/writer/add?edit=${e._id}`}
                      className="text-xs font-medium text-forest hover:underline dark:text-moss"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => togglePublish(e._id)}
                      className="text-xs font-medium text-ink/60 hover:text-ink dark:text-parchment/60 dark:hover:text-parchment"
                    >
                      {e.status === "published" ? "Unpublish" : "Publish"}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(e._id)}
                      className="text-xs font-medium text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {ebooks.map((e) => (
          <div key={e._id} className="rounded-xl border border-ink/10 bg-darkCream/40 p-4 dark:border-parchment/10 dark:bg-white/[0.03]">
            <div className="flex items-start justify-between gap-2">
              <p className="font-display text-sm font-semibold text-ink dark:text-parchment">{e.title}</p>
              <Badge variant={e.status === "published" ? "moss" : "outline"} className="shrink-0 text-[10px]">
                {e.status}
              </Badge>
            </div>
            <p className="mt-1 text-sm font-semibold text-forest">${e.price.toFixed(2)}</p>
            <div className="mt-3 flex items-center gap-3 border-t border-ink/10 pt-3 dark:border-parchment/10">
              <Link href={`/dashboard/writer/add?edit=${e._id}`} className="text-xs font-medium text-forest dark:text-moss">Edit</Link>
              <button type="button" onClick={() => togglePublish(e._id)} className="text-xs font-medium text-ink/60 dark:text-parchment/60">
                {e.status === "published" ? "Unpublish" : "Publish"}
              </button>
              <button type="button" onClick={() => handleDelete(e._id)} className="text-xs font-medium text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {ebooks.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="font-display text-lg font-semibold text-ink dark:text-parchment">No ebooks yet</p>
          <p className="mt-1 text-sm text-ink/60 dark:text-parchment/60">Start by publishing your first ebook.</p>
          <Button href="/dashboard/writer/add" size="sm" className="mt-4">+ Add Ebook</Button>
        </div>
      )}
    </div>
  );
}
