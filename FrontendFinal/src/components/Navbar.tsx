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
import api from "../api";
import Cookies from "js-cookie";
import * as https from "https";

function Navbar() {
  const [member, setMember] = useState({});

  useEffect(() => {
    getMember();
  }, []);
  // Cookies.get('memberDOID')

  const getMember = () => {
    const url = "/api/member/find/" + "00001-00006-GD";
    console.log(Cookies.get("memberDOID"));
    api
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        data = JSON.parse(data);
        data = data[0];
        data = data["fields"];
        setMember(data);
      })
      .catch((err) => alert(err));
  };

  function RankButton(type, rank, game_name) {
    if (type == "ENL") {
      return (
        <Button
          disabled
          style={{
            marginLeft: "auto",
            maxHeight: 25,
            borderRadius: 2,
            border: "black",
            borderWidth: 20,
          }}
        >
          {rank}. {game_name}
        </Button>
      );
    }
    if (type == "COF") {
      return (
        <Button
          disabled
          style={{
            marginLeft: "auto",
            maxHeight: 25,
            borderRadius: 2,
            border: "black",
            borderWidth: 20,
            backgroundColor: "gold",
            color: "black",
          }}
        >
          {rank}. {game_name}
        </Button>
      );
    }
  }

  return (
    <Menubar style={{ minHeight: 50 }}>
      <MenubarMenu>
        <Button style={{ marginRight: 20 }}>Home</Button>
        <MenubarTrigger>Unit Info</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href="/introduction">Introduction</Link>{" "}
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>SOPs</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Branches</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>MOS</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Operations</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href="/">Upcoming Operations</Link>
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            {" "}
            <Link href="/redirect">Past Operations</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Campaigns</MenubarItem>

          <MenubarItem>
            {" "}
            <Link href="/unitmanagment">Statistics</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <div
        style={{
          alignSelf: "stretch",
          alignItems: "center",
          display: "flex",
          marginLeft: "auto",
        }}
      >
        {RankButton(
          member.member_commission_type,
          member.member_rank,
          member.member_game_name,
        )}
      </div>
      <DropdownMenu>
        <div style={{ margin: 20, marginLeft: "10" }}>
          <DropdownMenuTrigger style={{ paddingTop: 5 }}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Requests</DropdownMenuItem>
            <DropdownMenuItem>Unit</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </Menubar>
  );
}

export default Navbar;
