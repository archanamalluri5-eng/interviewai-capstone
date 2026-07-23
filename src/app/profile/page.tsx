export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Profile & Settings</h1>
      <p className="mt-2 text-muted-foreground">
        Manage your preferences and account details.
      </p>
      <div className="mt-8 space-y-6">
        {[
          { label: "Display Name", placeholder: "Your name" },
          { label: "Target Role", placeholder: "e.g. Software Engineer" },
          { label: "Experience Level", placeholder: "e.g. Mid-level" },
        ].map((field) => (
          <div key={field.label}>
            <label className="block text-sm font-medium text-foreground">
              {field.label}
            </label>
            <input
              type="text"
              placeholder={field.placeholder}
              className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        ))}
        <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
          Save Changes
        </button>
      </div>
    </div>
  );
}
