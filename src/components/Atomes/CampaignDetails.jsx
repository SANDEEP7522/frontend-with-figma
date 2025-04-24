import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const campaigns = [
  {
    title: "djefe",
    id: 3817,
    type: "APP BASED DIALER",
    csv: 0,
    status: "Pending",
  },
  {
    title: "ihwedewdwdwdw",
    id: 3810,
    type: "APP BASED DIALER",
    csv: 0,
    status: "Pending",
  },
  {
    title: "trrerreddtd4t",
    id: 3814,
    type: "APP BASED DIALER",
    csv: 0,
    status: "Pending",
  },
  {
    title: "hduyegyfe",
    id: 3813,
    type: "App Based Dialer",
    csv: 0,
    status: "Pending",
  },
]

export default function CampaignDetails() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Campaign Details</h2>
        <div className="space-x-2">
          <button className="rounded-full border px-4 py-1 text-sm text-gray-600 hover:bg-gray-100">
            All Campaigns
          </button>
          <button className="rounded-full border px-4 py-1 text-sm text-gray-600 hover:bg-gray-100">
            ViewAll &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {campaigns.map((c, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="h-6 w-6 rounded bg-gray-100" />
                <Badge
                  variant="outline"
                  className={`${
                    c.status === "Pending"
                      ? "bg-red-100 text-red-600 border-red-200"
                      : ""
                  } text-xs`}
                >
                  {c.status}
                </Badge>
              </div>
              <h3 className="font-semibold">{c.title} ({c.id})</h3>
              <p className="text-xs text-gray-500 mt-1">Campaign Type</p>
              <p className="text-sm font-medium">{c.type}</p>
              <div className="text-xs text-gray-500 mt-2">CSV Data</div>
              <p className="text-sm">{c.csv}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
