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
  isActive,
  onHover,
  onLeave,
  onClick,
}: {
  title: string;
  href: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  isWide?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (isActive && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const iconCenterX = rect.left + rect.width / 2;
      const screenWidth = window.innerWidth;
      
      // Constants
      const PADDING = 10;
      const MAX_WIDTH = 384; // max-w-sm
      const tooltipWidth = Math.min(screenWidth * 0.9, MAX_WIDTH);
      
      // Calculate Horizontal Position (Magnetic Clamp)
      // 1. Try to center the tooltip on the icon
      const idealLeft = iconCenterX - tooltipWidth / 2;
      
      // 2. Clamp it within the screen bounds (with padding)
      const clampedLeft = Math.max(
        PADDING, 
        Math.min(idealLeft, screenWidth - tooltipWidth - PADDING)
      );

      // 3. Calculate Arrow Position (Relative to Tooltip)
      // The arrow should point to the iconCenter.
      // Arrow Position in Tooltip = IconGlobalX - TooltipGlobalX
      const arrowLeft = iconCenterX - clampedLeft;

      setTooltipStyle({
        top: rect.top - 8, // Just above the icon
        left: clampedLeft,
        transform: "translateY(-100%)", // Move up by its own height
        width: tooltipWidth, // Explicit width for consistency
      });

      setArrowStyle({
        left: arrowLeft,
      });
    }
  }, [isActive]);

  return (
    <div
      className={`relative flex items-center justify-center ${className || ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        ref={triggerRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className={`group relative flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer ${
          isWide ? "h-16 w-full px-4" : "size-16"
        } ${
          isActive 
            ? "bg-muted text-foreground grayscale-0" 
            : "bg-muted/50 hover:bg-muted text-muted-foreground grayscale"
        }`}
      >
        <div className={`flex items-center justify-center [&>svg]:size-full ${isWide ? "h-6 w-full" : "size-10"} ${
          isActive ? "text-foreground grayscale-0" : "group-hover:text-foreground group-hover:grayscale-0"
        }`}>
           {Icon ? (
             <Icon className="size-full" />
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
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            style={tooltipStyle}
            className={`
              z-50 rounded-xl border border-border bg-popover p-4 shadow-lg
              /* Mobile: Fixed & Clamped (from inline styles) */
              fixed max-w-sm
              
              /* Desktop: Absolute Override (Reset fixed styles) */
              md:!static md:!transform-none md:!top-auto md:!left-auto md:!right-auto md:!width-auto
              
              /* Desktop: Absolute Layout */
              md:absolute md:!bottom-full md:mb-3 md:w-80 md:left-1/2 md:-translate-x-1/2
            `}
            // Prevent clicks inside tooltip from closing it
            onClick={(e) => e.stopPropagation()}
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

            {/* Arrow (Dynamic on Mobile, Standard on Desktop) */}
            <div 
              style={arrowStyle}
              className={`
                absolute -bottom-1.5 h-3 w-3 rotate-45 border-r border-b border-border bg-popover
                /* Desktop Override */
                md:!left-1/2 md:!transform md:!-translate-x-1/2 md:!rotate-45 md:!right-auto 
              `} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
