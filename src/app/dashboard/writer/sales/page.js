import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import StatsCard from "@/components/dashboard/StatsCard";

// TODO: replace with fetch("/api/writer/sales") when backend is ready
const SALES = [
  { _id: "s1", ebookTitle: "Reborn in the Iron Citadel", buyer: "Reader A", date: "2026-06-25", amount: 4.99 },
  { _id: "s2", ebookTitle: "A Witch's Quiet Town", buyer: "Reader B", date: "2026-06-22", amount: 3.99 },
  { _id: "s3", ebookTitle: "Reborn in the Iron Citadel", buyer: "Reader C", date: "2026-06-20", amount: 4.99 },
  { _id: "s4", ebookTitle: "The Forgotten Realm of Asha", buyer: "Reader D", date: "2026-06-18", amount: 5.49 },
  { _id: "s5", ebookTitle: "Reborn in the Iron Citadel", buyer: "Reader E", date: "2026-06-15", amount: 4.99 },
  { _id: "s6", ebookTitle: "A Witch's Quiet Town", buyer: "Reader F", date: "2026-06-10", amount: 3.99 },
];

const totalRevenue = SALES.reduce((sum, s) => sum + s.amount, 0);

export default function SalesHistoryPage() {
  return (
    <div>
      <DashboardPageHeader
        title="Sales History"
        subtitle={`${SALES.length} sales · $${totalRevenue.toFixed(2)} total earned`}
      />

      {/* Summary */}
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <StatsCard label="Total Sales" value={SALES.length} />
        <StatsCard label="Revenue" value={`$${totalRevenue.toFixed(2)}`} />
        <StatsCard
          label="This Month"
          value={`$${SALES.filter((s) => s.date.startsWith("2026-06")).reduce((sum, s) => sum + s.amount, 0).toFixed(2)}`}
          className="col-span-2 sm:col-span-1"
        />
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-xl border border-ink/10 dark:border-parchment/10 md:block">
        <table className="w-full text-sm">
          <thead className="bg-darkCream/40 dark:bg-white/[0.03]">
            <tr>
              {["Ebook", "Buyer", "Date", "Amount"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-parchment/50">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10 bg-parchment dark:divide-parchment/10 dark:bg-ink">
            {SALES.map((s) => (
              <tr key={s._id} className="hover:bg-ink/[0.02] dark:hover:bg-parchment/[0.02]">
                <td className="px-4 py-3 font-medium text-ink dark:text-parchment">{s.ebookTitle}</td>
                <td className="px-4 py-3 text-ink/60 dark:text-parchment/60">{s.buyer}</td>
                <td className="px-4 py-3 text-ink/60 dark:text-parchment/60">{s.date}</td>
                <td className="px-4 py-3 font-semibold text-forest">${s.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {SALES.map((s) => (
          <div key={s._id} className="flex items-center justify-between rounded-xl border border-ink/10 bg-darkCream/40 p-4 dark:border-parchment/10 dark:bg-white/[0.03]">
            <div>
              <p className="text-sm font-medium text-ink dark:text-parchment">{s.ebookTitle}</p>
              <p className="text-xs text-ink/50 dark:text-parchment/50">{s.buyer} · {s.date}</p>
            </div>
            <span className="font-semibold text-forest">${s.amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
