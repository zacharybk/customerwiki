import ArticleGrid from '../../components/ArticleGrid';
import { articles } from '../../content/articles';

export default function ArticlesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Articles</p>
        <h1 className="text-3xl font-bold text-slate-900">Explore the handbook</h1>
        <p className="text-base text-slate-700">
          Browse all migrated Support Wiki sections in one place, with modern navigation and search ready for expansion.
        </p>
      </header>
      <ArticleGrid
        articles={articles}
        title="All articles"
        subtitle="Each page is ready for future migration of the full handbook content."
      />
    </div>
  );
}
