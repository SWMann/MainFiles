
// test

import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface profileinterface {update(string: string): any;}

 function ProfileNavbar({update}: profileinterface) {





  return (
    <>
        <Card className="mt-5 ml-5 mb-5">
            <CardHeader><h1 className="text-black text-xl font-bold">Setting</h1></CardHeader>
            <Separator/>
            <div className="flex flex-col">
            <Button className="bg-blue-200 text-gray-800 mt-2 ml-2 mr-2 hover:bg-blue-600" onClick={() => update("overview")}>Overview</Button>
            <Button className="bg-blue-200 text-gray-800 mt-2 ml-2 mr-2 hover:bg-blue-600" onClick={() => update("mos")}>Unit & SOP</Button>
            <Button className="bg-blue-200 text-gray-800 mt-2 ml-2 mr-2 hover:bg-blue-600"onClick={() => update("activity")}>Activity</Button>
            <Button className="bg-blue-200 text-gray-800 mt-2 ml-2 mr-2 hover:bg-blue-600 mb-2"onClick={() => update("request")}>Make Request</Button>

            </div>
        </Card>
    </>
  );
}

export default ProfileNavbar;



