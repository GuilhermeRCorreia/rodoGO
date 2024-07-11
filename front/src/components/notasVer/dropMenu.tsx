import React from "react";
import { Button } from "components/ui/button";
import {
  DropdownMenu as RadixDropdownMenu,
  DropdownMenuContent as RadixDropdownMenuContent,
  DropdownMenuItem as RadixDropdownMenuItem,
  DropdownMenuLabel as RadixDropdownMenuLabel,
  DropdownMenuSeparator as RadixDropdownMenuSeparator,
  DropdownMenuTrigger as RadixDropdownMenuTrigger,
  DropdownMenuCheckboxItem as RadixDropdownMenuCheckboxItem
} from "@radix-ui/react-dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Notas } from "src/data/newData";

export const DropdownMenuActions: React.FC<{ notas: Notas }> = ({ notas }) => (
  <RadixDropdownMenu>
    <RadixDropdownMenuTrigger asChild>
      <Button variant="outline" className="h-8 w-8 p-0">
        <span className="sr-only">Open menu</span>
        <DotsHorizontalIcon className="h-4 w-4" />
      </Button>
    </RadixDropdownMenuTrigger>
    <RadixDropdownMenuContent
      align="end"
      className="z-40 flex flex-col bg-card p-1 rounded-lg focus:outline-none focus:ring-0 border-border border-2"
    >
      <RadixDropdownMenuLabel></RadixDropdownMenuLabel>
      <RadixDropdownMenuItem className="menu-item">Alterar</RadixDropdownMenuItem>
      <RadixDropdownMenuSeparator />
      <RadixDropdownMenuItem className="menu-item">Anexo</RadixDropdownMenuItem>
      <RadixDropdownMenuItem className="menu-item">Excluir</RadixDropdownMenuItem>
      <RadixDropdownMenuItem className="menu-item">Revisar</RadixDropdownMenuItem>
      <RadixDropdownMenuItem className="menu-item">Histórico</RadixDropdownMenuItem>
    </RadixDropdownMenuContent>
  </RadixDropdownMenu>
);

export {
  RadixDropdownMenu as DropdownMenu,
  RadixDropdownMenuContent as DropdownMenuContent,
  RadixDropdownMenuItem as DropdownMenuItem,
  RadixDropdownMenuLabel as DropdownMenuLabel,
  RadixDropdownMenuSeparator as DropdownMenuSeparator,
  RadixDropdownMenuTrigger as DropdownMenuTrigger,
  RadixDropdownMenuCheckboxItem as DropdownMenuCheckboxItem
};
