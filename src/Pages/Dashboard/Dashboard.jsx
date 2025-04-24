import CampaignDetails from "@/components/Atomes/CampaignDetails";
import LicenseCards from "@/components/Atomes/LicenseCards";
import OverallReport from "@/components/Atomes/OverallReport";

export const Dashboard = () => {
  return (
    <div>
      <LicenseCards />
      <CampaignDetails />
      <OverallReport />
    </div>
  );
};
