import React from "react";
import "./SelectedBus.css";

function SelectedBus() {
  const busData = {
    busNumber: "TN-07 AB 2345",
    routeName: "Chennai Central → Tambaram",
    stops: [
      "Chennai Central",
      "Egmore",
      "Saidapet",
      "Guindy",
      "Airport",
      "Pallavaram",
      "Chromepet",
      "Tambaram",
    ],
  };

  const userStart = "Guindy";
  const userEnd = "Chromepet";

  return (
    <div className="selectedbus-container">
      <div className="bus-info-card">
        <h2> Bus Number: {busData.busNumber}</h2>
        <p className="route-name">Route: {busData.routeName}</p>
      </div>

      <div className="route-container">
        <div className="route-line"></div>
        {busData.stops.map((stop, index) => {
          const isStart = stop === userStart;
          const isEnd = stop === userEnd;
          return (
            <div key={index} className="stop">
              <div
                className={`circle ${
                  isStart ? "start" : isEnd ? "end" : "normal"
                }`}
              ></div>
              <span
                className={`stop-label ${
                  isStart ? "start-label" : isEnd ? "end-label" : ""
                }`}
              >
                {stop}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectedBus;
