import React from "react";

export default function Card({ item }) {
  let cardStyle = `card border-left-${item.styleColor} shadow h-100 py-2`;
  let textColor = `text-xs font-weight-bold text-${item.styleColor} text-uppercase mb-1`;

  return (
    <div className={cardStyle}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className={textColor}>{item.cardText}</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">
              {item.cardAmount}
            </div>
          </div>
          <div className="col-auto">
            <i className={item.icon}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
