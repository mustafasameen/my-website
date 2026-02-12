"use client";

import Container from "@/components/shared/container";

const news2026 = [
  {
    date: "Jan, 2026",
    content: (
      <>
        Our paper on the GHOST home detection software was accepted to the <a href="https://trb.org/AnnualMeeting/AnnualMeeting.aspx" target="_blank" rel="noopener noreferrer" className="underline">Transportation Research Board 105th Annual Meeting</a>.
      </>
    ),
  },
];

const news2025 = [
  {
    date: "Sep, 2025",
    content: (
      <>
        Released the <a href="https://arxiv.org/abs/2509.18181" target="_blank" rel="noopener noreferrer" className="underline">SAPA preprint</a> on theory-guided LLMs for ridesourcing mode choice modeling.
      </>
    ),
  },
  {
    date: "Aug, 2025",
    content: (
      <>
        Started my Ph.D. in Civil and Coastal Engineering at the <a href="https://www.ufl.edu" target="_blank" rel="noopener noreferrer" className="underline">University of Florida</a>.
      </>
    ),
  },
  {
    date: "Jul, 2025",
    content: (
      <>
        Completed a summer research internship at the <a href="https://mobility.mit.edu/" target="_blank" rel="noopener noreferrer" className="underline">MIT JTL-Transit Lab</a>.
      </>
    ),
  },
];

export default function NewsPage() {
  const newsItems = [...news2026, ...news2025];

  return (
    <Container
      size="large"
      className="prose prose-zinc dark:prose-invert text-zinc-800 dark:text-zinc-200 container animate-enter"
    >
      <div className="mb-8">
        <div className="flex border-b border-neutral-200 dark:border-neutral-700">
          <button className="px-6 py-2 text-base font-medium border-t border-l border-r rounded-t-md border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">2026–2025</button>
        </div>
      </div>
      <ul className="space-y-8">
        {newsItems.map((item, idx) => (
          <li key={idx} className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4">
            <span className="text-xs sm:text-sm text-neutral-500 min-w-0 sm:min-w-[120px] pt-0 sm:pt-1">{item.date}</span>
            <span className="text-[0.95rem] leading-relaxed">{item.content}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
} 