import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 sm:py-32">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
          Ace your next interview
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Practice with AI-powered mock interviews. Get instant feedback on your
          answers, body language, and confidence.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/practice"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            Start Practicing
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
