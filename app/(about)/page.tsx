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
  url: "https://onurhan.dev",
  sameAs: [
    "https://github.com/mustafasameen",
    "https://www.linkedin.com/in/mustafasameen/",
  ],
};

export default function About() {
  const paragraphs = [
    <>
      I am an incoming Ph.D. student in the SERMoS Lab at the{" "}
      <a href="https://www.ufl.edu" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        University of Florida
      </a>
      , advised by{" "}
      <a href="https://faculty.eng.ufl.edu/xilei-zhao/" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        Dr. Xilei Zhao
      </a>
      , joining the{" "}
      <a href="https://faculty.eng.ufl.edu/sermos-lab/" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        SERMoS Lab
      </a>
      {" "}this Fall. I graduate this May from{" "}
      <a href="https://www.coloradocollege.edu" className="font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight">
        Colorado College
      </a>
      {" "}with a double major in Computer Science and Mathematics.
    </>,
    `My research sits at the intersection of AI and transportation engineering. I'm currently focused on:
     (A) Spatio-temporal demand forecasting using LLM-based agents
     (B) Multi-agent LLM systems for adaptive, real-time digital twins
     (C) Fairness-aware, interpretable models across multi-stage travel-model pipelines`,
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
