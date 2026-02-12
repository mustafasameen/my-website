export interface Blog {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
  };
  content: string;
  readingTime: number;
}

export interface Publication {
  slug: string;
  metadata: {
    title: string;
    authors: string;
    venue: string; // Preprint or conference name
    pdfUrl?: string;
    codeUrl?: string;
    coFirstAuthors?: string;
    year?: string;
    image?: string;
  };
  content: string;
}
