import Link from "next/link";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { DUMMY_EBOOKS } from "@/lib/dummyData";

// Writer w1 = Kaito Maren
const WRITER_EBOOKS = DUMMY_EBOOKS.filter(
  (e) => typeof e.writerId === "object" && e.writerId._id === "w1"
);

const RECENT_SALES = [
  { _id: "s1", ebookTitle: "Reborn in the Iron Citadel", buyer: "Reader A", date: "2026-06-25", amount: 4.99 },
  { _id: "s2", ebookTitle: "A Witch's Quiet Town", buyer: "Reader B", date: "2026-06-22", amount: 3.99 },
  { _id: "s3", ebookTitle: "Reborn in the Iron Citadel", buyer: "Reader C", date: "2026-06-20", amount: 4.99 },
];

const totalRevenue = WRITER_EBOOKS.reduce((sum, e) => sum + e.price * (e.purchaseCount ?? 0), 0);

const STATS_ICONS = {
  book: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  dollar: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  users: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  chart: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
};

export default function WriterOverviewPage() {
  const totalSales = WRITER_EBOOKS.reduce((sum, e) => sum + (e.purchaseCount ?? 0), 0);

  return (
    <div>
      <DashboardPageHeader
        title="Writer Dashboard"
        subtitle="Track your ebooks, sales, and revenue."
        action={<Button href="/dashboard/writer/add" size="sm">+ Add Ebook</Button>}
      />

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatsCard label="Published" value={WRITER_EBOOKS.length} icon={STATS_ICONS.book} sub="ebooks" />
        <StatsCard label="Total Sales" value={totalSales.toLocaleString()} icon={STATS_ICONS.chart} sub="purchases" />
        <StatsCard label="Revenue" value={`$${totalRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} icon={STATS_ICONS.dollar} sub="all time" />
        <StatsCard label="Readers" value={totalSales.toLocaleString()} icon={STATS_ICONS.users} sub="unique buyers" />
      </div>

      {/* Recent Ebooks */}
      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink dark:text-parchment">My Ebooks</h2>
          <Link href="/dashboard/writer/ebooks" className="text-sm font-medium text-forest hover:underline dark:text-moss">Manage all →</Link>
        </div>
        <div className="overflow-hidden rounded-xl border border-ink/10 dark:border-parchment/10">
          <table className="w-full text-sm">
            <thead className="bg-darkCream/40 dark:bg-white/[0.03]">
              <tr>
                {["Title", "Price", "Status", "Sales"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-parchment/50">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10 bg-parchment dark:divide-parchment/10 dark:bg-ink">
              {WRITER_EBOOKS.map((e) => (
                <tr key={e._id} className="hover:bg-ink/[0.02] dark:hover:bg-parchment/[0.02]">
                  <td className="px-4 py-3 font-medium text-ink dark:text-parchment">{e.title}</td>
                  <td className="px-4 py-3 text-forest">${e.price.toFixed(2)}</td>
                  <td className="px-4 py-3"><Badge variant={e.status === "published" ? "moss" : "outline"} className="text-[10px]">{e.status}</Badge></td>
                  <td className="px-4 py-3 text-ink/60 dark:text-parchment/60">{e.purchaseCount?.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Sales */}
      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink dark:text-parchment">Recent Sales</h2>
          <Link href="/dashboard/writer/sales" className="text-sm font-medium text-forest hover:underline dark:text-moss">View all →</Link>
        </div>
        <div className="overflow-hidden rounded-xl border border-ink/10 dark:border-parchment/10">
          <table className="w-full text-sm">
            <thead className="bg-darkCream/40 dark:bg-white/[0.03]">
              <tr>
                {["Ebook", "Buyer", "Date", "Earned"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-parchment/50">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10 bg-parchment dark:divide-parchment/10 dark:bg-ink">
              {RECENT_SALES.map((s) => (
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
      </div>
    </div>
  );
}
