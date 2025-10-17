import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';
import { useGetAllBuses } from "../../Hooks/bus.hooks";
import "./Allbuses.css";

function AdminBusList() {
    const [buses, setBuses] = useState([]);

    const getAllBuses = useGetAllBuses()
    const handleGettingBuses = async () => {

        const data = await getAllBuses()
        setBuses( data )

    }

    useEffect(() => {

        handleGettingBuses()

    }, []);

    return (
        <>
            <div className="home-container">
                {/* Header */}
                <Navbar />

                {/* Bus List Section */}
                <div className="adminbuslist-container">
                    <h2 className="title">List of All Registered Buses</h2>

                    <table className="bus-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Bus Number</th>
                                <th>Bus Name</th>
                                <th>Owner Name</th>
                                <th>Owner Number</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buses.length > 0 ? (
                                buses.map((bus, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{bus.busNumber}</td>
                                        <td>{bus?.busName}</td>
                                        <td>{bus?.owner?.name}</td>
                                        <td>{bus?.owner?.mobileNumber}</td>
                                        <td>{ bus?.status ? 'Active' : 'Maintanance' }</td>
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
            </div>
            <Footer />
        </>
    );
}

export default AdminBusList;
