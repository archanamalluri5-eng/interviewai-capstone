export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Your interview practice overview.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Sessions Completed", value: "0" },
          { label: "Avg. Score", value: "--" },
          { label: "Streak", value: "0 days" },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-border bg-card p-6"
          >
            <p className="text-sm text-muted-foreground">{card.label}</p>
            <p className="mt-2 text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
