import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { getBlogPosts } from "@/app/db/blog";
import Claps from "@/components/claps";
import { CustomMDX } from "@/components/mdx";
import TableOfContents from "@/components/table-of-contents";
import { extractHeadings, formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { slug } = await params;
  const blog = getBlogPosts().find((blog) => blog.slug === slug);

  if (!blog) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    keywords,
  } = blog.metadata;

  let ogImage =
    new URL(
      "/opengraph-image",
      process.env.NEXT_PUBLIC_APP_URL || "https://mustafasameen.com"
    ).toString() + `?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://mustafasameen.com/publications/${blog.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@mustafasameen",
      creator: "@mustafasameen",
      images: [ogImage],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogPosts().find((blog) => blog.slug === slug);
  const headings = blog ? extractHeadings(blog.content) : [];

  if (!blog) {
    notFound();
  }

  return (
    <section className="mx-auto px-2 sm:px-6 lg:px-8 w-full sm:max-w-screen-lg">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.metadata.title,
            datePublished: blog.metadata.publishedAt,
            dateModified: blog.metadata.publishedAt,
            description: blog.metadata.summary,
            image: blog.metadata.image
              ? `https://mustafasameen.com${blog.metadata.image}`
              : `https://mustafasameen.com/og?title=${blog.metadata.title}`,
            url: `https://mustafasameen.com/publications/${blog.slug}`,
            author: {
              "@type": "Person",
              name: "Mustafa Sameen",
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {blog.metadata.title}
      </h1>
      <div className="flex justify-start items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(blog.metadata.publishedAt)}
          </p>
          <span className="mx-2 text-neutral-400">—</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {blog.readingTime} min read
          </p>
        </Suspense>
      </div>
      <TableOfContents headings={headings} />
      <article className="prose prose-quoteless prose-neutral dark:prose-invert text-justify w-auto">
        <CustomMDX source={blog.content} />
      </article>

      <Claps key={blog.slug} />
    </section>
  );
}
