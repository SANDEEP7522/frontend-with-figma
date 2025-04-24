import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Dashboard } from "../../Pages/Dashboard/Dashboard";
import {
  BugIcon,
  Clipboard,
  MoveRight,
  PhoneCall,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Settings,
  Lock,
  User,
  DollarSign,
  BarChart2,
  MessageCircle,
  Bug,
  Star,
  FileText,
  Activity,
  Repeat,
  ArrowRightLeft,
  File,
  Puzzle,
  Link,
} from "lucide-react";
import { FaBlackTie, FaServicestack, FaWhatsapp } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        {open && (
          <div className="w-full md:w-64 bg-white border-r p-4 relative z-20">
            {/* Cross icon for close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 md:hidden"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>

            <div className="flex items-center space-x-4 mb-6">
              <Avatar>
                <AvatarImage src="/avatars/user.png" />
                <AvatarFallback>TU</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-lg font-bold">Welcome Back,</h1>
                <p className="text-sm text-gray-500">Testing</p>
              </div>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  Profile Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={70} className="hsm" />
                <p className="text-xs text-gray-500 mt-1">70% complete</p>
              </CardContent>
            </Card>

            <h2 className="text-base text-blue-600 font-semibold mb-2">
              User Dashboard
            </h2>
            <Separator className="my-2" />
            <ScrollArea className="w-full md:w-50 h-screen border-r bg-white p-4">
              <Accordion type="multiple" className="w-full space-y-1">
                <AccordionItem value="management">
                  <AccordionTrigger>
                    <Users className="inline h-4 w-4 -mr-12" /> Edit Profile
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 ml-4">
                      <li>Services</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="services">
                  <AccordionTrigger>
                    <PhoneCall className="-mr-12 h-4 w-4" /> Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 ml-4">
                      <li>Services</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="reports">
                  <AccordionTrigger>
                    <Clipboard className="h-3 w-4 -mr-12" /> Reports
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 ml-4">
                      <li>Whatsapp Business</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="management">
                  <AccordionTrigger>
                    <FaWhatsapp className="mr-2 h-4 w-4" /> Whatsapp Business
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 ml-4">
                      <li>App Debugging</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="management">
                  <AccordionTrigger>
                    <BugIcon className="-mr-9 h-4 w-4" /> Management
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 ml-4">
                      <li>App Debugging</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="voice">
                  <AccordionTrigger>
                    <Star className="mr-2 h-4 w-4" /> Voice Management
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 ml-4">
                      <li>Voice Logs</li>
                      <li>Calls Settings</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="analytics">
                  <AccordionTrigger>
                    <BarChart2 className="-mr-12 h-4 w-4" /> Analytics
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 ml-4">
                      <li>Overview</li>
                      <li>Reports</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="refer">
                  <AccordionTrigger>
                    <DollarSign className="-mr-7 h-4 w-4" /> Refer & Earn
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="ml-4">Referral Details</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="settings">
                  <AccordionTrigger>
                    <Settings className="-mr-12 h-4 w-4" /> Settings
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <User className="inline mr-1 h-4 w-4" /> Edit Profile
                      </li>
                      <li>
                        <Lock className="inline mr-1 h-4 w-4" /> Change Password
                      </li>
                      <li>
                        <FileText className="inline mr-1 h-4 w-4" /> Truecaller
                        Verified
                      </li>
                      <li>
                        <ArrowRightLeft className="inline mr-1 h-4 w-4" />{" "}
                        Transaction
                      </li>
                      <li>
                        <File className="inline mr-1 h-4 w-4" /> Invoice
                      </li>
                      <li>
                        <Puzzle className="inline mr-1 h-4 w-4" /> Plugins
                      </li>
                      <li>
                        <User className="inline mr-1 h-4 w-4" /> User Ereek
                      </li>
                      <li>
                        <Link className="inline mr-1 h-4 w-4" /> Store Callback
                        URL
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Separator className="my-4" />
              <ul className="space-y-1">
                <li>
                  {" "}
                  <FaBlackTie className="inline mr-1 h-4 w-4" />
                  Blacklisted Numbers
                </li>
              </ul>
            </ScrollArea>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 p-6 relative">
          {/* Open button */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="mb-4 md:hidden bg-white border p-2 rounded shadow"
            >
              <MoveRight />
            </button>
          )}

          <Dashboard />
        </div>
      </div>
    </div>
  );
}
