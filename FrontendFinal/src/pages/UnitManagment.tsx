/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B2M0opGRZJb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function UnitManagment() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-700 text-white py-7 px-6 my-5">
          <h1 className="text-2xl font-bold">Unit Management</h1>
        </header>
        <main className="flex-1 p-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-bold mb-4">Battlegroup Overview</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-4xl font-bold">250</p>
                  <p className="text-gray-500">Total Members</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-4xl font-bold">50</p>
                  <p className="text-gray-500">Active Members</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-bold mb-4">Branch List</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Branch Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>No. Members</TableHead>
                    <TableHead>CO.</TableHead>
                    <TableHead>XO.</TableHead>
                    <TableHead>SNCO.</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>ONI</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>LtCmdr. Brewer</TableCell>
                    <TableCell>LTJG. Texas</TableCell>
                    <TableCell>CPO. Jerome-092</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SABER Co.</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>102</TableCell>
                    <TableCell>1Lt. GamingPidgeon</TableCell>
                    <TableCell>
                      <b>VACANT</b>
                    </TableCell>
                    <TableCell>GySgt. LilTrejon</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>LANCER Sq.</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>LTJG. Suki</TableCell>
                    <TableCell>Ens. Oneshot</TableCell>
                    <TableCell>N/A</TableCell>
                  </TableRow>
                </TableBody>
                <TableRow>
                  <TableCell>DELTA Plt.</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>2Lt. TheFoxDgaf</TableCell>
                  <TableCell>
                    <b>VACANT</b>
                  </TableCell>
                  <TableCell>SSgt. Vader</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>RED Team</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>CPO. Jerome-092</TableCell>
                </TableRow>
              </Table>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4">Unit Selection</h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Units</SelectLabel>
                  <SelectItem value="unit-102">ONI</SelectItem>
                  <SelectItem value="unit-103">SABER Co.</SelectItem>
                  <SelectItem value="unit-104">LANCER Sq.</SelectItem>
                  <SelectItem value="unit-105">DELTA Plt.</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </main>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Transfer Requests</h2>
          <Tabs defaultValue="pending">
            <TabsList className="flex justify-between border-b border-gray-200 dark:border-gray-800">
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
            </TabsList>
            <TabsContent value="pending">
              <Card>
                <CardHeader>
                  <CardTitle>PFC. John</CardTitle>
                  <CardDescription>{`SABER Co. --> DELTA Plt.`}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500">Approved by:</p>
                      <p>
                        <span className="font-bold">SABER Co. CO:</span> 1Lt.
                        GamingPidgeon
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Move-out Date:</p>
                      <p>-</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Phone:</p>
                      <p>555-1234</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Email:</p>
                      <p>john.doe@example.com</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Edit Tenant</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="approved">
              <Card>
                <CardHeader>
                  <CardTitle>SGT. Jane</CardTitle>
                  <CardDescription>{`LANCER Sq. --> DELTA Plt.`}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500">Approved by:</p>
                      <p>
                        <span className="font-bold">LANCER Sq. CO:</span> LTJG.
                        Suki
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Move-out Date:</p>
                      <p>June 1, 2023</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Phone:</p>
                      <p>555-5678</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Email:</p>
                      <p>jane.doe@example.com</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Edit Tenant</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Unit Maintenance</h2>
          <Card>
            <CardHeader>
              <CardTitle>Unit 103 Maintenance</CardTitle>
              <CardDescription>Scheduled for June 15, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500">Task:</p>
                  <p>Repair leaky faucet</p>
                </div>
                <div>
                  <p className="text-gray-500">Status:</p>
                  <p>In Progress</p>
                </div>
                <div>
                  <p className="text-gray-500">Assigned To:</p>
                  <p>John Smith</p>
                </div>
                <div>
                  <p className="text-gray-500">Estimated Cost:</p>
                  <p>$150</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Update Maintenance</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
