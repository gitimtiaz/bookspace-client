export default function DashboardPageHeader({ title, subtitle, action }) {
  return (
    <div className="mb-6 flex items-start justify-between border-b border-ink/10 pb-5 dark:border-parchment/10">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink dark:text-parchment">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm text-ink/60 dark:text-parchment/60">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
