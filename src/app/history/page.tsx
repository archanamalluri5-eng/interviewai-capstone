export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Interview History</h1>
      <p className="mt-2 text-muted-foreground">
        Review your past practice sessions and track improvement.
      </p>
      <div className="mt-8 rounded-xl border border-border p-10 text-center">
        <p className="text-muted-foreground">No sessions yet. Start practicing to see your history here.</p>
      </div>
    </div>
  );
}
