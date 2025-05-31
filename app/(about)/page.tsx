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
  const paragraphs = [
    <>
      I am an incoming Ph.D. student at the{" "}
      <a href="https://www.ufl.edu" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        University of Florida
      </a>
      , advised by{" "}
      <a href="https://essie.ufl.edu/people/name/xilei-zhao/" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        Dr. Xilei Zhao
      </a>
      , joining the{" "}
      <a href="https://faculty.eng.ufl.edu/sermos-lab/" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        SERMoS Lab
      </a>
      {" "}this Fall. I graduated this May from{" "}
      <a href="https://www.coloradocollege.edu" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        Colorado College
      </a>
      {" "}with a double major in Computer Science and Mathematics.
      <br />
      <br />
      This summer, I will be joining the{" "}
      <a href="https://www.urbanailab.com/ra-internship" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        MIT-UF-NEU 2025 Joint Summer Research Camp
      </a>
      {" "}under{" "}
      <a href="https://www.linkedin.com/in/musamauh/" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        Dr. Muhammad Usama
      </a>
       {" "} at the{" "}
      <a href="https://mobility.mit.edu/" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        JTL Urban Mobility Lab at MIT
      </a>
      {" "}and{" "}
      <a href="https://tso.sites.northeastern.edu" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        Transit Mobility Lab at Northeastern
      </a>
      . Our primary focus will be on developing and deploying LLM-based frameworks for transit systems.
      <br />
      <br />
    My research sits at the intersection of AI and transportation engineering. My interests are: {""}
    <span className="font-medium">
      Spatio-temporal forecasting
    </span>
    {", "}
    <span className="font-medium">
      LLM agents & multi-agentic systems
    </span>
    {", and "}
    <span className="font-medium">
      AI for transportation & mobility
    </span>
    .
    </>
  ];

  return (
    <Container
      size="large"
      className="prose prose-zinc dark:prose-invert
      text-zinc-800 dark:text-zinc-200 container animate-enter"
    >
      <p className="my-5 text-zinc-800 dark:text-zinc-200">
        Hi, I&apos;m Mustafa.
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
          {index === 0 && <hr />}
        </div>
      ))}
      <Social />
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Container>
  );
}
