import { Link } from "lucide-react";
import { Separator } from "@/components/ui/separator.tsx";
import D12AForm from "@/components/D-12A_Form.tsx";
import Navbar from "@/components/Navbar";
import MOSBoard from "@/components/MOSBoard";
import { useState, useEffect } from "react";
import MOSColumn from "@/components/MOSColumn";
import api from "../api";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./ui/collapsible";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import PolicyDetailCard from "./PolicyDetailCard";

function PolicyTableItem(item) {
  enum branch {
    IGP = "UP",
    INP = "DOWN",
    IAP = "LEFT",
    AAP = "RIGHT",
  }
  let branchname = item.item.fields.policy_branch;

  if (item.item.fields.policy_branch === "AAP") {
    branchname = "Adeptus Astartes";
  }
  if (item.item.fields.policy_branch === "IGP") {
    branchname = "Imperial Guard";
  }
  if (item.item.fields.policy_branch === "INP") {
    branchname = "Imperial Navy";
  }
  if (item.item.fields.policy_branch === "IAP") {
    branchname = "Imperial Airforce";
  }

  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
        {item.item.fields.policy_branch}-{item.item.fields.policy_code}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
        {item.item.fields.policy_name.toUpperCase()}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
        {branchname}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
        <PolicyDetailCard item={item} />
      </td>
    </tr>
  );
}

export default PolicyTableItem;

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
