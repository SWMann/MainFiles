import { Button } from "@/components/ui/button";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onClick: (value: TData) => void;
}

const DataTableRowActions = <TData,>({
  row,
  onClick,
}: DataTableRowActionsProps<TData>) => {
  return (
    <DropdownMenuItem onClick={() => onClick(row.original)}>
      Edit
    </DropdownMenuItem>
  );
};

export default DataTableRowActions;
