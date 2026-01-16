import { useState } from "react";

interface AboutToggleProps {
  tldrHtml: string;
  fullHtml: string;
}

export default function AboutToggle({ tldrHtml, fullHtml }: AboutToggleProps) {
  const [isFull, setIsFull] = useState(false);

  return (
    <section className="md:border-x md:border-dashed border-gray-200 dark:border-gray-800">
      <div className="relative px-4 py-3 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <button
          onClick={() => setIsFull(!isFull)}
          className="group relative flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-muted active:scale-95"
        >
          <span>{isFull ? "TL;DR" : "Full Version"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${
              isFull ? "rotate-180" : "rotate-0"
            }`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      <div className="px-4 pb-4">
        {/* content switching */}
        <div className="relative min-h-[100px]">
             <div
                key={isFull ? "full" : "tldr"}
                className="animate-in fade-in slide-in-from-top-1 duration-300 ease-out fill-mode-forwards"
             >
                <div
                  className="prose prose-sm dark:prose-invert max-w-none leading-7 font-medium text-justify"
                  dangerouslySetInnerHTML={{ __html: isFull ? fullHtml : tldrHtml }}
                />
             </div>
        </div>
      </div>
    </section>
  );
}
