import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Slider from './Slider/Slider';
import About from './About/About';
import Image from './Image/Image';
import Menu from './Menu/Menu';
import Booking from './Booking/Booking';
import Review from './Review/Review';
import Subscription from './Subscription/Subscription';
import Footer from './Footer/Footer';
import MenuItem from './MenuItem/MenuItem';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import CreateReservation from './CreateReservation/CreateReservation';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);  // user state

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='bg'>
            {isLoading ? (
                <div className="loader-container">
                    <span className="loader"></span>
                </div>
            ) : (
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Slider />
                                <About />
                                <Image />
                                <Menu />
                                <Booking />
                                <Review />
                                <Subscription />
                                <Footer />
                            </>
                        } />
                        {/* Add new routes for authentication */}
                        <Route path="/register" element={<RegisterForm />} />
                        {/* Pass setUser instead of user */}
                        <Route path="/login" element={<LoginForm setUser={setUser} />} />
                        <Route path="/menuItem" element={<MenuItem />} />
                        <Route path="/create-reservation" element={<CreateReservation />} />
                    </Routes>
                </Router>
            )}
        </div>
    );
}

export default App;
