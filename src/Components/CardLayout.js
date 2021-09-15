import React from "react";
import Card from "./Card";

export default function CardLayout() {
  const cardData = [
    {
      styleColor: "primary",
      cardText: "Earnings (Monthly)",
      cardAmount: "$40,000",
      icon: "fas fa-calendar fa-2x text-gray-300",
    },
    {
      styleColor: "success",
      cardText: "Earnings (Annual)",
      cardAmount: "$215,000",
      icon: "fas fa-dollar-sign fa-2x text-gray-300",
    },
    {
      styleColor: "info",
      cardText: "Tasks",
      cardAmount: "50%",
      icon: "fas fa-clipboard-list fa-2x text-gray-300",
    },
    {
      styleColor: "warning",
      cardText: "Pending Requests",
      cardAmount: "18",
      icon: "fas fa-comments fa-2x text-gray-300",
    },
  ];

  return (
    <div className="row">
      {cardData.map((item, index) => {
        return (
          <div className="col-xl-3 col-md-6 mb-4" key={index}>
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
}
