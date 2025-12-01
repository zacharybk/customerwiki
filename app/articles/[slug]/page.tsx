import Link from 'next/link';
import ArticleDetail from '../../../components/ArticleDetail';
import { articles } from '../../../content/articles';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug);

  if (!article) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Article not found</h1>
        <p className="text-base text-slate-700">We could not locate that article. Try searching or browsing the full list.</p>
        <Link className="button-primary" href="/articles">
          Back to articles
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700" href="/articles">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Back to articles
      </Link>
      <ArticleDetail article={article} />
    </div>
  );
}
