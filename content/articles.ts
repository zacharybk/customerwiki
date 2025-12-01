export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: 'support-wiki-overview',
    title: 'Support Wiki overview',
    summary:
      'What Support Wiki is, why it exists, and how the project helps customer-facing teams share and learn together.',
    tags: ['foundations', 'about'],
    sections: [
      {
        heading: 'Mission',
        paragraphs: [
          'Support Wiki exists to provide resources that solve typical challenges that businesses face while creating or scaling customer-facing teams such as Customer Support, Customer Experience, or Customer Success.',
          'The project is modeled after the High Growth Handbook and closes the gap on how customer-facing teams are key to scaling companies.'
        ]
      },
      {
        heading: 'Who it is for',
        paragraphs: [
          'Customer support professionals who want a central place to share knowledge, ask questions, and discover new playbooks.',
          'Executives across disciplines (CEO, CTO, COO, CMO, etc.) who want an industry-wide perspective on topics like customer support metrics, scaling teams, and career planning.'
        ]
      }
    ]
  },
  {
    slug: 'usage',
    title: 'How to use Support Wiki',
    summary: 'Quick ways to get value from the handbook and contribute your own expertise.',
    tags: ['usage', 'community'],
    sections: [
      {
        heading: 'For customer support professionals',
        paragraphs: ['Support Wiki is a great place to engage with peers and grow your craft.'],
        bullets: [
          'Share your knowledge and experience.',
          'Ask questions from other professionals.',
          "Share content and articles you've found helpful."
        ]
      },
      {
        heading: 'For leadership and operators',
        paragraphs: [
          'The handbook provides an industry-wide perspective on how to measure, scale, and empower customer-facing teams.',
          'Use it as a ready reference for metrics, scaling patterns, and career paths.'
        ]
      }
    ]
  },
  {
    slug: 'contributing',
    title: 'Contributing to the handbook',
    summary: 'See how to add your expertise, ask questions, and join the contributor community.',
    tags: ['contributors', 'how-to'],
    sections: [
      {
        heading: 'Guidelines',
        paragraphs: [
          'Please read the contribution guidelines before you submit a pull request or new idea. We welcome questions, articles, and helpful resources from the community.'
        ],
        bullets: ['https://support-wiki.gitbook.io/supportwiki/about-support-wiki/contributing']
      },
      {
        heading: 'Community',
        paragraphs: [
          'Support Wiki is an open-source project built by and for the community. The refreshed site keeps that spirit while offering modern navigation and search to make contributions easier to find.'
        ]
      }
    ]
  },
  {
    slug: 'creators',
    title: 'Creators and contributors',
    summary: 'Meet the people behind Support Wiki and see how to join them.',
    tags: ['team', 'community'],
    sections: [
      {
        heading: 'Project leads',
        paragraphs: [
          'Support Wiki was created by Zach Bouzan-Kaloustian with the help of Karthik Rameshkumar. The project continues to grow through contributions from customer experience professionals around the world.'
        ]
      },
      {
        heading: 'See all contributors',
        bullets: ['https://support-wiki.gitbook.io/supportwiki/about-support-wiki/contributing/contributors'],
        paragraphs: ['Read the full list of contributors to learn who has helped shape the handbook.']
      }
    ]
  }
];
