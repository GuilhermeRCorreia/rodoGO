import { useQuery } from "react-query";
import { ColumnDef } from "@tanstack/react-table";
import { parse, format } from "date-fns";

export type PreNota = {
  F1_FILIAL: string;
  F1_DOC: string;
  F1_SERIE: string;
  F1_STATUS: string;
  A2_COD: string;
  A2_LOJA: string;
  FORNECE: string;
  A2_NOME: string;
  F1_EMISSAO: string;
  F1_DTDIGIT: string;
  F1_VALBRUT: string;
  F1_XTIPO: string;
  F1_XPRIOR: string;
  F1_XORI: string;
  F1_XUSRRA: string;
  F1_XOBS: string;
  F1_ZOBSREV: string;
  F1_XREV: string;
  VENCIMENTO: string;
  REC: string;
};

const fetchPreNotas = async () => {
  const url =
    "http://172.16.99.174:8400/rest/PreNota/ListaPreNota?pag=1&numItem=20";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const usePreNotas = () => {
  return useQuery<PreNota[], Error>("prenotas", fetchPreNotas);
};

export const columns: ColumnDef<PreNota>[] = [
  {
    accessorKey: "F1_FILIAL",
    header: "Filial",
  },
  {
    accessorKey: "F1_XUSRRA",
    header: "Usuário",
  },
  {
    accessorKey: "documento",
    header: "Nota Fiscal",
    cell: (info) => `${info.row.original.F1_DOC} ${info.row.original.F1_SERIE}`,
  },
  {
    accessorKey: "FORNECE",
    header: "Fornecedor",
  },
  {
    accessorKey: "F1_XTIPO",
    header: "Tipo",
  },
  {
    accessorKey: "F1_VALBRUT",
    header: "Valor",
    cell: (info) => {
      const value = parseFloat(info.getValue());
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  {
    accessorKey: "F1_EMISSAO",
    header: "Emissão",
    cell: (info) => {
      const rawDate = info.getValue() as string; // Assume que o valor é uma string
      // Formatar a data como YYYY-MM-DD
      const formattedDate = `${rawDate.substring(0, 4)}-${rawDate.substring(
        4,
        6
      )}-${rawDate.substring(6, 8)}`;

      try {
        const date = parse(formattedDate, "yyyy-MM-dd", new Date());
        return format(date, "dd/MM/yyyy");
      } catch (e) {
        return "Data inválida"; // Retorno em caso de erro no parsing
      }
    },
  },
  {
    accessorKey: "F1_DTDIGIT",
    header: "Inclusão",
    cell: (info) => {
      const rawDate = info.getValue() as string; // Assume que o valor é uma string
      // Formatar a data como YYYY-MM-DD
      const formattedDate = `${rawDate.substring(0, 4)}-${rawDate.substring(
        4,
        6
      )}-${rawDate.substring(6, 8)}`;

      try {
        const date = parse(formattedDate, "yyyy-MM-dd", new Date());
        return format(date, "dd/MM/yyyy");
      } catch (e) {
        return "Data inválida"; // Retorno em caso de erro no parsing
      }
    },
  },
  {
    accessorKey: "F1_STATUS",
    header: "Status",
    cell: (info) => {
      const status = info.row.original.F1_STATUS;
      const xRev = info.row.original.F1_XREV;

      // Verifica se há pelo menos uma letra em `F1_STATUS`
      if (status && /[a-zA-Z]/.test(status)) {
        return "Classificada";
      }
      // Verifica se há pelo menos uma letra em `F1_XREV`
      else if (xRev && /[a-zA-Z]/.test(xRev)) {
        return "Revisar";
      } else {
        return "A Classificar";
      }
    },
  },
  {
    accessorKey: "F1_XPRIOR",
    header: "Prioridade",
  },
  {
    accessorKey: "F1_XOBS",
    header: "Observação",
  },
];
