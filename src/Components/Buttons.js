import React from "react";
import Button from "./Button";
import Placeholder from "./Placeholder";

export default function Buttons() {
  const types = [
    "primary",
    "secondary",
    "info",
    "success",
    "danger",
    "warning",
    "light",
    "dark",
  ];
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-4 mt-4 text-gray-800">Buttons</h1>

      <div style={{ display: "flex" }}>
        {types.map((item, value) => {
          return (
            <Button buttonStyle={item} key={value}>
              {item}
            </Button>
          );
        })}
      </div>

      <Placeholder Placeholder="Buttons" />
    </div>
  );
}
