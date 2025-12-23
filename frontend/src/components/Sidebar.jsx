import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>

            <div className="sidebar-info">

                <figure className="avatar-box">
                    <img src="/assets/images/my-avatar.png" alt="Profile photo" width="80" />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Sanjay Kumar Dupati">
                        <TypeAnimation
                            sequence={[
                                'Sanjay Kumar Dupati',
                                5000,
                                '',
                                500,
                                'Sanjay Kumar Dupati',
                                5000
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                            cursor={false}
                        />
                    </h1>
                    <div className="title">
                        <TypeAnimation
                            sequence={[
                                'Web developer',
                                1000,
                                'Student',
                                1000,
                                'Tech Enthusiast',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </div>

                <button className="info_more-btn" data-sidebar-btn onClick={() => setIsActive(!isActive)}>
                    <span>Show Contacts</span>
                    <ion-icon name="chevron-down"></ion-icon>
                </button>

            </div>

            <div className="sidebar-info_more">

                <div className="separator"></div>

                <ul className="contacts-list">

                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:sanjaykumardupati6@gmail.com" className="contact-link">sanjaykumardupati6@gmail.com</a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="phone-portrait-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+919014680891" className="contact-link">+91 9014680891</a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="calendar-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time dateTime="2004-08-26">August 26, 2004</time>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="location-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>Hyderabad, Telangana, India</address>
                        </div>
                    </li>

                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    <li className="social-item"><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a>
                    </li>
                    <li className="social-item"><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                    <li className="social-item"><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a>
                    </li>
                </ul>

            </div>

        </aside>
    );
};

export default Sidebar;
