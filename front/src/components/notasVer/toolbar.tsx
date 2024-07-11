"use client";
import { useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { filiais, statuses, priorities } from "src/data/filters"; // Certifique-se de que o caminho esteja correto
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { PlusIcon } from "lucide-react";

interface ToolbarProps<TData> {
  table: Table<TData>;
}

export function Toolbar<TData>({ table }: ToolbarProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const handleGlobalFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setGlobalFilter(value);
    table.setGlobalFilter(value);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2">
        <Input
          placeholder="Filtrar tabela..."
          value={globalFilter}
          onChange={handleGlobalFilterChange}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <div className="flex gap-x-2">
          {table.getColumn("filial") && (
            <DataTableFacetedFilter
              column={table.getColumn("filial")}
              title="Filial"
              options={filiais}
            />
          )}
          {table.getColumn("status") && (
            <DataTableFacetedFilter
              column={table.getColumn("status")}
              title="Status"
              options={statuses}
            />
          )}
          {table.getColumn("prioridade") && (
            <DataTableFacetedFilter
              column={table.getColumn("prioridade")}
              title="Prioridade"
              options={priorities}
            />
          )}
        </div>
        {table.getState().columnFilters.length > 0 && (
          <Button
            variant="ghost"
            onClick={() => {
              table.resetColumnFilters();
              setGlobalFilter("");
            }}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <Button variant="outline" size="sm" className="ml-auto h-8">
        <a href="/prenota/incluir" className="flex">
          <PlusIcon className="mr-2 h-4 w-4" />
          Incluir
        </a>
      </Button>
    </div>
  );
}
