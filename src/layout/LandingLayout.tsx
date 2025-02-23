import { LandingNavBar } from "@/components/landing-navbar";
import { Outlet } from "react-router";

function LandingLayout() {
  return (
    <div className="w-full h-screen bg-white">
      <LandingNavBar />
      <Outlet />
    </div>
  );
}

export default LandingLayout;
