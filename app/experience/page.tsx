import Container from "@/components/shared/container";

export default function Work() {
  return (
    <Container size="large">
      <main className="prose prose-neutral dark:prose-invert">
        {/* <header>
          <p>
            On a mission to create impactful applications that engage users and
            drive value for businesses. Here&apos;s a summary of my journey so
            far.
          </p>
          <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        </header> */}
        <section>
          <article>
            <header>
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                University of Florida
              </h2>
              <time className="text-neutral-600 dark:text-neutral-400 text-sm">
                Research Assistant, May 2025 — present
              </time>
            </header>
            <p>
              At the University of Florida, I am a research assistant working on AI-agent frameworks for ridesourcing forecasting and prescriptive analysis.
            </p>
            <ul>
              <li>
                Developing an AI-agent layer that integrates with spatio-temporal deep learning models (e.g., GCNs, CNN-RNN/Transformer hybrids) to enable real-time forecasting and prescriptive analytics for ride-sourcing demand.
              </li>
              <li>
                Designing automated mechanisms for &quot;what-if&quot; policy analysis, allowing simulation of interventions such as dynamic congestion pricing or infrastructure changes.
              </li>
              <li>
                Implementing agent-based optimization to iteratively search for interventions that optimize stakeholder objectives (e.g., minimizing passenger wait times, balancing vehicle distribution).
              </li>
              <li>
                Investigating scalable deployment strategies for AI agents across heterogeneous urban zones, comparing global versus local agent paradigms for improved forecasting and policy relevance.
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
                Undergraduate Student Researcher, Aug 2024 — May 2025
              </time>
            </header>
            <p>
              Led research on formal methods and AI-driven feedback loops for mathematical proof automation and verification.
            </p>
            <ul>
              <li>
                Designed the FORMAL system, combining retrieval-augmented thinking with agentic feedback loops to translate natural language mathematics into Lean 4 code.
              </li>
              <li>
                Developed dynamic vector stores for theorem statements and tactic examples, enabling efficient proof search and verification.
              </li>
              <li>
                Built a robust agentic feedback loop that analyzes errors via LLMs and autonomously refines formalization processes.
              </li>
              <li>
                Achieved 92% syntactic correctness and 83% semantic accuracy on benchmark datasets, outperforming pure LLM approaches.
              </li>
              <li>
                Implemented a low-resource efficient system using local LLMs, democratizing access to formal verification.
              </li>
            </ul>
                      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
          </article>

          <article>
            <header>
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                SocialTechLab Inc.
              </h2>
              <time className="text-neutral-600 dark:text-neutral-400 text-sm">
                Software Engineer Intern, Jun 2024 — Aug 2024
              </time>
            </header>
            <p>
              Contributed to the development of a mental wellness app, focusing on feature engineering, AI integration, and user engagement.
            </p>
            <ul>
              <li>
                Engineered and launched multiple innovative features, including real-time push notifications and QR code-based friend addition, boosting user engagement by 30%.
              </li>
              <li>
                Led AI image processing setup on AWS, resolving critical issues and increasing application stability by 25%.
              </li>
              <li>
                Optimized front-end and back-end connectivity, preparing the app for a wider release.
              </li>
            </ul>
                      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
          </article>


          <article>
            <header>
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                State of the Rockies
              </h2>
              <time className="text-neutral-600 dark:text-neutral-400 text-sm">
                Research Fellow, May 2023 — May 2025
              </time>
            </header>
            <p>
              Conducted research on Indigenous oral histories, environmental data, and conservation policy recommendations.
            </p>
            <ul>
              <li>
                Developed NLP pipelines to transcribe and analyze Indigenous oral histories from the Bears Ears region.
              </li>
              <li>
                Linked linguistic themes from transcriptions with environmental data to contextualize Indigenous narratives.
              </li>
              <li>
                Created a GIS-integrated storytelling platform for conservation efforts.
              </li>
              <li>
                Produced policy recommendations for the Bears Ears National Monument Resource Management Plan.
              </li>
            </ul>
          </article>
        </section>
      </main>
    </Container>
  );
}
