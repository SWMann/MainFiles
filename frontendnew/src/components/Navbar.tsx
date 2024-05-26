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

function Navbar() {
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
          <MenubarItem>Past Operations</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Campaigns</MenubarItem>

          <MenubarItem>
            {" "}
            <Link href="/unitmanagment">Statistics</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <Button
        disabled
        style={{
          margin: 20,
          marginLeft: "auto",
          fontWeight: "bold",
          maxHeight: 25,
        }}
      >
        Cpt. Phili
      </Button>
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
