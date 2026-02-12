import Link from "next/link";

export const BlogCard = ({ blog, isPublication = false }) => {
  const renderAuthors = (authors, coFirstList: string[]) => {
    if (typeof authors !== "string") return authors;
    const coFirstSet = new Set(
      coFirstList.map((name) => name.trim().toLowerCase()).filter(Boolean)
    );

    return authors.split(",").map((rawName, idx, arr) => {
      const name = rawName.trim();
      const hasAsterisk = coFirstSet.has(name.toLowerCase());
      const label = hasAsterisk ? `${name}*` : name;
      const isMustafa = /^Mustafa\s+Sameen$/i.test(name);
      const node = isMustafa ? (
        <strong
          key={idx}
          className="font-semibold decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight"
        >
          {label}
        </strong>
      ) : (
        <span key={idx}>{label}</span>
      );

      if (idx === arr.length - 1) {
        return node;
      }

      return (
        <span key={`${idx}-wrap`}>
          {node}
          {", "}
        </span>
      );
    });
  };

  if (isPublication) {
    const pdfUrl = blog.metadata.pdfUrl?.trim();
    const hasPdf = Boolean(pdfUrl);
    const year = blog.metadata.year?.trim();
    const codeUrl = blog.metadata.codeUrl?.trim();
    const hasCode = Boolean(codeUrl);
    const coFirstAuthors = blog.metadata.coFirstAuthors || "";
    const coFirstList = coFirstAuthors.split(",").map((name) => name.trim());

    const renderBadge = (label: string, href: string) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 inline-flex items-center rounded border border-zinc-200 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-zinc-700 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
      >
        {label}
      </a>
    );

    return (
      <article className="py-4 sm:py-8 dark:border-b-zinc-800">
        <header>
          <h3 className="font-semibold underline underline-offset-4 decoration-1 decoration-zinc-300">
            {hasPdf ? (
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                {blog.metadata.title}
              </a>
            ) : (
              <span>{blog.metadata.title}</span>
            )}
            {hasPdf && renderBadge("PDF", pdfUrl)}
            {hasCode && renderBadge("Code", codeUrl)}
          </h3>
          <p className="mt-1 opacity-70 dark:opacity-60">
            {renderAuthors(blog.metadata.authors, coFirstList)}
          </p>
        </header>
        <footer className="mt-1 flex items-center space-x-2 font-mono text-sm uppercase tracking-wider opacity-50 dark:opacity-40">
          <span>{blog.metadata.venue}</span>
          {year && (
            <>
              <span>·</span>
              <span>{year}</span>
            </>
          )}
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
