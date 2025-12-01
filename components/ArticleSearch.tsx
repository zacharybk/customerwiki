'use client';

import { useMemo, useState } from 'react';
import type { Article } from '../content/articles';
import Link from 'next/link';

type ArticleSearchProps = {
  articles: Article[];
};

export default function ArticleSearch({ articles }: ArticleSearchProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return articles;
    const term = query.toLowerCase();
    return articles.filter((article) => {
      const haystack = [
        article.title,
        article.summary,
        article.tags.join(' '),
        article.sections.map((section) => `${section.heading} ${section.paragraphs.join(' ')} ${section.bullets?.join(' ') ?? ''}`).join(' ')
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [articles, query]);

  return (
    <section className="card mb-8">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Search</p>
          <h2 className="text-xl font-semibold text-slate-900">Find answers fast</h2>
          <p className="text-sm text-slate-600">
            Filter articles and sections by keywords, tags, or contributor details.
          </p>
        </div>
        <label className="relative block">
          <span className="sr-only">Search articles</span>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-inner shadow-slate-100 outline-none transition focus:border-brand-200 focus:ring-2 focus:ring-brand-200"
            placeholder="Search for metrics, contributors, or topics"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="m21 21-5.5-5.5m0 0A7.5 7.5 0 1 0 5.5 5.5a7.5 7.5 0 0 0 10 10Z" />
          </svg>
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="card block transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
                <span className="inline-flex h-2 w-2 rounded-full bg-brand-500" aria-hidden />
                {article.tags.join(' • ')}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{article.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{article.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
          {filtered.length === 0 ? (
            <p className="col-span-full text-sm text-slate-600">No results found. Try another keyword.</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
