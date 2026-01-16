import {
  Docker,
  Git,
  MongoDB,
  NextJs,
  NodeJs,
  Python,
  Redis,
  TailwindCSS,
  TypeScript,
  Astro,
  Laravel,
  MySQL,
  Tensorflow,
  PyTorch,
  GoogleCloud,
  NumPy,
  Jira  
} from "developer-icons";

import FastapiIcon from '@/components/ui/icons/fastapi.astro'
import PandasIcon from "@/components/ui/icons/pandas.astro";
import VercelIcon from "@/components/ui/icons/vercel.astro";
import SQLIcon from "@/components/ui/icons/sql.astro";
import GoogleAIStudioIcon from "@/components/ui/icons/google-ai-studio.astro";


// Fallback or explicit SVG imports will be needed for things not in developer-icons or if imports fail.
// I am assuming standard names for now, will verify.

export interface TechItem {
  title: string;
  href: string;
  icon?: any; // Component type
  description: string;
}

export interface TechGroup {
  name: string;
  items: TechItem[];
}

export const TECH_GROUPS: TechGroup[] = [
  {
    name: "Core",
    items: [
      {
        title: "Python",
        href: "https://www.python.org/",
        icon: Python,
        description: "My primary language for AI/ML pipelines and backend scripting. From psychology research (SPSS alternatives) to healthcare AI—Python handles the complexity so I can focus on solving the right problems.",
      },
      {
        title: "TypeScript",
        href: "https://www.typescriptlang.org/",
        icon: TypeScript,
        description: "Finally embracing static typing after too many runtime surprises. Makes scaling web projects way more sane, especially when building product features that involve multiple contributors.",
      },
      {
        title: "SQL",
        href: "https://en.wikipedia.org/wiki/SQL",
        icon: SQLIcon, 
        description: "The foundation. Whether it's relational data for fintech risk models or hospital records, knowing how to query and structure data properly saves hours of debugging later.",
      },
    ],
  },
  {
    name: "Front",
    items: [
      {
        title: "Next.js",
        href: "https://nextjs.org/",
        icon: NextJs,
        description: "My go-to for full-stack web apps. SSR, static generation, and API routes in one framework? Perfect for projects like psychology assessment platforms where performance and SEO both matter.",
      },
      {
        title: "Astro",
        href: "https://astro.build/",
        icon: Astro,
        description: "Content-first sites done right. Using it for this portfolio—fast, clean, and lets me sprinkle React islands only where I need interactivity. No bloat.",
      },
      {
        title: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: TailwindCSS,
        description: "Utility-first CSS that just clicks. Builds UI fast without wrestling with custom stylesheets. Once you get the rhythm, there's no going back.",
      },
    ],
  },
  {
    name: "Back",
    items: [
      {
        title: "FastAPI",
        href: "https://fastapi.tiangolo.com/",
        icon: FastapiIcon,
        description: "High-performance Python APIs with automatic docs and type validation. Built the healthcare referral system backend with this—async support makes real-time integrations smooth.",
      },
      {
        title: "Node.js",
        href: "https://nodejs.org/",
        icon: NodeJs,
        description: "JavaScript on the server. Great for rapid prototyping and real-time features. Used it during hackathons when speed of iteration matters more than architectural perfection.",
      },
      {
        title: "Laravel",
        href: "https://laravel.com/",
        icon: Laravel,
        description: "The PHP framework that doesn't feel like PHP. Elegant, batteries-included, and surprisingly pleasant for building traditional web apps when Python isn't the right fit.",
      },
    ],
  },
  {
    name: "Storage",
    items: [
      {
        title: "MySQL",
        href: "https://www.mysql.com/",
        icon: MySQL,
        description: "Reliable relational database for structured data. When data integrity and ACID compliance matter (healthcare, finance), MySQL is the safe bet.",
      },
      {
        title: "MongoDB",
        href: "https://www.mongodb.com/",
        icon: MongoDB,
        description: "NoSQL for when schema flexibility is key. Used it for document-heavy projects—fast iteration without migration headaches.",
      },
      {
        title: "Redis",
        href: "https://redis.io/",
        icon: Redis,
        description: "In-memory speed demon. Perfect for caching, session storage, and real-time leaderboards. Makes apps feel instant.",
      },
    ],
  },
  {
    name: "ML/AI",
    items: [
      {
        title: "Tensorflow",
        href: "https://www.tensorflow.org/",
        icon: Tensorflow,
        description: "End-to-end ML platform from Google. Powerful for production deployments, though the learning curve is real. Great ecosystem for complex models.",
      },
      {
        title: "PyTorch",
        href: "https://pytorch.org/",
        icon: PyTorch,
        description: "My preferred ML framework. Intuitive, Pythonic, and debugging feels natural. Used it for healthcare AI experiments—flexibility beats TensorFlow's rigidity.",
      },
      {
        title: "Pandas",
        href: "https://pandas.pydata.org/",
        icon: PandasIcon,
        description: "Data wrangling workhorse. From psychology research stats to preprocessing hospital records—Pandas makes messy data manageable.",
      },
       {
        title: "NumPy",
        href: "https://numpy.org/",
        icon: NumPy,
        description: "Where my data journey started. From exploring datasets as a curious analyst to building ML pipelines—NumPy's always been there. Fast array operations with clean Python syntax.",
      },
      {
        title: "Google AI Studio",
        href: "https://aistudio.google.com/",
        icon: GoogleAIStudioIcon,
        description: "Rapid prototyping with Gemini models. From testing prompts to building GenAI features—this tool makes experimenting with LLMs ridiculously fast.",
      }
    ],
  },
  {
    name: "Cloud & Tools",
    items: [
      {
        title: "GCP",
        href: "https://cloud.google.com/",
        icon: GoogleCloud,
        description: "Google Cloud for scalable infrastructure. Vertex AI, Cloud Run, BigQuery—everything I need for deploying ML models and data pipelines.",
      },
      {
        title: "Docker",
        href: "https://www.docker.com/",
        icon: Docker,
        description: "Containerization for consistent environments. No more 'works on my machine'—from dev to production, Docker keeps dependencies sane.",
      },
      {
        title: "Vercel",
        href: "https://vercel.com/",
        icon: VercelIcon,
        description: "Frontend deployment made effortless. Push to Git, auto-deploy Next.js/Astro projects. Zero-config SSL and edge functions? Chef's kiss.",
      },
      {
        title: "Git",
        href: "https://git-scm.com/",
        icon: Git,
        description: "Solo work is just push/pull. But team projects? Branching, merging conflicts, rebasing—Git shows its real power. Honestly fell in love with it during collaborative builds.",
      },
      {
        title: "Jira",
        href: "https://www.atlassian.com/jira",
        icon: Jira,
        description: "Project management for structured workflows. Used it in team settings—keeps tasks organized when building complex features across sprints.",
      },
    ],
  },
];
