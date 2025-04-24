import { Card, CardContent } from "@/components/ui/card"
import { Lock } from "lucide-react"

const licenses = [
  {
    title: "WHATSAPP LICENSE",
    count: 10,
    expiry: "08-05-2025",
    status: "Active",
  },
  {
    title: "WAB LICENSE",
    count: 10,
    expiry: "24-04-2025",
    status: "Active",
  },
  {
    title: "MANUAL DISLER LICENSE",
    count: 2,
    expiry: "06-11-2025",
    status: "Active",
  },
  {
    title: "PREDICTIVE DIALER LICENSE",
    count: 2,
    expiry: "03-05-2025",
    status: "Active",
  },
  {
    title: "PREVIEW DIALER LICENSE",
    count: 10,
    expiry: "24-09-2025",
    status: "Active",
  },
]

export default function LicenseCards() {
  return (
    <div className="p-4">
       <button className="text-sm text-blue-600 hover:underline bottom-2 bg-gray-200 rounded-lg p-1">← Go Esck</button>
        
      <div className="flex items-center mt-5 mb-8 gap-4">
      <h1 className="text-sm font-semibold">Dashboard</h1>
        <h1 className="text-sm font-semibold">Autodialer</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {licenses.map((license, index) => (
          <Card key={index} className="bg-green-50 text-sm p-2">
            <CardContent className="flex flex-col gap-1">
              <Lock className="h-4 w-4 mb-1 text-gray-600" />
              <h2 className="font-semibold">{license.title}</h2>
              <p>License Count: {license.count}</p>
              <p>Expiry: {license.expiry}</p>
              <p className="text-green-600 font-medium">{license.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
