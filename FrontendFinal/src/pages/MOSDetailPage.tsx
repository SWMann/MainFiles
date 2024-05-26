import { Link } from "lucide-react";
import { Separator } from "@/components/ui/separator.tsx";
import D12AForm from "@/components/D-12A_Form.tsx";
import Navbar from "@/components/Navbar";
import MOSBoard from "@/components/MOSBoard";
import { useState, useEffect } from "react";
import MOSColumn from "@/components/MOSColumn";
import api from "../api";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";

import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

function MOSDetailPage() {
  const param = useParams();

  const [MOS, setMOS] = useState([]);
  console.log(param.id);
  useEffect(() => {
    getMOS();
  }, []);
  // Cookies.get('memberDOID')

  const getMOS = () => {
    const url = "/api/MOS/get/" + param.id;
    api
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        data = JSON.parse(data);
        console.log(data);
        data = data[0];
        setMOS(data);

        console.log(data);
        console.log(<data className="memb">data</data>);
      })
      .catch((err) => alert(err));
  };
  const link = (
    <a href="#" className={"hover:text-blue-600"}>
      this page
    </a>
  );

  return (
    <div>
      <Navbar />
      <div className="  container mx-auto px-4 py-12 md:px-6 lg:py-16 h-[80vh] ">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Adeptus Militaris Occupational Code: AMOC-{MOS.pk}
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400"></p>
            <div className="mt-8 grid gap-6">
              <div>
                <h2 className="text-xl font-bold my-1">Images</h2> <Separator />
                <div className="mt-4 grid grid-cols-2 gap-4 ">
                  <img
                    alt="Infantry in action"
                    className="rounded-lg object-cover mx-auto"
                    height={200}
                    src="https://www.wargamer.com/wp-content/sites/wargamer/2023/06/warhammer-40k-lgbtq-representation-Guardswoman-550x309.jpg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                  <img
                    alt="Infantry equipment"
                    className="rounded-lg object-cover mx-auto"
                    height={200}
                    src="https://www.wargamer.com/wp-content/sites/wargamer/2023/04/warhammer-40k-astra-militarum-army-guide-fearsome-guard.jpg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                </div>
                <Separator className="my-2" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Roles</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>MOS</TableHead>
                      <TableHead>Rank</TableHead>
                      <TableHead>Badges</TableHead>
                      <TableHead>Detail link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-medium">Rifleman</h4>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <p className="font-medium">Private - Colonel</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Minimum Rank - Maximum Rank
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Combat Infantry</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button style={{ maxHeight: 28 }}>Detail</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-medium">Rifleman</h4>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <p className="font-medium">Private - Colonel</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Minimum Rank - Maximum Rank
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Combat Infantry</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button style={{ maxHeight: 28 }}>Detail</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-medium">Rifleman</h4>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <p className="font-medium">Private - Colonel</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Minimum Rank - Maximum Rank
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Combat Infantry</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button style={{ maxHeight: 28 }}>Detail</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-medium">Rifleman</h4>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <p className="font-medium">Private - Colonel</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Minimum Rank - Maximum Rank
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Combat Infantry</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button style={{ maxHeight: 28 }}>Detail</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-medium">Rifleman</h4>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <p className="font-medium">Private - Colonel</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Minimum Rank - Maximum Rank
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Combat Infantry</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button style={{ maxHeight: 28 }}>Detail</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-medium">Rifleman</h4>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <p className="font-medium">Private - Colonel</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Minimum Rank - Maximum Rank
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Combat Infantry</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button style={{ maxHeight: 28 }}>Detail</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <Separator />

              <div>
                <h2 className="text-xl font-bold">
                  Current AMOC leadership team:
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/avatars/01.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-gray-500 dark:text-gray-400">
                          AMOC IC
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 rounded-md bg-green-100 px-2 py-1 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                        <CircleCheckIcon className="h-4 w-4" />
                        <span>Active</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/avatars/02.png" />
                        <AvatarFallback>JJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Jane Jenson</p>
                        <p className="text-gray-500 dark:text-gray-400">
                          AMOC Deputy IC
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 rounded-md bg-blue-100 px-2 py-1 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                        <DrillIcon className="h-4 w-4" />
                        <span>Recruiting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  Standard Operating Procedures (SOPs)
                </h2>
                <section className="container mx-auto px-4 py-12">
                  <div className="flex items-center justify-between mb-6"></div>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-xl font-bold mb-4">Administration</h2>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Code</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Link</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>ADM-001</TableCell>
                            <TableCell>Personnel Records Management</TableCell>
                            <TableCell>
                              Procedures for maintaining and updating personnel
                              records.
                            </TableCell>
                            <TableCell>
                              <Link
                                className="text-blue-500 hover:underline"
                                href="#"
                              >
                                View SOP
                              </Link>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>ADM-002</TableCell>
                            <TableCell>Procurement and Contracting</TableCell>
                            <TableCell>
                              Guidelines for purchasing equipment and services.
                            </TableCell>
                            <TableCell>
                              <Link
                                className="text-blue-500 hover:underline"
                                href="#"
                              >
                                View SOP
                              </Link>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>ADM-003</TableCell>
                            <TableCell>Travel and Expense Reporting</TableCell>
                            <TableCell>
                              Procedures for submitting and approving travel
                              expenses.
                            </TableCell>
                            <TableCell>
                              <Link
                                className="text-blue-500 hover:underline"
                                href="#"
                              >
                                View SOP
                              </Link>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-4">Operations</h2>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Code</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Link</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>OPS-001</TableCell>
                            <TableCell>Incident Response</TableCell>
                            <TableCell>
                              Procedures for responding to and reporting
                              incidents.
                            </TableCell>
                            <TableCell>
                              <Link
                                className="text-blue-500 hover:underline"
                                href="#"
                              >
                                View SOP
                              </Link>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>OPS-002</TableCell>
                            <TableCell>Equipment Maintenance</TableCell>
                            <TableCell>
                              Guidelines for maintaining and servicing
                              equipment.
                            </TableCell>
                            <TableCell>
                              <Link
                                className="text-blue-500 hover:underline"
                                href="#"
                              >
                                View SOP
                              </Link>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>OPS-003</TableCell>
                            <TableCell>Inventory Management</TableCell>
                            <TableCell>
                              Procedures for tracking and managing inventory.
                            </TableCell>
                            <TableCell>
                              <Link
                                className="text-blue-500 hover:underline"
                                href="#"
                              >
                                View SOP
                              </Link>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-4">Safety</h2>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Code</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Link</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>SAF-001</TableCell>
                            <TableCell>Emergency Evacuation</TableCell>
                            <TableCell>
                              Procedures for evacuating facilities in an
                              emergency.
                            </TableCell>
                            <TableCell>
                              <Link
                                className="text-blue-500 hover:underline"
                                href="#"
                              >
                                View SOP
                              </Link>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>SAF-002</TableCell>
                            <TableCell>Hazardous Materials Handling</TableCell>
                            <TableCell>
                              Guidelines for safely handling and storing
                              hazardous materials.
                            </TableCell>
                            <TableCell>
                              <Link
                                className="text-blue-500 hover:underline"
                                href="#"
                              >
                                View SOP
                              </Link>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>SAF-003</TableCell>
                            <TableCell>Workplace Safety Inspections</TableCell>
                            <TableCell>
                              Procedures for conducting regular safety
                              inspections.
                            </TableCell>
                            <TableCell>
                              <Link
                                className="text-blue-500 hover:underline"
                                href="#"
                              >
                                View SOP
                              </Link>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </section>
              </div>
              <div>
                <h2 className="text-xl font-bold">Requirements to Join</h2>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
                    <CircleCheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">Physical Fitness</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Candidates must meet minimum physical fitness standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
                    <CircleCheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">Weapons Proficiency</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Candidates must demonstrate proficiency with various
                        infantry weapons.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
                    <CircleCheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">Tactical Training</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Candidates must complete tactical training in areas such
                        as land navigation, patrolling, and urban operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold">Certification Pipeline</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
                    <CircleCheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">Basic Infantry Training</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Complete 10 weeks of basic infantry training, covering
                        weapons, tactics, and field craft.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
                    <CircleCheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">Advanced Infantry Training</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Complete 4 weeks of advanced infantry training, focusing
                        on squad tactics, urban operations, and leadership.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start rounded-md bg-gray-100 px-4 py-3 dark:bg-gray-800">
                    <CircleCheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-green-500" />
                    <div>
                      <p className="font-medium">Infantry Certification Exam</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Pass a comprehensive written and practical exam to
                        become a certified Infantry soldier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h2 className="text-xl font-bold">MOS Overview</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                The Infantry MOS is the backbone of ground combat operations.
                Infantrymen are trained to engage the enemy in close-quarters
                combat using a variety of weapons and tactics.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">AMOC-{MOS.pk}</p>
                  <p className="text-gray-500 dark:text-gray-400">MOS Code</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">Infantry</p>
                  <p className="text-gray-500 dark:text-gray-400">Specialty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MOSDetailPage;

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function DrillIcon(props) {
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
      <path d="M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z" />
      <path d="M18 6h4" />
      <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
      <path d="m5 10-2 8" />
      <path d="M12 10v3c0 .6-.4 1-1 1H8" />
      <path d="m7 18 2-8" />
      <path d="M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z" />
    </svg>
  );
}
