import Link from "next/link";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import Badge from "@/components/ui/Badge";

// TODO: replace with fetch("/api/purchases/my") when backend is ready
const PURCHASES = [
  { _id: "p1", ebookId: "ebook_01", title: "Reborn in the Iron Citadel", writer: "Kaito Maren", date: "2026-05-15", price: 4.99, status: "completed" },
  { _id: "p2", ebookId: "ebook_03", title: "The Hollow Crown Prophecy", writer: "Amir Noel", date: "2026-06-03", price: 5.99, status: "completed" },
  { _id: "p3", ebookId: "ebook_05", title: "Signal Zero", writer: "Priya Voss", date: "2026-06-20", price: 4.49, status: "completed" },
  { _id: "p4", ebookId: "ebook_08", title: "Midnight in the Neon District", writer: "Priya Voss", date: "2026-06-25", price: 3.99, status: "completed" },
];

const total = PURCHASES.reduce((sum, p) => sum + p.price, 0);

export default function PurchasesPage() {
  return (
    <div>
      <DashboardPageHeader
        title="My Purchases"
        subtitle={`${PURCHASES.length} ebooks purchased · $${total.toFixed(2)} total spent`}
      />

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-xl border border-ink/10 dark:border-parchment/10 md:block">
        <table className="w-full text-sm">
          <thead className="bg-darkCream/40 dark:bg-white/[0.03]">
            <tr>
              {["Ebook", "Writer", "Purchase Date", "Price", "Status", ""].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-parchment/50">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10 bg-parchment dark:divide-parchment/10 dark:bg-ink">
            {PURCHASES.map((p) => (
              <tr key={p._id} className="hover:bg-ink/[0.02] dark:hover:bg-parchment/[0.02]">
                <td className="px-4 py-3">
                  <Link href={`/ebooks/${p.ebookId}`} className="font-medium text-ink hover:text-forest dark:text-parchment dark:hover:text-moss">
                    {p.title}
                  </Link>
                </td>
                <td className="px-4 py-3 text-ink/60 dark:text-parchment/60">{p.writer}</td>
                <td className="px-4 py-3 text-ink/60 dark:text-parchment/60">{p.date}</td>
                <td className="px-4 py-3 font-semibold text-forest">${p.price.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <Badge variant="moss" className="text-[10px]">Completed</Badge>
                </td>
                <td className="px-4 py-3">
                  <Link href={`/ebooks/${p.ebookId}`} className="text-xs font-medium text-forest hover:underline dark:text-moss">
                    Read →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {PURCHASES.map((p) => (
          <div key={p._id} className="rounded-xl border border-ink/10 bg-darkCream/40 p-4 dark:border-parchment/10 dark:bg-white/[0.03]">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Link href={`/ebooks/${p.ebookId}`} className="font-display text-sm font-semibold text-ink hover:text-forest dark:text-parchment dark:hover:text-moss">
                  {p.title}
                </Link>
                <p className="mt-0.5 text-xs text-ink/60 dark:text-parchment/60">{p.writer}</p>
              </div>
              <span className="shrink-0 font-semibold text-forest">${p.price.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs text-ink/50 dark:text-parchment/50">{p.date}</p>
              <Badge variant="moss" className="text-[10px]">Completed</Badge>
            </div>
          </div>
        ))}
      </div>

      {PURCHASES.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="font-display text-lg font-semibold text-ink dark:text-parchment">No purchases yet</p>
          <p className="mt-1 text-sm text-ink/60 dark:text-parchment/60">Browse ebooks and make your first purchase.</p>
          <Link href="/browse" className="mt-4 text-sm font-medium text-forest hover:underline dark:text-moss">
            Browse Ebooks →
          </Link>
        </div>
      )}
    </div>
  );
}
