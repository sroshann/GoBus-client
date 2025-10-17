import React, { useState } from "react";
import "./AddBus.css";
import { FaClock, FaMapMarkerAlt, FaPlus, FaTrash } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useAddBus } from "../../Hooks/bus.hooks";

function AddBus() {
    const [busName, setBusName] = useState("");
    const [busNumber, setBusNumber] = useState("");

    const [owner, setOwner] = useState({
        name: "",
        address: "",
        mobileNumber: "",
    });

    const [routes, setRoutes] = useState([
        { stop: "", arrivalTime: "", departureTime: "" },
    ]);

    const addBus = useAddBus()

    const handleAddRoute = () => {
        setRoutes([...routes, { stop: "", arrivalTime: "", departureTime: "" }]);
    };

    const handleRemoveRoute = (index) => {
        const updatedRoutes = routes.filter((_, i) => i !== index);
        setRoutes(updatedRoutes);
    };

    const handleRouteChange = (index, field, value) => {
        const updatedRoutes = [...routes];
        updatedRoutes[index][field] = value;
        setRoutes(updatedRoutes);
    };

    const handleOwnerChange = (field, value) => {
        setOwner((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const busData = {
            busName,
            busNumber,
            status : true,
            owner, 
            routes, 
        };

        addBus( busData )
        
    };

    return (
        <>
            <Navbar />
            <div className="addbus-container">
                <div className="addbus-card">
                    <h2 className="addbus-title">Add New Bus</h2>

                    <form className="addbus-form" onSubmit={handleSubmit}>
                    
                        <label>Bus Name:</label>
                        <input
                            type="text"
                            value={busName}
                            onChange={(e) => setBusName(e.target.value)}
                            placeholder="Enter bus name"
                            required
                        />

                        <label>Bus Number:</label>
                        <input
                            type="text"
                            value={busNumber}
                            onChange={(e) => setBusNumber(e.target.value)}
                            placeholder="Enter bus number"
                            required
                        />

                        <h3 className="routes-title">Owner Details</h3>

                        <label>Owner Name:</label>
                        <input
                            type="text"
                            value={owner.name}
                            onChange={(e) => handleOwnerChange("name", e.target.value)}
                            placeholder="Enter owner's name"
                            required
                        />

                        <label>Owner Address:</label>
                        <input
                            type="text"
                            value={owner.address}
                            onChange={(e) => handleOwnerChange("address", e.target.value)}
                            placeholder="Enter owner's address"
                            required
                        />

                        <label>Owner Mobile Number:</label>
                        <input
                            type="text"
                            value={owner.mobileNumber}
                            onChange={(e) => handleOwnerChange("mobileNumber", e.target.value)}
                            placeholder="Enter owner's mobile number"
                            required
                        />

                        <h3 className="routes-title">Route Segments</h3>

                        {routes.map((route, index) => (
                            <div className="route-item" key={index}>
                                <div className="destination-group">
                                    <FaMapMarkerAlt className="destination-icon" />
                                    <input
                                        type="text"
                                        placeholder="Enter stop name"
                                        value={route.stop}
                                        onChange={(e) =>
                                            handleRouteChange(index, "stop", e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className="route-bottom">
                                    <div className="time-group">
                                        <FaClock className="time-icon" />
                                        <input
                                            type="time"
                                            value={route.arrivalTime}
                                            onChange={(e) =>
                                                handleRouteChange(index, "arrivalTime", e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="time-group">
                                        <FaClock className="time-icon" />
                                        <input
                                            type="time"
                                            value={route.departureTime}
                                            onChange={(e) =>
                                                handleRouteChange(index, "departureTime", e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    {routes.length > 1 && (
                                        <button
                                            type="button"
                                            className="remove-route-btn"
                                            onClick={() => handleRemoveRoute(index)}
                                        >
                                            <FaTrash />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}

                        <button
                            type="button"
                            className="addbus-btn"
                            onClick={handleAddRoute}
                        >
                            <FaPlus /> Add Another Stop
                        </button>

                        <button type="submit" className="addbus-btn">
                            Add Bus
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AddBus;
