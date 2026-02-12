import Container from "@/components/shared/container";
import Social from "@/components/social";
import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mustafa Sameen",
  jobTitle: "PhD Student",
  worksFor: {
    "@type": "Organization",
    name: "University of Florida",
  },
  url: "https://mustafasameen.com",
  sameAs: [
    "https://github.com/mustafasameen",
    "https://www.linkedin.com/in/mustafasameen/",
  ],
};

export default function About() {
  const chips = [
    "Agentic AI systems",
    "Multi-agent simulation",
    "LLMs in transportation",
    "Spatial bias mitigation",
    "Retrieval-augmented generation",
  ];

  const paragraphs = [
    <>
      I am a Ph.D. student at the{" "}
      <a href="https://www.ufl.edu" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        University of Florida
      </a>
      , advised by{" "}
      <a href="https://essie.ufl.edu/people/name/xilei-zhao/" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        Dr. Xilei Zhao
      </a>
      , in the{" "}
      <a href="https://faculty.eng.ufl.edu/sermos-lab/" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        SERMoS Lab
      </a>. I graduated in May 2025 from{" "}
      <a href="https://www.coloradocollege.edu" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        Colorado College
      </a>
      {" "}with a double major in Computer Science and Mathematics.
      <br />
    My research sits at the intersection of AI and transportation engineering. My interests are: {""}
    {/* <span className="font-medium">
      Spatio-temporal forecasting
    </span>
    {", "} */}
    <span className="font-medium">
      Agentic AI systems & multi-agent simulation
    </span>
    {", and "}
    <span className="font-medium">
      LLMs in transportation, spatial bias mitigation
    </span>
    .

      I focus on building LLM-driven systems that reason over mobility data, encode behavioral theory, and simulate decision-making at scale. 
    </>
  ];

  return (
    <Container
      size="large"
      className="prose prose-zinc dark:prose-invert
      text-zinc-800 dark:text-zinc-200 container animate-enter"
    >
      <p className="my-5 text-zinc-800 dark:text-zinc-200">
        {/* Hi, I&apos;m Mustafa. */}
      </p>
      {paragraphs.map((paragraph, index) => (
        <div
          key={index}
          style={
            { "--stagger": index } as React.CSSProperties & {
              [key: string]: number;
            }
          }
        >
          <p className={index === paragraphs.length - 1 ? "mb-8" : ""}>
            {paragraph}
          </p>
          {index === 0 && null}
        </div>
      ))}
      <div className="not-prose mb-8 rounded-2xl border border-neutral-200/70 p-4 shadow-sm dark:border-neutral-800/80 sm:p-5">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Focus areas
          </p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium tracking-tight text-neutral-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/60 hover:text-emerald-900 dark:border-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-200 dark:hover:border-emerald-700/60 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-100"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="not-prose">
        <Social />
      </div>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Container>
  );
}
