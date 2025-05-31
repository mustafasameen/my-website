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
      <Suspense fallback={<div>Loading...</div>}>
        <Pagination allBlogs={allPublications} isPublication />
      </Suspense>
    </Container>
  );
}
