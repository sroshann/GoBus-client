import React, { useState } from "react";
import "./AddBus.css";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

function AddBus() {
  const [busNumber, setBusNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [insuranceId, setInsuranceId] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [destination, setDestination] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const busData = {
      busNumber,
      ownerName,
      insuranceId,
      licenseNumber,
      destination,
      startTime,
      endTime,
    };
    console.log("Bus Added:", busData);
    alert("Bus added successfully!");
  };

  return (
    <div className="addbus-container">
      <div className="addbus-card">
        <h2 className="addbus-title">Add New Bus</h2>
        <form className="addbus-form" onSubmit={handleSubmit}>
          <label>Bus Number:</label>
          <input
            type="text"
            value={busNumber}
            onChange={(e) => setBusNumber(e.target.value)}
            placeholder="Enter bus number"
            required
          />

          <label>Owner Name:</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="Enter owner's name"
            required
          />

          <label>Insurance ID:</label>
          <input
            type="text"
            value={insuranceId}
            onChange={(e) => setInsuranceId(e.target.value)}
            placeholder="Enter insurance ID"
            required
          />

          <label>Owner Mobile Number:</label>
          <input
            type="text"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            placeholder="Enter owner mobile number"
            required
          />

          <h3 className="routes-title">Destination & Timings</h3>

          <div className="route-item">
            <div className="destination-group">
              <FaMapMarkerAlt className="destination-icon" />
              <input
                type="text"
                placeholder="Enter destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>

            <div className="route-bottom">
              <div className="time-group">
                <FaClock className="time-icon" />
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
              </div>

              <div className="time-group">
                <FaClock className="time-icon" />
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="addbus-btn">
            Add Bus
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBus;
