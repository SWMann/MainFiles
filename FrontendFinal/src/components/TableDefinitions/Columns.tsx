"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import PolicyDetailCard from "../PolicyDetailCard";
import { useState, useEffect } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import DataTableRowActions from "@/components/TableDefinitions/Actions";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
//export type Policy = {
//policy_code: string;
//policy_name: string;
//  policy_branch: "IGP" | "INP" | "IAP" | "AAP";
//};
import api from "@/api";
import Cookies from "js-cookie";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface columnprops {
  onClick: (id: string) => void;
  getMember: (value: object) => void;
}

function checker(input) {
  let returnvalue = "";
  if (input === "Adeptus Astartes") {
    returnvalue = "AAP";
  }
  if (input === "Imperial Guard") {
    returnvalue = "IGP";
  }
  if (input === " Imperial Navy") {
    returnvalue = "INP";
  }
  if (input === "Imperial Airforce") {
    returnvalue = "IAP";
  }

  return returnvalue;
}

export const columns = ({
  onClick,
  getMember,
}: columnprops): ColumnDef<Policy>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "policy_code",
    header: "Code",
  },
  {
    accessorKey: "policy_name",
    header: "Name",
  },
  {
    accessorKey: "policy_branch",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Branch
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const policy = row.original;

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(policy.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <Dialog>
                {" "}
                <DialogContent className="sm:max-w-[480px]">
                  {" "}
                  <DataTableRowActions row={row} onClick={onClick} />{" "}
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent className="sm:max-w-[480px]">
                  <DialogHeader>
                    <DialogTitle>
                      {checker(row.original.policy_branch)}-
                      {row.original.policy_code}
                    </DialogTitle>
                    <DialogDescription>
                      Details about the selected policy.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Policy Code</p>
                        <p className="text-gray-500 dark:text-gray-400">
                          {row.original.policy_code}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Policy Branch</p>
                        <p className="text-gray-500 dark:text-gray-400">
                          {row.original.policy_branch}
                        </p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Policy Name</p>
                        <p className="text-gray-500 dark:text-gray-400">
                          {row.original.policy_name}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          Policy Enforcement Level
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          {row.original.policy_enforcement_level}
                        </p>
                      </div>
                    </div>
                    <Collapsible className="space-y-2">
                      <div className="flex items-center justify-between space-x-4 px-4">
                        <p className="text-sm font-medium">
                          Policy Description
                        </p>
                        <CollapsibleTrigger asChild>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => (open = false)}
                          >
                            X<span className="sr-only">ss </span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent className="rounded-md border border-gray-200 px-4 py-2 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                        {row.original.policy_description}
                      </CollapsibleContent>
                    </Collapsible>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Policy Creator</p>
                        <p className="text-gray-500 dark:text-gray-400">
                          {
                            getMember(row.original.policy_creator)
                              .member_game_name
                          }
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          Policy Created Date
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">test</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Attached Resources</p>
                      <div className="space-y-2">test</div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];
