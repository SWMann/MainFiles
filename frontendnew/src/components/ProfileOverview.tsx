
// test

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";




function ProfileOverview() {





    return (
        <>
            <Card className="mt-5 ml-5 mb-5 w-full">
                <CardHeader className="text-black text-2xl font-bold ">Overview</CardHeader>
                <Separator />
                <CardContent>
                    <div className="flex flex-row">
                        <div className="flex flex-col items-center justify-center mt-4 ">
                            <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-8 ">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center">
                                        <Avatar className="mr-4 bg-blue-400 ">
                                            <AvatarImage alt="Profile Picture" src="/placeholder-avatar.jpg" />
                                            <AvatarFallback className="bg-blue-400">JD</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Sergeant John Doe</h2>
                                            <p className="text-gray-600 dark:text-gray-400">1st Line Battalion</p>
                                        </div>
                                    </div>
                                    <Badge variant="primary" className="ml-5 bg-green-600">Imperial Guard</Badge>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-1">Rank</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-medium bg-white max-w-20 rounded border border-gray-600 text-center m-auto">Sergeant</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-1">Position</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-medium bg-white max-w-25 rounded border border-gray-600 text-center m-auto">Squad Leader</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-1">Last Promotion</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-medium bg-white max-w-20 rounded border border-gray-600 text-center m-auto">June 2022</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-1">Admin/GM</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-medium bg-white max-w-20 rounded border border-gray-600 text-center m-auto">Public</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-1">Recruiter</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-medium bg-white max-w-20 rounded border border-gray-600 text-center m-auto">Yes</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-1">Primary MOS</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-medium bg-white max-w-20 rounded border border-gray-600 text-center m-auto">11B</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-1">Secondary MOS</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-medium bg-white max-w-20 rounded border border-gray-600 text-center m-auto">11C</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-1">Tertiary MOS</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-medium bg-white max-w-20 rounded border border-gray-600 text-center m-auto">11Z</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 mb-1">Commission Type</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-medium bg-white max-w-20 rounded border border-gray-600 text-center m-auto">Enlisted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </>
    );
}

export default ProfileOverview;



