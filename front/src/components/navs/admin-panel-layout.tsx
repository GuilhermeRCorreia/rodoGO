"use client";

import { cn } from "src/lib/utils";
import { useStore } from "src/hooks/use-store";
import { Sidebar } from "./sidebar";
import { useSidebarToggle } from "src/hooks/use-sidebar-toggle";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-background transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[50px]" : "lg:ml-40"
        )}
      >
        {children}
      </main>
    </>
  );
}
