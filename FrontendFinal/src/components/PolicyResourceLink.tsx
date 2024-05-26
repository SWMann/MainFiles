import { Link } from "@radix-ui/themes";

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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function PolicyResourceLink(item) {
  const [resource, setResource] = useState({});

  useEffect(() => {
    getResource(item.item.fields.PRL_Resource);
  }, []);
  // Cookies.get('memberDOID')

  console.log(item.item.fields.PRL_Resource);
  console.log("tese");

  const getResource = (id) => {
    const url = "/api/Resource/get/" + id;
    api
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        data = JSON.parse(data);
        console.log(data);
        data = data[0];
        data = data["fields"];

        setResource(data);

        console.log(data);
        console.log(<data className="memb">data</data>);
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <Link
        href={"/"}
        className="flex items-center gap-2 text-blue-600 hover:underline"
      >
        <FileIcon className="h-4 w-4" />

        {resource.resource_name}
      </Link>
    </div>
  );
}

export default PolicyResourceLink;
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
