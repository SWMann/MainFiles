import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import api from "../api";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Link } from "@radix-ui/themes";

function MOSItem(item) {
  const [member, setMember] = useState({});
  const [link, setLink] = useState("");

  const getLink = () => {
    setLink("/MOSDetail/" + item.item.pk);
  };

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

  useEffect(() => {
    if (!member.member_game_name) {
      getMember(item.item.fields.MOS_in_charge);
    }
  }, [member]);

  return (
    <div>
      <AccordionItem value={item.item.pk}>
        <AccordionTrigger className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md my-2">
          <div className="flex items-center gap-4">
            <div className="font-medium text-gray-900 dark:text-gray-50">
              {console.log(item.item.pk)}
              AMOC-{item.item.pk}
            </div>
            <div className="flex items-center gap-2 border-l pl-4">
              <div className="text-gray-900 dark:text-gray-50">
                {item.item.fields.MOS_name}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 border-l pl-4">
            {item.item.fields.MOS_active === true && (
              <Badge
                className="font-medium bg-green-500 text-white"
                variant="outline"
              >
                Active
              </Badge>
            )}

            {item.item.fields.MOS_recruiting === true && (
              <Badge
                className="font-medium bg-green-500 text-white"
                variant="outline"
              >
                Recruiting
              </Badge>
            )}

            {item.item.fields.MOS_commision_type === "COF" && (
              <Badge
                className="font-medium bg-orange-500 text-white"
                variant="outline"
              >
                Commisioned Officer
              </Badge>
            )}
            {item.item.fields.MOS_commision_type === "ENL" && (
              <Badge
                className="font-medium bg-blue-500 text-white"
                variant="outline"
              >
                Enlisted
              </Badge>
            )}

            <ChevronDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-4 text-sm leading-relaxed bg-white dark:bg-gray-900 rounded-lg shadow-md">
          <p className="text-gray-900 dark:text-gray-50">
            {item.item.fields.MOS_description}
          </p>
          <h3>
            Member in charge: {member.member_rank}. {member.member_game_name}
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <Badge className="font-medium" variant="outline">
              Difficulty: High
            </Badge>
            <Button style={{ marginLeft: "auto", marginRight: 10 }}>
              <Link href={link}>Detail Page</Link>
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}

export default MOSItem;
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
