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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



function Intro() {
  return (
    <>
      <Navbar />

      <Tabs defaultValue="account" className="w-auto my-4">
        <TabsList className="wrapper w-full  grid-cols-1 align-top w-auto ">
          <TabsTrigger value="account" className="my-1">What is a Milsim?</TabsTrigger>
          <TabsTrigger value="password">
            What do we believe?
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
              <CardTitle>What do we believe?</CardTitle>
              <CardDescription className="my-2">
                <a>
                <br/>
                    Battlefleet Scarus is ARMA Reforger's premier Warhammer unit, we aim to simulate the complexities of warfare in the
                    41st Millenium with all the benefits and drawbacks that brings. Our operations are difficult and the managment tough. 
                    However, thanks to a dedicated group of members, a flexible and modern system as well as creative members we can
                    simulate the chaotic and awesome world of Warhammer in a realistic setting. <br/>
                    <br/>
                    At our core, like all military simulation units, we are a roleplay community. And with that comes a whole plethora of 
                    additional challenges and also awesome opportunites for our members to enjoy themselves. In order to replicate the functions of the 
                    Imperial Navy and Imperial Guard we use "Sir" or address others by their ranks, this may be offputting to some but that's totally understandable.
                    It is important to note that these functions are only on our Cat 1 & 2 Operations or Trainings. The reason we do this, apart from 
                    roleplay and being immersed in the setting, is that it sets us in the mindset that this is serious and we are trying, at that time,
                    to achieve something that requires focus and respect. 

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
                <br/>
                    One of the biggest challenges of any organisation no matter the type is administration, but in particular for 
                    Military Simulation groups the challenge is even greater due to the intensity of administration that needs
                    to go into the system for it to work and see the best results the the reality that the staff will not be paid 
                    and must therefore be motivated entirely out of good will. <br/>
                    <br/>
                    So how do we solve this? Well to some degree it is an inevitability and something the staff must deal with in 
                    their own ways. However, in order to make the admin as easy as possible a modern and easy to use system that removes
                    much of the unnnecesary actions and simplies those it does not remove allows a faster and more lightweight burden on the staff.

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
          <Card className="w-full">
            <CardHeader>
              <CardTitle>How do I join?</CardTitle>
              <CardDescription>
              <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                     <AccordionTrigger>Is it accessible?</AccordionTrigger>
                           <AccordionContent>
                                 Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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
