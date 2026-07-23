export default function PracticePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Practice Interview</h1>
      <p className="mt-2 text-muted-foreground">
        Choose a role and start a mock interview session.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {["Software Engineer", "Product Manager", "Data Scientist", "Designer"].map(
          (role) => (
            <button
              key={role}
              className="rounded-xl border border-border bg-card p-6 text-left transition-colors hover:bg-accent"
            >
              <p className="font-semibold">{role}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                10 questions &middot; ~15 min
              </p>
            </button>
          )
        )}
      </div>
    </div>
  );
}
