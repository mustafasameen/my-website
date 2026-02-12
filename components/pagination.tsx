"use client";

import { cn } from "@/lib/utils";
import type { Blog } from "@/types/blog";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BlogList } from "./blog-list";
import { Button } from "./ui/button";

interface PaginationProps {
  allBlogs: any[]; // Blog[] or Publication[]
  postsPerPage?: number;
  isPublication?: boolean;
}

export default function Pagination({
  allBlogs,
  postsPerPage = 5,
  isPublication = false,
}: PaginationProps) {
  const router = useRouter();
  const searchParamsHook = useSearchParams();

  const { currentPage, totalPages, paginatedBlogs } = useMemo(() => {
    const searchParams = searchParamsHook ?? new URLSearchParams();
    const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);
    const totalPages = Math.max(1, Math.ceil(allBlogs.length / postsPerPage));

    const paginatedBlogs = [...allBlogs]
      .sort((a, b) => {
        if (isPublication) {
          const yearA = Number(a.metadata.year || 0);
          const yearB = Number(b.metadata.year || 0);
          if (yearA !== yearB) {
            return yearB - yearA;
          }
          return b.metadata.venue.localeCompare(a.metadata.venue);
        } else {
          return (
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime()
          );
        }
      })
      .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    return { currentPage, totalPages, paginatedBlogs };
  }, [allBlogs, searchParamsHook, postsPerPage, isPublication]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    const path = page === 1
      ? (isPublication ? "/publications" : "/blog")
      : (isPublication ? `/publications?page=${page}` : `/blog?page=${page}`);
    router.push(path);
  };

  return (
    <>
      <BlogList blogs={paginatedBlogs} currentPage={currentPage} isPublication={isPublication} />
      <nav
        aria-label="Blog pagination"
        className="flex justify-center gap-4 mt-8"
      >
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>

        <span className="flex items-center tracking-tight text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>

        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </nav>
    </>
  );
}

function PaginationButton({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="outline"
      className={cn("tracking-tight shadow-none", disabled && "opacity-50")}
    >
      {children}
    </Button>
  );
}
