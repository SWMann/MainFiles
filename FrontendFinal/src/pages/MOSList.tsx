import { Link } from "lucide-react";
import { Separator } from "@/components/ui/separator.tsx";
import D12AForm from "@/components/D-12A_Form.tsx";
import Navbar from "@/components/Navbar";
import MOSBoard from "@/components/MOSBoard";

function MOSList() {
  const link = (
    <a href="#" className={"hover:text-blue-600"}>
      this page
    </a>
  );

  return (
    <div>
      <Navbar />
      <MOSBoard />
    </div>
  );
}

export default MOSList;
