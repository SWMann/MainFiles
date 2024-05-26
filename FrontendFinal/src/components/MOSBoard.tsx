import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Button } from "@/components/ui/button.tsx";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu.tsx";
import { Link } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import MOSColumn from "@/components/MOSColumn";
import api from "../api";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import MOSItem from "./MOSItem";

function MOSBoard() {
  const [MOS, setMOS] = useState([]);

  useEffect(() => {
    getMOS();
  }, []);
  // Cookies.get('memberDOID')

  const getMOS = () => {
    const url = "/api/MOS/get/";
    api
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        data = JSON.parse(data);
        console.log(data);

        setMOS(data);

        console.log(data);
        console.log(<data className="memb">data</data>);
      })
      .catch((err) => alert(err));
  };

  return (
    <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <div className="flex-1 grid gap-2">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Military Occupational Service (MOS) Codes
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Explore our comprehensive list of MOS codes with details on
              requirements and qualifications.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-10 w-full md:w-[300px] bg-white dark:bg-gray-800 dark:text-gray-50"
                placeholder="Search MOS codes..."
                type="search"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <Accordion collapsible type="single">
            {MOS.map((item) => (
              <MOSItem item={item} key={item.pk} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default MOSBoard;

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
