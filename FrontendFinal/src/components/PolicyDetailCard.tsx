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
import PolicyResourceLink from "@/components/PolicyResourceLink.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function PolicyDetailCard(item, open) {
  const [member, setMember] = useState({});
  const [link, setLink] = useState("");
  const [resources, setResources] = useState([]);
  const [opens, setOpen] = useState(false);

  const getLink = () => {
    setLink("/MOSDetail/" + item.item.pk);
  };
  console.log(item);
  const getMember = (id) => {
    const url = "/api/member/find/member/" + id;
    api
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        data = JSON.parse(data);
        console.log(data);
        data = data[0];
        console.log(data);
        data = data["fields"];
        console.log(data);
        setMember(data);

        console.log(data);
        console.log(<data className="memb">data</data>);
      })
      .catch((err) => alert(err));
    getLink();
  };

  const getLinkedResources = (id) => {
    const url = "api/PolicyResourceLink/get/policyvia/" + id;
    api
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        data = JSON.parse(data);
        console.log(data);

        setResources(data);

        console.log(data);
        console.log(<data className="memb">data</data>);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    getMember(item.policy_creator);
    getLinkedResources(1);
  }, []);

  const choices = {
    IGP: "Imperial Guard",
    INP: "Imperial Navy",
    IAP: "Imperial Airforce",
    AAP: "Adeptus Astartes",
  };
  const enforcement = "";
  const branchname = item.policy_branch;

  //  if (item.item.item.fields.policy_branch === "AAP") {
  //    branchname = "Adeptus Astartes";
  //  }
  //  if (item.item.item.fields.policy_branch === "IGP") {
  //    branchname = "Imperial Guard";
  //  }
  //  if (item.item.item.fields.policy_branch === "INP") {
  //    branchname = "Imperial Navy";
  //  }
  //  if (item.item.item.fields.policy_branch === "IAP") {
  //    branchname = "Imperial Airforce";
  //  }

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>
            {item.policy_branch}-{item.policy_code} - {item.policy_name}
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
                {item.policy_code}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Policy Branch</p>
              <p className="text-gray-500 dark:text-gray-400">{branchname}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            <div className="space-y-1">
              <p className="text-sm font-medium">Policy Name</p>
              <p className="text-gray-500 dark:text-gray-400">
                {item.policy_name}{" "}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Policy Enforcement Level</p>
              <p className="text-gray-500 dark:text-gray-400">{enforcement}</p>
            </div>
          </div>
          <Collapsible className="space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <p className="text-sm font-medium">Policy Description</p>
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
              {item.policy_description}
            </CollapsibleContent>
          </Collapsible>
          <div className="grid sm:grid-cols-2 gap-2">
            <div className="space-y-1">
              <p className="text-sm font-medium">Policy Creator</p>
              <p className="text-gray-500 dark:text-gray-400">
                {member.member_rank}. {member.member_game_name}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Policy Created Date</p>
              <p className="text-gray-500 dark:text-gray-400">
                {item.policy_created_date}
              </p>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Attached Resources</p>
            <div className="space-y-2">
              {resources.map((item) => (
                <PolicyResourceLink item={item} />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PolicyDetailCard;

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
