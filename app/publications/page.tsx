import Pagination from "@/components/pagination";
import Container from "@/components/shared/container";
import type { Metadata } from "next";
import { Suspense } from "react";
import { getPublications } from "../db/publications";

export const metadata: Metadata = {
  title: "Publications",
  description: "Browse my research papers and preprints.",
};

export default function PublicationsPage() {
  const allPublications = getPublications();

  return (
    <Container size="large">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          Publications
        </p>
        <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
          * Equal contribution
        </p>
        <hr className="my-4 border-neutral-200 dark:border-neutral-800" />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Pagination allBlogs={allPublications} isPublication />
      </Suspense>
    </Container>
  );
}
