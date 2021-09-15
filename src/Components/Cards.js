import React from "react";
import CardLayout from "./CardLayout";
import Placeholder from "./Placeholder";

export default function Cards() {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 mt-4 text-gray-800">Cards</h1>
      </div>

      <CardLayout />
      <Placeholder Placeholder="Card" />
    </div>
  );
}
