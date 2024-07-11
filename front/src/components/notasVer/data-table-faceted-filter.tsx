import * as React from "react";
import { Column } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "components/ui/dropdown-menu";
import { FilterIcon } from "lucide-react";
import { Button } from "../ui/button";

interface DataTableFacetedFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
  options: { value: string; label: string }[];
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
}: DataTableFacetedFilter<TData, TValue>) {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const handleCheckedChange = (value: string, checked: boolean) => {
    let updatedValues = [...selectedValues];
    if (checked) {
      updatedValues.push(value);
    } else {
      updatedValues = updatedValues.filter((val) => val !== value);
    }
    setSelectedValues(updatedValues);
    column.setFilterValue(updatedValues.length ? updatedValues : undefined);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <FilterIcon className="mr-2 h-4 w-4" />
          {title}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex z-20 truncate flex-col bg-card p-4 gap-2 rounded-lg border-border border-2"
      >
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            className="capitalize focus:outline-none focus:ring-0"
            checked={selectedValues.includes(option.value)}
            onCheckedChange={(checked) => handleCheckedChange(option.value, checked)}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
