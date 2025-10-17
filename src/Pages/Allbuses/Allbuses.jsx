import React, { useEffect, useState } from "react";
import "./Allbuses.css";

function AdminBusList() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    // Simulated data (replace with API later)
    const sampleData = [
      {
        busNumber: "TN-07 AB 2345",
        routeName: "Chennai Central → Tambaram",
        ownerName: "Ravi Kumar",
        ownerPhone: "9876543210",
      },
      {
        busNumber: "TN-10 XY 9876",
        routeName: "Koyambedu → Velachery",
        ownerName: "Suresh Babu",
        ownerPhone: "9845123456",
      },
      {
        busNumber: "TN-22 BB 4567",
        routeName: "Thiruvanmiyur → Avadi",
        ownerName: "Mohan Raj",
        ownerPhone: "9790011122",
      },
    ];

    setBuses(sampleData);
  }, []);

  return (
    <div className="adminbuslist-container">
      <h2 className="title"> List of All Registered Buses</h2>

      <table className="bus-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Bus Number</th>
            <th>Route</th>
            <th>Owner Name</th>
            <th>Owner Number</th>
          </tr>
        </thead>
        <tbody>
          {buses.length > 0 ? (
            buses.map((bus, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{bus.busNumber}</td>
                <td>{bus.routeName}</td>
                <td>{bus.ownerName}</td>
                <td>{bus.ownerPhone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">
                No buses found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBusList;
