import React, { useState } from 'react';
import './AddBus.css';

function AddBus() {
  const [busData, setBusData] = useState({
    busNumber: '',
    ownerName: '',
    insuranceId: '',
    licenseNumber: '',
    routes: [{ from: '', to: '', time: '' }],
  });

  // Update main fields
  const handleChange = (e) => {
    setBusData({ ...busData, [e.target.name]: e.target.value });
  };

  // Update route fields dynamically
  const handleRouteChange = (index, e) => {
    const newRoutes = [...busData.routes];
    newRoutes[index][e.target.name] = e.target.value;
    setBusData({ ...busData, routes: newRoutes });
  };

  // Add a new route
  const addRoute = () => {
    setBusData({
      ...busData,
      routes: [...busData.routes, { from: '', to: '', time: '' }],
    });
  };

  // Remove a route
  const removeRoute = (index) => {
    const newRoutes = busData.routes.filter((_, i) => i !== index);
    setBusData({ ...busData, routes: newRoutes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Bus Data:', busData);
    alert(`Bus ${busData.busNumber} added successfully!`);
    setBusData({
      busNumber: '',
      ownerName: '',
      insuranceId: '',
      licenseNumber: '',
      routes: [{ from: '', to: '', time: '' }],
    });
  };

  return (
    <div className="addbus-container">
      <div className="addbus-card">
        <h2 className="addbus-title">Add New Bus</h2>
        <form onSubmit={handleSubmit} className="addbus-form">

          <label>Bus Number</label>
          <input
            type="text"
            name="busNumber"
            placeholder="Enter bus number"
            value={busData.busNumber}
            onChange={handleChange}
            required
          />

          <label>Owner Name</label>
          <input
            type="text"
            name="ownerName"
            placeholder="Enter owner name"
            value={busData.ownerName}
            onChange={handleChange}
            required
          />

          <label>Insurance ID</label>
          <input
            type="text"
            name="insuranceId"
            placeholder="Enter insurance ID"
            value={busData.insuranceId}
            onChange={handleChange}
            required
          />

          <label>Owner's License Number</label>
          <input
            type="text"
            name="licenseNumber"
            placeholder="Enter license number"
            value={busData.licenseNumber}
            onChange={handleChange}
            required
          />

          <h3 className="routes-title">Routes & Timings</h3>

          {busData.routes.map((route, index) => (
            <div key={index} className="route-item">
              <input
                type="text"
                name="from"
                placeholder="From"
                value={route.from}
                onChange={(e) => handleRouteChange(index, e)}
                required
              />
              <input
                type="text"
                name="to"
                placeholder="To"
                value={route.to}
                onChange={(e) => handleRouteChange(index, e)}
                required
              />
              <input
                type="time"
                name="time"
                value={route.time}
                onChange={(e) => handleRouteChange(index, e)}
                required
              />
              {busData.routes.length > 1 && (
                <button type="button" className="remove-route" onClick={() => removeRoute(index)}>
                  ✖
                </button>
              )}
            </div>
          ))}

          <button type="button" className="add-route-btn" onClick={addRoute}>
            + Add Route
          </button>

          <button type="submit" className="addbus-btn">Add Bus</button>
        </form>
      </div>
    </div>
  );
}

export default AddBus;
