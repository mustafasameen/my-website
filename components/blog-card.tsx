import Link from "next/link";

export const BlogCard = ({ blog, isPublication = false }) => {
  const renderAuthors = (authors) => {
    if (typeof authors !== "string") return authors;
    const parts = authors.split(/(Mustafa\s+Sameen)/i);
    return parts.map((part, idx) => {
      if (/^Mustafa\s+Sameen$/i.test(part)) {
        return (
          <strong key={idx} className="font-semibold decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">{part}</strong>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  if (isPublication) {
    return (
      <article className="py-4 sm:py-8 dark:border-b-zinc-800">
        <header>
          <h3 className="font-semibold underline underline-offset-4 decoration-1 decoration-zinc-300">
            <a href={blog.metadata.pdfUrl} target="_blank" rel="noopener noreferrer">{blog.metadata.title}</a>
          </h3>
          <p className="mt-1 opacity-70 dark:opacity-60">
            {renderAuthors(blog.metadata.authors)}
          </p>
        </header>
        <footer className="mt-1 flex items-center space-x-2 font-mono text-sm uppercase tracking-wider opacity-50 dark:opacity-40">
          <span>{blog.metadata.venue}</span>
        </footer>
      </article>
    );
  }
  return (
    <article className="py-4 sm:py-8 dark:border-b-zinc-800">
      <header>
        <h3 className="font-semibold underline underline-offset-4 decoration-1 decoration-zinc-300">
          <Link href={`/blog/${blog.slug}`}>{blog.metadata.title}</Link>
        </h3>
        <p className="mt-1 opacity-70 dark:opacity-60">
          {blog.metadata.summary}
        </p>
      </header>
      <footer className="mt-1 flex items-center space-x-2 font-mono text-sm uppercase tracking-wider opacity-50 dark:opacity-40">
        <time>
          {new Date(blog.metadata.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span>·</span>
        <span>{blog.readingTime} MIN READ</span>
      </footer>
    </article>
  );
};
