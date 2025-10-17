import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useFindRoutes } from '../../Hooks/bus.hooks';
import './Home.css';

function Home() {

    const [departureStop, setDepartureStop] = useState('');
    const [arrivalStop, setArrivalStop] = useState('');
    const [busDetails, setBusDetails] = useState( null )

    const findRoutes = useFindRoutes()

    const handleSwap = () => {
        const temp = departureStop;
        setDepartureStop(arrivalStop);
        setArrivalStop(temp);

    };

    const handleFindRoutes = async () => {

        const data = await findRoutes({ departureStop, arrivalStop })
        setBusDetails(data)

    }

    return (
        <>

            <div className="home-container">
                < Navbar />


                <section className="journey-planner">
                    <h2>Plan Your Journey</h2>
                    <p>Select your departure and arrival stations to view available routes.</p>

                    <div className="input-section">
                        <div className="input-box">
                            <label>From</label>
                            <input
                                type="text"
                                placeholder="Enter start location"
                                value={departureStop}
                                onChange={(e) => setDepartureStop(e.target.value)}
                            />
                        </div>

                        <button className="swap-btn" onClick={handleSwap}>⇄</button>

                        <div className="input-box">
                            <label>To</label>
                            <input
                                type="text"
                                placeholder="Enter destination"
                                value={arrivalStop}
                                onChange={(e) => setArrivalStop(e.target.value)}
                            />
                        </div>

                        <button className="find-btn" onClick={handleFindRoutes}>Find Routes</button>
                    </div>

                    {departureStop && arrivalStop && (
                        <div className="selected-route">
                            <p>Selected Route: <b>{departureStop} ➜ {arrivalStop}</b></p>
                        </div>
                    )}
                </section>

                <section className="stats-section">
                    <div className="stat-card">
                        <h3>Active Buses</h3>
                        <p className="stat-value">24</p>
                    </div>
                    <div className="stat-card">
                        <h3>Routes Operating</h3>
                        <p className="stat-value">12/15</p>
                    </div>
                </section>

                <section className="system-status">
                    <div className="status-card">
                        <h3>System Status: <span className="good">All Good ✅</span></h3>
                        <p>All bus routes are operating normally. Real-time tracking is active across the network.</p>
                    </div>
                </section>

                {

                    busDetails && <section className="departures-section">

                        <h2>Departures</h2>

                        {

                            busDetails && busDetails.map((bus) => (

                                <div className="bus-card" key={bus._id}>

                                    <div className="bus-info">
                                        
                                        <h3>{bus?.busName}</h3>
                                        {

                                            bus.routeSegment?.map( ( routes, index ) => (

                                                <div key={ index }>

                                                    <p>{ routes.stop }</p>
                                                    <p>|</p>
                                                    <p>Arrival time : { routes.arrivalTime }</p>
                                                    <p>|</p>
                                                    <p>Departure time :  { routes.departureTime }</p>

                                                </div>

                                            ) )

                                        }

                                    </div>
                                    <span className="status ontime">On Time</span>

                                </div>

                            ))

                        }

                    </section>

                }

                <Footer />
            </div>

        </>
    );
}

export default Home;
