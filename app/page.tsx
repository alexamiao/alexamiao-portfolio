import NetworkBackground from "./components/NetworkBackground";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Particles */}
        <NetworkBackground />

        {/* Hero content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-5xl font-extrabold text-ink-primary">
            Alexa Miao
          </h1>

          {/* ✅ FIX 1: constrain width so text wraps nicely */}
          <p className="mt-4 max-w-3xl text-base md:text-lg font-medium text-ink-primary leading-7">
            Hi there 👋, I'm Junyi Miao (I go by Alexa). I’m a{" "}
            <span className="font-bold text-brand-600">data scientist</span> currently pursuing an{" "}
            <span className="font-bold text-brand-700">MS in Information Systems</span>. I focus on
            analytics, AI-enabled workflows, and{" "}
            <span className="font-bold text-brand-600">business intelligence</span>.
          </p>


          {/* Social buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {/* Shared pill style */}
            {/* Transparent -> lavender hover so it feels clickable */}
            {/* (Uses your Tailwind theme colors: brand + ink + accent) */}

            {/* GitHub */}
            <a
              href="https://github.com/alexamiao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-muted/40 bg-white px-5 py-2 text-sm md:text-base font-semibold text-ink-muted shadow-sm transition-all duration-200 hover:bg-brand-400/40 hover:border-brand-600 hover:shadow-md hover:-translate-y-[1px]"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.78.12 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56A11.505 11.505 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/junyimiao/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-muted/40 bg-white px-5 py-2 text-sm md:text-base font-semibold text-ink-muted shadow-sm transition-all duration-200 hover:bg-brand-400/40 hover:border-brand-600 hover:shadow-md hover:-translate-y-[1px]"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 11.001 5.001A2.5 2.5 0 014.98 3.5zM3 8.99h3.98V21H3V8.99zM10.5 8.99h3.81v1.63h.05c.53-1 1.82-2.04 3.75-2.04 4.01 0 4.75 2.44 4.75 5.61V21h-3.98v-5.08c0-1.21-.02-2.78-1.69-2.78-1.69 0-1.95 1.32-1.95 2.69V21H10.5V8.99z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* Medium (shows for sure + arrow-in-box icon) */}
            <a
              href="https://medium.com/@miaomiao789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-muted/40 bg-white px-5 py-2 text-sm md:text-base font-semibold text-ink-muted shadow-sm transition-all duration-200 hover:bg-brand-400/40 hover:border-brand-600 hover:shadow-md hover:-translate-y-[1px]"
            >
              <span>Medium</span>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:junyimiao11@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-ink-muted/40 bg-white px-5 py-2 text-sm md:text-base font-semibold text-ink-muted shadow-sm transition-all duration-200 hover:bg-brand-400/40 hover:border-brand-600 hover:shadow-md hover:-translate-y-[1px]"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <span>Email</span>
            </a>
          </div>


          {/* Scroll arrow */}
          <a
            href="#about"
            aria-label="Scroll to About"
            className="mt-16 flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-2xl leading-none font-light text-slate-500 transition hover:bg-brand-100 hover:text-brand-600"
          >
            ↓
          </a>
        </div>
      </section>

      <section id="about" className="w-full">
        <div className="grid w-full md:grid-cols-[2fr_3fr]">
          {/* Left: full photo */}
          <div className="relative min-h-[45vh] md:min-h-[55vh]">
            <Image
              src="/images/about.jpeg"
              alt="Junyi Miao"
              fill
              priority
              className="object-cover"
            />
            {/* optional: subtle overlay tint like the reference */}
            <div className="absolute inset-0 bg-brand-400/20 mix-blend-multiply" />
          </div>

          {/* Right: colored background + text */}
          <div className="bg-brand-400/35 text-ink-primary px-10 py-14 md:pl-14 md:pr-20 md:py-18">

            <div className="mt-8 space-y-6 text-base md:text-lg font-medium leading-relaxed text-ink-secondary">
              <p className="text-xl font-semibold text-brand-600">
                Hi, I’m Alexa.
              </p>


              <p>
                I specialize in{" "}
                <span className="font-bold text-brand-700">database management</span> and
                business intelligence systems that support strategic decisions.
                If you’re looking for someone to design{" "}
                <span className="font-bold text-brand-700">scalable data solutions</span>{" "}
                that support strategic, data-driven decisions, I’m the expert you’re seeking.
              </p>

              <p>
                Tools I use often: SQL, Excel, Power BI, Tableau, Python, ETL Pipelines — and
                I’m growing in{" "}
                <span className="font-bold text-brand-700">AI workflows</span> like
                evaluation and retrieval-augmented analytics.
              </p>

            </div>
          </div>
        </div>
      </section>


      <section id="projects" className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-ink-primary">
              Portfolio
            </h2>
            <p className="mt-2 text-base md:text-lg text-ink-secondary">
              Selected work (Data Analytics + AI Workflows)
            </p>
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Item */}
            <a
              href="https://github.com/alexamiao/rag-llm-retrieval-system"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm transition hover:bg-brand-50 hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-ink-primary group-hover:text-ink-primary">
                    RAG_LLM_Retrieval_System
                  </h3>
                  <p className="mt-2 text-sm md:text-base leading-7 text-ink-secondary">
                    A production-ready RAG system; focuses on system design, retrieval quality, and reproducibility.
                  </p>
                </div>

                {/* external link icon */}
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand-200 text-ink-muted transition group-hover:bg-brand-200 group-hover:text-ink-primary">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 3h7v7" />
                    <path d="M10 14L21 3" />
                    <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  </svg>
                </span>
              </div>

              {/* tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Python
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Docker
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  RAG/LLM
                </span>
              </div>
            </a>

            {/* Duplicate items (copy/paste) */}
            <a
              href="https://github.com/alexamiao/ai-agent-driven-csv-aggregation"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm transition hover:bg-brand-50 hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-ink-primary">
                    AI Agent-driven CSV Data Aggregation
                  </h3>
                  <p className="mt-2 text-sm md:text-base leading-7 text-ink-secondary">
                    A project implements CSV concatenation workflow and evaluates AI agent's responses based on docstrings, system prompts, and user queries.
                  </p>
                </div>

                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand-200 text-ink-muted transition group-hover:bg-brand-200 group-hover:text-ink-primary">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 3h7v7" />
                    <path d="M10 14L21 3" />
                    <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  </svg>
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  AI Agent
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Analytics
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Python
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  LLM
                </span>
              </div>
            </a>

            {/* Duplicate items (copy/paste) */}
            <a
              href="https://github.com/alexamiao/medallion-etl-data-cleaning-pipeline"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm transition hover:bg-brand-50 hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-ink-primary">
                    Medallion-ETL-Data-Cleaning-Pipeline
                  </h3>
                  <p className="mt-2 text-sm md:text-base leading-7 text-ink-secondary">
                    A resuable ETL data pipeline implementing the Medallion Architecture (Bronze–Silver–Gold) for data preparation.
                  </p>
                </div>

                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand-200 text-ink-muted transition group-hover:bg-brand-200 group-hover:text-ink-primary">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 3h7v7" />
                    <path d="M10 14L21 3" />
                    <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  </svg>
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  ETL Pipeline
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Data Cleaning
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Medallion Architecture
                </span>
              </div>
            </a>

            {/* Duplicate items (copy/paste) */}
            <a
              href="https://public.tableau.com/app/profile/junyi.miao/viz/project1_17673146838400/OnlineRetailSalesPerformanceCustomerValueInsights"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm transition hover:bg-brand-50 hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-ink-primary">
                    Business Intelligence and Data Visualization (Forage Simulation)
                  </h3>
                  <p className="mt-2 text-sm md:text-base leading-7 text-ink-secondary">
                    An interactive Tableau dashboard for TATA's 2010-2011 online retail sales performance and customer value insights.
                  </p>
                </div>

                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand-200 text-ink-muted transition group-hover:bg-brand-200 group-hover:text-ink-primary">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 3h7v7" />
                    <path d="M10 14L21 3" />
                    <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  </svg>
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Tableau
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Marketing Analysis
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Data Visualization
                </span>
              </div>
            </a>

            {/* Duplicate items (copy/paste) */}
            <a
              href="https://www.kaggle.com/code/alexamiao/u-s-extreme-weather-events-analysis-2016-2022?scriptVersionId=291022808"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm transition hover:bg-brand-50 hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-ink-primary">
                    U.S. Extreme Weather Trends: Insights from 2016–2022
                  </h3>
                  <p className="mt-2 text-sm md:text-base leading-7 text-ink-secondary">
                    A project analyzes historical U.S. extreme weather event data to identify risk patterns, supporting future forecasting and policy-oriented decision-making.
                  </p>
                </div>

                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand-200 text-ink-muted transition group-hover:bg-brand-200 group-hover:text-ink-primary">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 3h7v7" />
                    <path d="M10 14L21 3" />
                    <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  </svg>
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Data preparation
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Evaluation
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-ink-secondary">
                  Decision Making
                </span>
              </div>
            </a>



          </div>
        </div>
      </section>



      <section id="experience" className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink-primary">
              Experience
            </h2>
            <p className="mt-2 text-base md:text-lg text-ink-secondary">
              Professional foundation + academic origin
            </p>
          </div>

          {/* ===== Group 1: Professional Foundation ===== */}
          <div className="mt-14">
            <h3 className="text-xl md:text-2xl font-bold text-ink-primary">
              Professional foundation
            </h3>
            <div className="mt-8 grid gap-8">
              {/* Experience Item */}
              <div className="relative overflow-hidden rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm">
                {/* left accent rail */}
                <div className="absolute left-0 top-0 h-full w-1 bg-brand-400" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-extrabold text-ink-primary">
                      Product Specialist
                    </h4>
                    <p className="mt-1 text-sm md:text-base text-ink-secondary">
                      National Auto Glass Direct Inc.
                    </p>
                  </div>

                  {/* date pill */}
                  <span className="shrink-0 rounded-full bg-brand-100 px-4 py-1 text-xs md:text-sm font-semibold text-ink-secondary">
                    08/2023 – 04/2025
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 text-ink-secondary">
                  <li>- Built SQL-driven dashboards (Tableau, Power BI), driving a 16% increase in conversion rates and a 9% revenue uplift.</li>
                  <li>- Automated KPI workflows, cutting reporting time by 60% and improving data reliability.</li>
                  <li>- Delivered scalable analytics solutions in partnership with cross-functional teams.</li>
                </ul>
              </div>

              {/* Experience Item 2 */}
              <div className="relative overflow-hidden rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1 bg-brand-400" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-extrabold text-ink-primary">
                      Project Manager
                    </h4>
                    <p className="mt-1 text-sm md:text-base text-ink-secondary">
                      Aligcus Inc.
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-brand-100 px-4 py-1 text-xs md:text-sm font-semibold text-ink-secondary">
                    02/2023 – 08/2023
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 text-ink-secondary">
                  <li>- Coordinated cross-functional teams and external agencies to deliver regulated projects with a 100% approval rate.</li>
                  <li>- Delivered analytical insights and business-ready reports to support timely stakeholder decisions.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ===== Group 2: Academic Origin ===== */}
          <div className="mt-16">
            <h3 className="text-xl md:text-2xl font-bold text-ink-primary">
              Academic origin
            </h3>
            <div className="mt-8 grid gap-8">
              {/* Item */}
              <div className="relative overflow-hidden rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#BACCFE]" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-extrabold text-ink-primary">
                      MS in Information Systems
                    </h4>
                    <p className="mt-1 text-sm md:text-base text-ink-secondary">
                      California State University, Long Beach
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-[#BACCFE]/20 px-4 py-1 text-xs md:text-sm font-semibold text-ink-secondary">
                    Expected: 05/2027
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 text-ink-secondary">
                  <li>GPA: 4.0</li>
                  <li>Relevant Coursework: Business Data Analysis, Machine Learning for Business Analytics, Database Management, System Analysis and Design, AWS Academy Cloud Foundations</li>
                </ul>
              </div>

              {/* Item */}
              <div className="relative overflow-hidden rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#BACCFE]" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-extrabold text-ink-primary">
                      MS in Architecture and Urban Design
                    </h4>
                    <p className="mt-1 text-sm md:text-base text-ink-secondary">
                      University of California, Los Angeles
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-[#BACCFE]/20 px-4 py-1 text-xs md:text-sm font-semibold text-ink-secondary">
                    2021 – 2022
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 text-ink-secondary">
                  <li>Relevant Coursework: Technology Seminar: Generative Models and Design Intelligence (GANs, Machine Learning), Technology Seminar: Augmented Reality and Immersive Media Systems (AR/VR/XR)</li>
                </ul>
              </div>

              {/* Item */}
              <div className="relative overflow-hidden rounded-2xl border border-brand-200/70 bg-white p-6 shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#BACCFE]" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-extrabold text-ink-primary">
                      Bachelor of Architecture
                    </h4>
                    <p className="mt-1 text-sm md:text-base text-ink-secondary">
                      Nanjing Tech University
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-[#BACCFE]/20 px-4 py-1 text-xs md:text-sm font-semibold text-ink-secondary">
                    2016 – 2021
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm md:text-base leading-7 text-ink-secondary">
                  <li>Relevant Coursework: Advanced Mathematics C, Artificial Intelligence, Intercultural Communication, Critical Thinking and Innovation</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section id="sb-ceii" className="w-full px-6 py-24">
        <div className="mx-auto max-w-6xl">
          {/* Section title */}
          <h3 className="mb-10 text-xl md:text-2xl font-bold text-ink-primary">
            Public Service
          </h3>

          {/* SB-CEII content starts here */}
          <div className="grid gap-14">
            {/* TOP (2/5-ish): photo + title/buttons */}
            <div
              className="grid items-center gap-12 md:grid-cols-2"
            >
              {/* Left: photo with “shadow layer” */}
              <div className="relative">
                {/* ✅ keep your exact shadow settings */}
                <div className="absolute inset-0 -z-10 rounded-[28px] rotate-[2.5deg] scale-y-[1.05] -translate-y-1 bg-gradient-to-b from-brand-400/70 via-brand-200/70 to-brand-300/50" />

                {/* photo card */}
                <div className="relative overflow-hidden rounded-[28px] border border-brand-200/70 bg-white shadow-md">
                  {/* ✅ PUT YOUR PHOTO HERE: /public/images/sb-ce.jpeg */}
                  <img
                    src="/images/sb-ce.jpeg"
                    alt="SB-CEII beach cleanup"
                    className="h-[280px] w-full object-cover md:h-[340px]"
                  />

                  {/* subtle overlay tint like your sketch */}
                  <div className="pointer-events-none absolute inset-0 bg-ink-primary/5" />
                </div>
              </div>

              {/* Right: title + buttons */}
              <div className="text-left">
                <h2 className="text-2xl md:text-4xl font-extrabold text-ink-primary leading-tight">
                  South Bay Coastal <br />
                  Environmental Intelligence <br />
                  Initiative (SB-CEII)
                </h2>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  {/* Join Us */}
                  <a
                    href="https://www.meetup.com/south-bay-coastal-environmental-intelligence-initiative-sb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-brand-300/70 bg-white px-7 py-3 text-lg font-semibold text-ink-primary shadow-sm transition-all duration-200 hover:bg-brand-200 hover:border-brand-400 hover:shadow-md hover:-translate-y-[1px]"
                  >
                    Join Us
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-brand-300 bg-brand-100/30 text-ink-primary transition group-hover:bg-brand-300 group-hover:text-ink-primary">
                      ↗
                    </span>

                  </a>

                  {/* Public Reports */}
                  <a
                    href="https://medium.com/@miaomiao789/what-we-found-on-a-clean-beach-an-analysis-of-our-first-sb-ceii-cleanup-%EF%B8%8F-e5b6038eae6b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-brand-300/70 bg-white px-7 py-3 text-lg font-semibold text-ink-primary shadow-sm transition-all duration-200 hover:bg-brand-200 hover:border-brand-400 hover:shadow-md hover:-translate-y-[1px]"
                  >
                    Public Reports
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-brand-300 bg-brand-100/30 text-ink-primary transition group-hover:bg-brand-300 group-hover:text-ink-primary">
                      ↗
                    </span>

                  </a>

                  <p className="mt-5 text-lg md:text-lg text-ink-muted">
                    Supported by Heal the Bay Adopt-A-Beach • Data-driven insights
                  </p>

                </div>
              </div>
            </div>

            {/* BOTTOM (3/5-ish): 3 paragraphs */}
            <div className="text-left">
              <h3 className="mt-18 mb-5 text-2xl md:text-3xl font-semibold text-[#C8A9D2]">
                The story behind it
              </h3>
              <div className="max-w-none space-y-6 text-lg md:text-xl leading-8 text-ink-secondary">
                <p>
                  I founded the South Bay Coastal Environmental Intelligence Initiative
                  (<span className="font-semibold text-[#C8A9D2]">SB-CEII</span>), a community-led program that conducts recurring,
                  structured beach cleanups paired with systematic pollution data
                  collection and trend analysis.
                </p>

                <p>
                  Supported by the <span className="font-semibold text-[#C8A9D2]">Heal the Bay</span> Adopt-A-Beach Program ♻️, SB-CEII
                  transforms cleanup efforts into actionable environmental
                  intelligence through pollution monitoring, public reporting, and
                  data-driven insights.
                </p>

                <h3 className="mt-16 mb-5 text-right pr-9 text-2xl md:text-3xl font-semibold text-[#C8A9D2]">
                  Our mission
                </h3>

                <p>
                  <span className="font-semibold text-[#C8A9D2]">Our mission</span> is to better understand coastal pollution patterns and
                  contribute meaningful information that supports environmental
                  research, community awareness, and informed decision-making.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>



      <section
        id="contact"
        className="min-h-screen px-6 py-24 text-left"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-start">

            {/* Left: text + info */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-ink-primary">
                Let’s Connect
              </h2>

              <p className="mt-4 text-xl md:text-xl font-medium leading-9 text-ink-secondary">
                I’m always open to discussing projects and opportunities where data and AI can drive better decisions.
              </p>

              {/* Contact details */}
              <div className="mt-13 space-y-7">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center text-2xl rounded-full bg-brand-100/80 text-brand-700">
                    ✉️
                  </span>
                  <div>
                    <p className="text-base md:text-lg font-semibold text-ink-primary">Email</p>
                    <a
                      href="mailto:junyimiao11@gmail.com"
                      className="text-base md:text-lg font-medium text-ink-secondary hover:text-brand-600 transition"
                    >
                      junyimiao11@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center text-2xl rounded-full bg-brand-100 text-brand-700">
                    📍
                  </span>
                  <div>
                    <p className="text-base md:text-lg font-semibold text-ink-primary">Location</p>
                    <p className="text-base md:text-lg font-medium text-ink-secondary">
                      Los Angeles, CA
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="mt-13 text-lg md:text-xl font-semibold text-ink-primary">
                  Follow me
                </p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/alexamiao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-primary/20 text-ink-primary transition hover:bg-brand-200 hover:border-brand-400"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.78.12 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56A11.505 11.505 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/junyimiao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-primary/20 text-ink-primary transition hover:bg-brand-200 hover:border-brand-400"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 11.001 5.001A2.5 2.5 0 014.98 3.5zM3 8.99h3.98V21H3V8.99zM10.5 8.99h3.81v1.63h.05c.53-1 1.82-2.04 3.75-2.04 4.01 0 4.75 2.44 4.75 5.61V21h-3.98v-5.08c0-1.21-.02-2.78-1.69-2.78-1.69 0-1.95 1.32-1.95 2.69V21H10.5V8.99z" />
                  </svg>
                </a>


                {/* Medium (M) */}
                <a
                  href="https://medium.com/@miaomiao789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-primary/20 text-ink-primary transition hover:bg-brand-200 hover:border-brand-400"
                  aria-label="Medium"
                >
                  <span className="font-serif font-extrabold text-lg leading-none">M</span>
                </a>

              </div>
            </div>

            {/* Right: form */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-brand-200/60">
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-base md:text-lg text-ink-primary">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-1 w-full rounded-lg border border-brand-200 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-brand-300/50"
                    />
                  </div>

                  <div>
                    <label className="text-base md:text-lg text-ink-primary">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-1 w-full rounded-lg border border-brand-200 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-brand-300/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base md:text-lg text-ink-primary">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Your project or opportunity"
                    className="mt-1 w-full rounded-lg border border-brand-200 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-brand-300/50"
                  />
                </div>

                <div>
                  <label className="text-base md:text-lg text-ink-primary">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me more about your project or opportunity..."
                    className="mt-1 w-full rounded-lg border border-brand-200 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-brand-300/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#C8A9D2]/85 py-3 font-bold text-white transition hover:bg-[#C8A9D2]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main >
  );
}
