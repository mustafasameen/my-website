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

const linkClass =
  "font-medium underline decoration-from-font text-emerald-950 decoration-emerald-500 dark:text-emerald-50 dark:decoration-emerald-400 tracking-tight";

export default function About() {
  return (
    <Container
      size="large"
      className="prose prose-zinc dark:prose-invert
      text-zinc-800 dark:text-zinc-200 container animate-enter"
    >
      <p className="mt-5">
        I am a Ph.D. student at the{" "}
        <a
          href="https://www.ufl.edu"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          University of Florida
        </a>
        , advised by{" "}
        <a
          href="https://essie.ufl.edu/people/name/xilei-zhao/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Dr. Xilei Zhao
        </a>{" "}
        in the{" "}
        <a
          href="https://faculty.eng.ufl.edu/sermos-lab/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          SERMoS Lab
        </a>
        . Before that, I graduated from{" "}
        <a
          href="https://www.coloradocollege.edu"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Colorado College
        </a>{" "}
        with a double major in Computer Science and Mathematics.
      </p>
      <p>
        My research sits at the intersection of AI and transportation. I build{" "}
        <span className="font-medium">agentic AI systems</span> and{" "}
        <span className="font-medium">multi-agent simulations</span> that
        reason over mobility data, encode behavioral theory, and model human
        decision-making at scale.
      </p>
      <div className="not-prose mt-8 border-t border-neutral-200 pt-6 dark:border-neutral-800">
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
