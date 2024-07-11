import React, { ReactNode } from "react";
import {
  Table as RadixTable,
  TableBody as RadixTableBody,
  TableCell as RadixTableCell,
  TableHead as RadixTableHead,
  TableHeader as RadixTableHeader,
  TableRow as RadixTableRow,
} from "components/ui/table";

interface TableProps {
  children: ReactNode;
}

export const Table: React.FC<TableProps> = ({ children }) => <RadixTable>{children}</RadixTable>;
export const TableBody: React.FC<TableProps> = ({ children }) => <RadixTableBody>{children}</RadixTableBody>;
export const TableCell: React.FC<TableProps> = ({ children }) => <RadixTableCell>{children}</RadixTableCell>;
export const TableHead: React.FC<TableProps> = ({ children }) => <RadixTableHead>{children}</RadixTableHead>;
export const TableHeader: React.FC<TableProps> = ({ children }) => <RadixTableHeader>{children}</RadixTableHeader>;
export const TableRow: React.FC<TableProps> = ({ children }) => <RadixTableRow>{children}</RadixTableRow>;
