import React from "react";
import CardLayout from "./CardLayout";
import Placeholder from "./Placeholder";

export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      <CardLayout />
      <Placeholder Placeholder="Dashboard" />
    </div>
  );
}
