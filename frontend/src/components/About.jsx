import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TestimonialsModal from './TestimonialsModal';

const testimonialsData = [
    {
        name: "Daniel lewis",
        avatar: "/assets/images/avatar-1.png",
        text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client.",
        date: "14 June, 2021"
    },
    {
        name: "Jessica miller",
        avatar: "/assets/images/avatar-2.png",
        text: "Very professional and delivered on time. Highly recommended for UI/UX and frontend tasks.",
        date: "14 June, 2021"
    },
    {
        name: "Emily evans",
        avatar: "/assets/images/avatar-3.png",
        text: "Creative and detail-oriented — excellent at turning client requirements into beautiful designs.",
        date: "14 June, 2021"
    },
    {
        name: "Henry william",
        avatar: "/assets/images/avatar-4.png",
        text: "Friendly, communicates clearly, and provides exceptional pixel-perfect work.",
        date: "14 June, 2021"
    }
];

const servicesData = [
    { title: "Web design", text: "The most modern and high-quality design made at a professional level.", icon: "/assets/images/icon-design.svg" },
    { title: "Web development", text: "High-quality development of sites at the professional level.", icon: "/assets/images/icon-dev.svg" },
    { title: "Mobile apps", text: "Professional development of applications for iOS and Android.", icon: "/assets/images/icon-app.svg" },
    { title: "Photography", text: "I make high-quality photos of any category at a professional level.", icon: "/assets/images/icon-photo.svg" }
];

const About = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const openModal = (item) => {
        setModalContent(item);
        setModalActive(true);
    };

    return (
        <motion.article
            className="about active"
            data-page="about"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 20 }}
            transition={{ duration: 0.5 }}
        >
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>I'm an under-graduate student and web developer who enjoys creating clean, responsive, and easy-to-use websites. I focus on building things that work smoothly and look good on all devices. I like turning ideas into real projects and improving them step by step. I also have experience with UI/UX basics and machine learning, and I enjoy learning new tools and technologies that help me grow as a developer.</p>
                <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. I add a personal touch to products and make sure they are eye-catching and easy to use.</p>
            </section>

            <section className="service">
                <h3 className="h3 service-title">What i'm doing</h3>
                <ul className="service-list">
                    {servicesData.map((service, index) => (
                        <li className="service-item" key={index}>
                            <div className="service-icon-box">
                                <img src={service.icon} alt={`${service.title} icon`} width="40" />
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">{service.title}</h4>
                                <p className="service-item-text">{service.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>
                <ul className="testimonials-list has-scrollbar">
                    {testimonialsData.map((item, index) => (
                        <li className="testimonials-item" key={index} onClick={() => openModal(item)}>
                            <div className="content-card" data-testimonials-item>
                                <figure className="testimonials-avatar-box">
                                    <img src={item.avatar} alt={item.name} width="60" data-testimonials-avatar />
                                </figure>
                                <h4 className="h4 testimonials-item-title" data-testimonials-title>{item.name}</h4>
                                <div className="testimonials-text" data-testimonials-text>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <TestimonialsModal
                isActive={modalActive}
                onClose={() => setModalActive(false)}
                content={modalContent}
            />

            <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>
                <ul className="clients-list has-scrollbar">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <li className="clients-item" key={i}><a href="#"><img src={`/assets/images/logo-${i}-color.png`} alt="client logo" /></a></li>
                    ))}
                </ul>
            </section>

        </motion.article>
    );
};

export default About;
