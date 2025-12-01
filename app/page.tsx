import Hero from '../components/Hero';
import ArticleSearch from '../components/ArticleSearch';
import ArticleGrid from '../components/ArticleGrid';
import { articles } from '../content/articles';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Hero />
      <ArticleSearch articles={articles} />
      <ArticleGrid
        articles={articles.slice(0, 3)}
        title="Start with these sections"
        subtitle="Get the fastest overview of what the refreshed handbook covers."
      />
    </div>
  );
}
