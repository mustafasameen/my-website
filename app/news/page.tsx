import PageHeader from "@/components/page-header";
import Container from "@/components/shared/container";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "News",
  description: "Recent updates, milestones, and announcements.",
};

type NewsItem = {
  date: string;
  content: ReactNode;
};

type YearGroup = {
  year: string;
  items: NewsItem[];
};

const linkClass =
  "underline decoration-from-font decoration-emerald-500 dark:decoration-emerald-400 transition-colors hover:text-emerald-800 dark:hover:text-emerald-300";

const news: YearGroup[] = [
  {
    year: "2026",
    items: [
      {
        date: "Jan",
        content: (
          <>
            Our paper on the GHOST home detection software was accepted to the{" "}
            <a
              href="https://trb.org/AnnualMeeting/AnnualMeeting.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Transportation Research Board 105th Annual Meeting
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        date: "Sep",
        content: (
          <>
            Released the{" "}
            <a
              href="https://arxiv.org/abs/2509.18181"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              SAPA preprint
            </a>{" "}
            on theory-guided LLMs for ridesourcing mode choice modeling.
          </>
        ),
      },
      {
        date: "Aug",
        content: (
          <>
            Started my Ph.D. in Civil and Coastal Engineering at the{" "}
            <a
              href="https://www.ufl.edu"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              University of Florida
            </a>
            .
          </>
        ),
      },
      {
        date: "Jul",
        content: (
          <>
            Completed a summer research internship at the{" "}
            <a
              href="https://mobility.mit.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              MIT JTL-Transit Lab
            </a>
            .
          </>
        ),
      },
    ],
  },
];

export default function NewsPage() {
  return (
    <Container size="large" className="container animate-enter">
      <PageHeader
        eyebrow="News"
        title="What's new"
        subtitle="Milestones, papers, and announcements."
      />
      <div className="space-y-12">
        {news.map((group) => (
          <section key={group.year} className="flex flex-col gap-4 sm:flex-row sm:gap-10">
            <h2 className="shrink-0 font-mono text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 sm:w-16 sm:pt-0.5">
              {group.year}
            </h2>
            <ul className="flex-1 space-y-6">
              {group.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 sm:w-10">
                    {item.date}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {item.content}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  );
}
