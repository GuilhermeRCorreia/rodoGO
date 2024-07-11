
import { cn } from "src/lib/utils";
import { useStore } from "src/hooks/use-store";
import { Button } from "components/ui/button";
import { Menu } from "./menu";
import { useSidebarToggle } from "src/hooks/use-sidebar-toggle";
import { SidebarToggle } from "./sidebar-toggle";
import Logo from "../ui/logo";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  
  if(!sidebar) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-50 h-screen -translate-x-full lg:translate-x-0 transition-[width] bg-card ease-in-out duration-300",
        sidebar?.isOpen === false ? "w-[75px]" : "w-56"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <a href="/dashboard" className="flex items-center gap-2">
            <Logo/>
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                sidebar?.isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            >
              RodoAPP
            </h1>
          </a>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}
