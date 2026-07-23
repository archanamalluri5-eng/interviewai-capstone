interface HealthData {
  status: string;
  timestamp: string;
  service: string;
  version: string;
}

async function getHealth(): Promise<HealthData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/health`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function HealthPage() {
  const health = await getHealth();

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Health Check</h1>
      <p className="mt-2 text-muted-foreground">
        System status and diagnostics.
      </p>
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-3">
          <span
            className={`inline-block h-3 w-3 rounded-full ${
              health.status === "ok" ? "bg-success" : "bg-danger"
            }`}
          />
          <span className="font-semibold uppercase">{health.status}</span>
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-muted-foreground">Service</dt>
            <dd className="mt-1 font-medium">{health.service}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Version</dt>
            <dd className="mt-1 font-medium">{health.version}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-muted-foreground">Timestamp</dt>
            <dd className="mt-1 font-mono text-xs">{health.timestamp}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
