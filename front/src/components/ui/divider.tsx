
import { cn } from "src/lib/utils";

interface DividerProps {
  className?: string;
  text?: string;
}

const Divider = ({ className, text }: DividerProps) => {
  if (text) {
    return (
      <div className={cn("relative flex items-center", className)}>
        <div className="flex-grow border-t border-slate-200 dark:border-slate-600"></div>
        <span className="mx-4 font-bold text-slate-500 dark:text-slate-100">{text}</span>
        <div className="flex-grow border-t border-slate-200 dark:border-slate-600"></div>
      </div>
    );
  }
  return <div className={cn("border-t border-gray-200 dark:border-gray-600", className)}></div>;
};

export { Divider };
