import type { Article } from '../content/articles';

export default function ArticleDetail({ article }: { article: Article }) {
  return (
    <article className="card space-y-8">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
          <span className="inline-flex h-2 w-2 rounded-full bg-brand-500" aria-hidden />
          {article.tags.join(' • ')}
        </div>
        <h1 className="text-3xl font-bold text-slate-900">{article.title}</h1>
        <p className="text-base text-slate-700">{article.summary}</p>
      </header>

      <div className="space-y-6">
        {article.sections.map((section) => (
          <section key={section.heading} className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 ? (
              <ul className="list-disc space-y-1 pl-5 text-base text-slate-700">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>
                    {bullet.startsWith('http') ? (
                      <a href={bullet} target="_blank" rel="noreferrer">
                        {bullet}
                      </a>
                    ) : (
                      bullet
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}
