"use client";

import Container from "@/components/shared/container";

const news2025 = [
  {
    date: "June, 2025",
    content: (
      <>
        Accepted to the <a href="https://www.urbanailab.com/ra-internship" target="_blank" rel="noopener noreferrer" className="underline">MIT-UF-NEU 2025</a> Joint Summer Research Camp under <a href="https://www.linkedin.com/in/musamauh/" target="_blank" rel="noopener noreferrer" className="underline">Dr. Muhammad Usama</a>, joining the <a href="https://mobility.mit.edu/" target="_blank" rel="noopener noreferrer" className="underline">JTL Urban Mobility Lab at MIT</a> and <a href="https://tso.sites.northeastern.edu" target="_blank" rel="noopener noreferrer" className="underline">Transit Mobility Lab at Northeastern</a>.
      </>
    ),
  },
  {
    date: "April, 2025",
    content: (
      <>
        Presented &quot;FORMAL: Democratizing Lean 4 Formalization Through Retrieval-Augmented Thinking and Agentic Feedback Loops&quot; at the <a href="https://sites.google.com/view/mathforallnola/in-person-locations/boulder-co" target="_blank" rel="noopener noreferrer" className="underline">Math for All Conference 2025</a>
      </>
    ),
  },
  {
    date: "April, 2025",
    content: (
      <>
        Will be joining the <a href="https://faculty.eng.ufl.edu/sermos-lab/" target="_blank" rel="noopener noreferrer" className="underline">SERMoS Lab@University of Florida</a> this Fall as a Ph.D. Student!
      </>
    ),
  },
];

export default function NewsPage() {
  const newsItems = news2025;

  return (
    <Container
      size="large"
      className="prose prose-zinc dark:prose-invert text-zinc-800 dark:text-zinc-200 container animate-enter"
    >
      <div className="mb-8">
        <div className="flex border-b border-neutral-200 dark:border-neutral-700">
          <button className="px-6 py-2 text-base font-medium border-t border-l border-r rounded-t-md border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">2025</button>
        </div>
      </div>
      <ul className="space-y-8">
        {newsItems.map((item, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <span className="text-sm text-neutral-500 min-w-[120px] pt-1">{item.date}</span>
            <span className="text-[0.95rem] leading-relaxed text-base">{item.content}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
} 