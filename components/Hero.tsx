import Link from 'next/link';

export default function Hero() {
  return (
    <section className="card mb-8 flex flex-col gap-6 bg-gradient-to-br from-white via-white to-blue-50">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Customer Experience Handbook</p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          A refreshed Support Wiki with modern navigation, search, and UI
        </h1>
        <p className="text-lg text-slate-700">
          Explore the articles that explain what Support Wiki is, why it exists, and how to contribute. Use the search bar to
          jump to the section you need in seconds.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Link className="button-primary" href="/articles">
          Browse all articles
        </Link>
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 underline decoration-brand-200 hover:text-brand-700"
          href="https://customerexperiencehandbook.com/"
          target="_blank"
          rel="noreferrer"
        >
          View the legacy site
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
