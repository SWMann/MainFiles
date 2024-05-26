import { Link } from "lucide-react";
import { Separator } from "@/components/ui/separator.tsx";
import D12AForm from "@/components/D-12A_Form.tsx";
import Navbar from "@/components/Navbar";
import MOSBoard from "@/components/MOSBoard";
import { useState, useEffect, useCallback, useMemo } from "react";
import MOSColumn from "@/components/MOSColumn";
import api from "../api";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/TableDefinitions/data-table";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import PolicyDetailCard from "@/components/PolicyDetailCard";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Policy, columns } from "@/components/TableDefinitions/Columns";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PolicyResourceLink from "@/components/PolicyResourceLink.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import PolicyTableItem from "@/components/PolicyTableItem";

export default function PolicyTablePage() {
  const param = useParams();
  const [diag1open, setDiag1Open] = useState(false);

  const onClick = useCallback((id: string) => setDiag1Open(true), []);
  const [Policies, setPolicies] = useState([]);
  console.log(param.id);
  useEffect(() => {
    getPolicies();
  }, []);
  // Cookies.get('memberDOID')
  const data = [
    {
      policy_code: "728ed52f",
      policy_name: "100",
      branch: "Imperial Navy",
      test: "test",
    },
    {
      code: "728ed52f",
      name: "100",
      branch: "Imperial Guard",
    },
  ];
  const [member, setMember] = useState({});

  const getPolicies = () => {
    const url = "/api/Policy/get/";

    api
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        data = JSON.parse(data);

        const policylist = [];
        data.forEach(function (value) {
          if (value.fields.policy_branch === "IGP") {
            value.fields.policy_branch = "Imperial Guard";
          }
          if (value.fields.policy_branch === "IAP") {
            value.fields.policy_branch = "Imperial Airforce";
          }
          if (value.fields.policy_branch === "INP") {
            value.fields.policy_branch = "Imperial Navy";
          }
          if (value.fields.policy_branch === "AAP") {
            value.fields.policy_branch = "Adeptus Astartes";
          }
          policylist.push(value.fields);
        });

        setPolicies(policylist);
      })
      .catch((err) => alert(err));
  };
  const link = (
    <a href="#" className={"hover:text-blue-600"}>
      this page
    </a>
  );
  const getMember = (id) => {
    const url = "/api/member/find/member/1";
    console.log(url);

    console.log("test");
    api
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        data = JSON.parse(data);
        data = data[0];
        console.log(data);

        setMember(data);
      })
      .catch((err) => alert(err));
    console.log(member);
    return member;
  };

  const actualcolumn = useMemo(() => columns({ onClick, getMember }), []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Policy Table</h1>
          <p className="text-gray-500">
            View and manage your insurance policies.
          </p>
        </div>
        <div>
          {console.log(Policies)}
          <DataTable columns={actualcolumn} data={Policies} />
        </div>
      </div>
    </div>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function DrillIcon(props) {
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
      <path d="M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z" />
      <path d="M18 6h4" />
      <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
      <path d="m5 10-2 8" />
      <path d="M12 10v3c0 .6-.4 1-1 1H8" />
      <path d="m7 18 2-8" />
      <path d="M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z" />
    </svg>
  );
}
