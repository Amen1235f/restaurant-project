import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing icons

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Company Info */}
                <div className="footer-section company-info">
                    <h3>Luxury Restaurant</h3>
                    <p>
                        Experience the finest dining with our world-class chefs and luxurious ambience.
                    </p>
                    <p>© 2024 Luxury Restaurant. All rights reserved.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section contact-info">
                    <h4>Contact Us</h4>
                    <p>Email: info@luxuryrestaurant.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Location: 123 Luxury St, Paris, France</p>
                </div>

                {/* Social Media */}
                <div className="footer-section social-media">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com"><FaFacebookF /></a>
                        <a href="https://twitter.com"><FaTwitter /></a>
                        <a href="https://instagram.com"><FaInstagram /></a>
                        <a href="https://linkedin.com"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
