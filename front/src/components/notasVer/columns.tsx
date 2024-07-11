import { ColumnDef } from "@tanstack/react-table";
import { Notas } from "src/data/newData";
import { Checkbox } from "components/ui/checkbox";
import { Button } from "components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { DropdownMenuActions } from "./dropMenu";

const priorityColorMap = {
  alta: "text-red-950 bg-red-300/60 border-2 border-red-300 dark:bg-red-950/60 dark:text-red-200 dark:border-red-800",
  media:
    "text-amber-950 bg-amber-300/60 border-2 border-amber-300 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800",
  baixa:
    "text-lime-950 bg-lime-300/60 border-2 border-lime-300 dark:bg-lime-950/60 dark:text-lime-200 dark:border-lime-800"
};

export const columns: ColumnDef<Notas>[] = [
  {
    accessorKey: "filial",
    header: "Filial",
    cell: ({ row }) => row.getValue("filial")
  },
  {
    accessorKey: "user",
    header: "Usuário",
    cell: ({ row }) => row.getValue("user")
  },
  {
    id: "documento",
    header: "Documento",
    cell: ({ row }) => (
      <span className="truncate block w-full">
        {`${row.original.doc} - ${row.original.serie}`}
      </span>
    )
  },
  {
    accessorKey: "fornecedor",
    header: "Fornecedor",
    cell: ({ row }) => (
      <span className="block w-96">{`${row.original.fornecedor}`}</span>
    )
  },
  {
    accessorKey: "label",
    header: "Tipo",
    cell: ({ row }) => row.getValue("label")
  },
  {
    accessorKey: "valor",
    header: "Valor",
    cell: ({ row }) => {
      const valor = parseFloat(row.getValue("valor").replace(",", "."));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
      }).format(valor);
      return formatted;
    }
  },
  {
    accessorKey: "emissao",
    header: "Emissão",
    cell: ({ row }) => (
      <span className="truncate block w-full">{`${row.original.emissao}`}</span>
    )
  },
  {
    accessorKey: "inclusao",
    header: "Inclusão",
    cell: ({ row }) => (
      <span className="truncate block w-full">
        {`${row.original.inclusao}`}
      </span>
    )
  },
  {
    accessorKey: "vencimento",
    header: "1º Vencimento",
    cell: ({ row }) => (
      <span className="truncate block w-full">
        {`${row.original.vencimento}`}
      </span>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => row.getValue("status")
  },
  {
    accessorKey: "prioridade",
    header: "Prioridade",
    cell: ({ row }) => {
      const priority = row.getValue("prioridade");
      const priorityClass =
        priorityColorMap[priority] || "text-gray-600 bg-gray-100";
      return (
        <span className={`px-2 py-1 rounded ${priorityClass}`}>{priority}</span>
      );
    }
  },
  {
    accessorKey: "obs",
    header: "Observação",
    cell: ({ row }) => (
      <span className="block max-w-56">{`${row.original.obs}`}</span>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <DropdownMenuActions notas={row.original} />
  },
  {
    id: "search", // Special column for search
    header: "",
    cell: () => null,
    enableSorting: false,
    enableHiding: false,
    filterFn: (row, columnId, value) => {
      return Object.values(row.original).some((val) =>
        String(val).toLowerCase().includes(String(value).toLowerCase())
      );
    }
  }
];
