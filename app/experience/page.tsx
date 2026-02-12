import Container from "@/components/shared/container";

export default function Work() {
  return (
    <Container size="large">
      <main className="prose prose-neutral dark:prose-invert">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Experience
          </p>
          <hr className="my-4 border-neutral-200 dark:border-neutral-800" />
        </header>
        <section>
          <article>
            <header>
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                University of Florida
              </h2>
              <time className="text-neutral-600 dark:text-neutral-400 text-sm">
                Graduate Research Assistant, July 2025 — present
              </time>
            </header>
            <p>
              Architecting LLM-driven agent systems for mobility modeling and behavioral inference in the SERMoS Lab.
            </p>
            <ul>
              <li>
                Built a LangGraph-based multi-agent system (Planner, Coder, Critic) to automate analysis of large-scale mobile location data.
              </li>
              <li>
                Integrated cAST (Chunking via Abstract Syntax Trees) to retrieve and apply complex codebase documentation for transportation agencies.
              </li>
              <li>
                Developed the SAPA framework to synthesize psychometric variables from survey data, improving PR-AUC for ridesourcing mode choice prediction by 75.9%.
              </li>
              <li>
                Co-developed the GHOST Python package for bias-mitigated home detection, reducing spatial error to 1.84 meters on the Boston Walks dataset.
              </li>
              <li>
                Leading a household travel simulation where LLM agents negotiate shared resources via a structured conversation protocol.
              </li>
            </ul>
            <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
          </article>

          <article>
            <header>
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                MIT JTL-Transit Lab
              </h2>
              <time className="text-neutral-600 dark:text-neutral-400 text-sm">
                Summer Research Intern, June 2025 — July 2025
              </time>
            </header>
            <p>
              Investigated multi-agent LLM architectures for the Chicago Transit Authority (CTA).
            </p>
            <ul>
              <li>
                Designed a Spatial-RAG pipeline blending dense retrieval with sparse spatial lookup (GTFS/GIS geometry).
              </li>
              <li>
                Enabled agents to reason about delay propagation, rerouting, and simulate station-level dispatchers.
              </li>
              <li>
                Collaborated with transit operations researchers on deploying LLM agents for policy-driven scenarios.
              </li>
            </ul>
            <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
          </article>

          <article>
            <header>
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                Colorado College Math and Computer Science Department
              </h2>
              <time className="text-neutral-600 dark:text-neutral-400 text-sm">
                Undergraduate Student Researcher (Thesis), Aug 2024 — May 2025
              </time>
            </header>
            <p>
              Led research on formal methods and AI-driven feedback loops for mathematical proof automation and verification.
            </p>
            <ul>
              <li>
                Designed the FORMAL system, combining retrieval-augmented thinking with agentic reasoning to translate natural language mathematics into Lean 4 code.
              </li>
              <li>
                Achieved 92% syntactic correctness and 83% semantic accuracy on the Lean-Workbook dataset using local LLMs.
              </li>
              <li>
                Built dynamic vector stores for theorem statements and tactic examples, enabling efficient proof search and verification.
              </li>
            </ul>
          </article>
        </section>
      </main>
    </Container>
  );
}
