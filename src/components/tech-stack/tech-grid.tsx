import { TECH_GROUPS } from "@/lib/constants/tech-stack";
import TechTooltip from "@/components/ui/tech-tooltip";

export default function TechGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {TECH_GROUPS.map((group) => (
        <div 
          key={group.name}
          className="flex h-fit flex-col gap-y-3 rounded-xl border border-border/50 bg-background/50 dark:bg-white/10 p-4 transition-[border-color] duration-300 hover:border-border hover:bg-muted/20 hover:z-100"
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
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
