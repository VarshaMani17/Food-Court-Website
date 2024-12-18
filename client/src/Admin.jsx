import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Admin.css';
import omg from './assets/omg.webp';

function Admin() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="admin-container">
            <div className="sidebar">
                <h3 className='hh3'>Food-Court Dashboard</h3>
                <ul>
                    {/* <li><Link to='/admin/orders'>Order Management</Link></li> */}
                    <li><Link to='/admin/products'>Products</Link></li>
                    <li><Link to='/order'>Orders</Link></li> {/* Added Products link */}
                    {/* <li><Link to='/report'>Report</Link></li>
                    <li><Link to='/admin/completedorders'>Completed Orders</Link></li> */}
                    {/* <li><Link to='/admin/event'>Events</Link></li> */}
                </ul>

                <button className="log" onClick={handleLogout}>Logout</button>

            </div>
            <div className="main-content">
                <div className='fx'>
                    <h1>KEC Food-Court</h1></div>
                <hr />
                <div >
                    <p className='txt'>The Admin Login system is designed to provide administrators with powerful tools for managing customer orders efficiently. Upon logging in, administrators gain access to a comprehensive dashboard where they can view all customer orders. This feature allows them to track order details, monitor the status of each order, and ensure smooth operations.A key functionality of the admin dashboard is the ability to verify orders using a unique random generation code. Each customer order is assigned a distinct random code, which serves as a secure identifier for verification purposes. Admins can enter this code into the system to confirm the authenticity of the order, ensuring that only valid and correctly processed orders are approved.In addition to verifying orders, administrators have the capability to remove orders from the system. By using the same random code, admins can efficiently locate and delete specific orders when necessary. This functionality is particularly useful for managing errors, handling cancellations, or correcting issues related to order processing.Overall, the Admin Login system equips administrators with essential tools for overseeing customer orders, maintaining order integrity, and ensuring that the order management process remains organized and error-free.</p>

                </div>
                <hr />
            </div>

        </div>
    );
}

export default Admin;
