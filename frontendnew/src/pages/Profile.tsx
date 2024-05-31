
// test

import Navbar from "@/components/Navbar";
import ProfileNavbar from "@/components/ProfileNavbar";
import ProfileOverview from "@/components/ProfileOverview";
import ProfileUserAndSop from "@/components/profileuserandsop";
import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";




function ProfilePage() {

    const [member, setMember] = useState({});
    const [SelectedCard, setSelectedCard] = useState("overview");


     function GetCard(Card: string) {

        let returnvalue = <div>test</div> 
        if (Card === "overview") {

            returnvalue=<ProfileOverview/>

        }
        if (Card === "mos") {

            returnvalue=<ProfileUserAndSop/>
            console.log("MOS")

        }
        if (Card === "activity") {

            returnvalue=<ProfileOverview/>

        }
        if (Card === "request") {

            returnvalue=<ProfileOverview/>

        }


        return returnvalue
    }

    

    

    return (
        <>
            <Navbar />
            <Card className="mt-5">
                <CardHeader><h1 className="text-black text-3xl font-bold ">My Profile Page</h1></CardHeader>
                <Separator className="w-9/12 relative m-auto bg-gray-700" />
                <div className="flex flex-row">
                    <ProfileNavbar update={setSelectedCard}/>
                    {GetCard(SelectedCard)}

                </div>
            </Card>
        </>
    );
}

export default ProfilePage;



