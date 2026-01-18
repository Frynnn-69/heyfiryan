import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TechTooltip({
  title,
  href,
  description,
  children,
  className,
  isWide,
  icon: Icon,
}: {
  title: string;
  href: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  isWide?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const isOpen = isHovered || isClicked;

  // Handle click outside to close tooltip on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        linkRef.current &&
        !linkRef.current.contains(event.target as Node)
      ) {
        setIsClicked(false);
      }
    };

    if (isClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClicked]);

  const handleTriggerClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`relative flex items-center justify-center ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={linkRef}
        onClick={handleTriggerClick}
        className={`group relative flex items-center justify-center rounded-xl bg-muted/50 hover:bg-muted cursor-pointer ${
          isWide ? "h-16 w-full px-4" : "size-16"
        }`}
      >
        <div className={`text-muted-foreground grayscale transition-all duration-300 group-hover:text-foreground group-hover:grayscale-0 flex items-center justify-center [&>svg]:size-full ${isWide ? "h-6 w-full" : "size-10"}`}>
           {Icon ? (
             <Icon className={`size-full ${isOpen ? "text-foreground grayscale-0" : ""}`} />
           ) : children ? (
             children
           ) : (
             <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground">
              {title.substring(0, 2)}
             </span>
           )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`
              z-50 rounded-xl border border-border bg-popover p-4 shadow-lg
              /* Mobile: Fixed Center */
              fixed top-1/2 left-1/2 w-[90vw] max-w-sm -translate-x-1/2 -translate-y-1/2
              /* Desktop: Absolute Bottom */
              md:absolute md:top-auto md:bottom-full md:left-1/2 md:w-80 md:translate-y-0 md:bg-popover md:mb-2
            `}
          >
            {/* Tooltip Content */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <span className="text-base font-bold text-popover-foreground">
                  {title}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                {description}
              </p>
              <div className="flex items-center gap-1 pt-1">
                 <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline flex items-center gap-2"
                 >
                    Visit Website 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                 </a>
              </div>
            </div>

            {/* Desktop Arrow (Hidden on Mobile) */}
            <div className="hidden md:block absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-r border-b border-border bg-popover" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
