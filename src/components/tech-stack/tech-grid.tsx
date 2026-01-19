import { useState, useEffect } from "react";
import { TECH_GROUPS } from "@/lib/constants/tech-stack";
import TechTooltip from "@/components/ui/tech-tooltip";

type ActiveState = string | null;

export default function TechGrid() {
  const [activeTitle, setActiveTitle] = useState<ActiveState>(null);

  useEffect(() => {
    const handleOutsideClick = () => {
      setActiveTitle(null);
    };
    const handleScroll = () => {
      setActiveTitle(null);
    };

    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll, { capture: true });
    
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  const handleHover = (title: string) => {
    setActiveTitle(title);
  };

  const handleLeave = () => {
    setActiveTitle(null);
  };

  const handleClick = (title: string) => {
    setActiveTitle(title);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {TECH_GROUPS.map((group) => (
        <div 
          key={group.name}
          className="flex h-fit flex-col gap-y-3 rounded-xl border border-border/50 bg-background/50 dark:bg-white/10 p-4 transition-[border-color,box-shadow] duration-300 hover:border-border hover:bg-muted/15 hover:shadow-sm dark:hover:shadow-sm"
        >
          <h3 className="text-base font-bold tracking-wide text-muted-foreground uppercase">
            {group.name}
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,4rem)] justify-center gap-2">
            {group.items.map((item) => (
              <TechTooltip
                key={item.title}
                title={item.title}
                href={item.href}
                description={item.description}
                className={item.title === "Google AI Studio" ? "col-span-2" : ""}
                isWide={item.title === "Google AI Studio"}
                icon={item.icon}
                isActive={activeTitle === item.title}
                onHover={() => handleHover(item.title)}
                onLeave={handleLeave}
                onClick={() => handleClick(item.title)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
