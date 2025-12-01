import Link from 'next/link';
import type { Article } from '../content/articles';

type ArticleGridProps = {
  articles: Article[];
  title?: string;
  subtitle?: string;
};

export default function ArticleGrid({ articles, title, subtitle }: ArticleGridProps) {
  return (
    <section className="card">
      <div className="flex flex-col gap-2">
        {title ? <h2 className="section-title">{title}</h2> : null}
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="card block transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
              <span className="inline-flex h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              {article.tags.join(' • ')}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{article.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{article.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
