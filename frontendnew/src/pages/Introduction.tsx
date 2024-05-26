import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/button.tsx";

function Intro() {
  return (
    <>
      <Navbar />

      <Tabs defaultValue="account" className="w-auto">
        <TabsList className="wrapper w-full  grid-cols-1 align-top w-auto">
          <TabsTrigger value="account">What is a Milsim?</TabsTrigger>
          <TabsTrigger value="password">
            What does BG Athens Believe?
          </TabsTrigger>
          <TabsTrigger value="achieve">How do we achieve this?</TabsTrigger>
          <TabsTrigger value="join">How do I join?</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>What is a Milsim?</CardTitle>
              <CardDescription>
                Milsim or Military Simulation is an popular sub-genre of
                Military games, the communitees that form around the most
                popular military simulation games are often called milsims. They
                vary in the units they aim to portray, the seriousness with
                which they take themeselves and the styles of operations they
                run.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-10">
              <div className="space-y-1"></div>
              <div className="space-y-1"></div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>What does BG Athens Believe?</CardTitle>
              <CardDescription>
                <a>
                  Battlgroup athens is the premier ARMA Reforger UNSC military
                  simualtion, we aim to accurately emulate the Battlegroup in
                  all of it's intricacies. We lean heavily into the setting to
                  allow our members to become immersed in the incredibly world
                  building provided by Halo. However, whilst we have an
                  incredible story and RP element we also aim to be among the
                  very best at conducting large scale operations with combined
                  arms elements. Everyone within BG Athens is encouraged to
                  become better and better at their MOS. It's with this vision
                  that we can truly develop our members into specialists within
                  their fields.
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1"></div>
              <div className="space-y-1"></div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achieve">
          <Card>
            <CardHeader>
              <CardTitle>How do we achieve this?</CardTitle>
              <CardDescription>
                <a>
                  Organising and leading huge numbers of members is no easy task
                  and it is one of the biggest challenges for any unit. However,
                  through our use of common Standard Operating procedures,
                  Military Occupational System and flexible ORBATs all handled
                  through our custom website we can afford the additional
                  organisation without making unit leadership a cumbersome task.
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1"></div>
              <div className="space-y-1"></div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="join">
          <Card>
            <CardHeader>
              <CardTitle>How do I join?</CardTitle>
              <CardDescription>
                <a>
                  There are a number of steps you will need to follow before you
                  can enter the unit, don't worry the initial application
                  portion won't take longer than 10-20 minutes. <br />
                  <br />
                  All those wishing to join will need to follow these steps:
                  <br />
                  <br />
                  1. Look through the MOS list and the MOS introduction page.
                  <br />
                  2. Create an account using your discord account
                  <br />
                  3. Submit an application to join the Battlegroup and have it
                  accepted
                  <br />
                  4. Attend a UNSC Combined Military Training or "UCMB" and
                  pass.
                  <br />
                  4B. Obtain a waiver for UCMB from an officer by participating{" "}
                  <br />
                  in a public operation with the marines.
                  <br />
                  5. Be assigned a unit and a MOS in training position (this
                  happens at UCMB.)
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1"></div>
              <div className="space-y-1"></div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default Intro;
