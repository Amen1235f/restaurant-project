import React, { useState, useEffect } from "react";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // Check if the user is logged in (you can use a token or similar method)
    useEffect(() => {
        const token = localStorage.getItem('token'); // or any other method of tracking login
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const handleLogout = () => {
        // Clear token or any relevant authentication data
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <div className="navbar-container">
            <div className="logo-container">
                <img src="/log.png" alt="Restaurant Logo" className="navbar-logo" />
            </div>
            <ul>
                <li><Link to="/"><i className="fas fa-home"></i> HOME</Link></li>
                <li><Link to="/menuItem"><i className="fas fa-utensils"></i> MENU</Link></li>
                <li><Link to="/create-reservation"><i className="fas fa-calendar-plus"></i> CREATE RESERVATION</Link></li>
                <li><Link to="/gallery"><i className="fas fa-images"></i> GALLERY</Link></li>
                <li><Link to="/contact"><i className="fas fa-envelope"></i> CONTACT</Link></li>

                {/* Conditional rendering based on authentication */}
                {!isAuthenticated ? (
                    <>
                        <li><Link to="/register"><i className="fas fa-user-plus"></i> REGISTER</Link></li>
                        <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> LOGIN</Link></li>
                    </>
                ) : (
                    <li><button onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> LOGOUT</button></li>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
