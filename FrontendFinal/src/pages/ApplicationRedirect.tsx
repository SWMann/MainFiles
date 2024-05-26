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
  import { Button } from "@/components/ui/button"



  function ApplicationRedirect() {
    return (
      <>
        <Navbar />
        
        <Card style={{maxWidth:500, margin: "auto", marginTop:20}}>
            <CardHeader>
    <CardTitle>Thank you for your Application!</CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent>
    <p>One of our recruiters will review it shortly. if you applied to be an officer you will be contacted within a week to have an interview with the CO. If you applied for general entry you should be reviewed within 24 hours.</p>
  </CardContent>
                        <CardFooter><Button>Next Steps</Button>
                        

                </CardFooter>
            </Card>
      </>
    );
  }
  
  export default ApplicationRedirect;
  