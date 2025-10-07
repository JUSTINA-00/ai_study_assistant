import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import OverviewCards from "./OverviewCards";
import TimetableReader from "../timetable/TimetableReader";

function Dashboard() {
  const [section, setSection] = useState("dashboard");

  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="main-content">
        <Sidebar onSelect={setSection} />

        <div className="page-content">
          {section === "dashboard" && <OverviewCards />}
          {section === "timetable" && <TimetableReader />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
