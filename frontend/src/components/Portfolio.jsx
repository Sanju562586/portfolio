import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from './ImageModal';

const projectsData = [
    {
        title: "Travel Journal",
        category: "Web design",
        image: "/assets/images/TravelJournal.png",
        github: "#",
        deploy: "#"
    },
    {
        title: "Student Management System",
        category: "Web development",
        image: "/assets/images/sms.png",
        github: "https://github.com/Sanju562586/Student-Management-System",
        deploy: "https://student-management-system-frontend-tzfe.onrender.com"
    },
    {
        title: "Transportation Management System",
        category: "Web design",
        image: "/assets/images/Transportation.png",
        github: "https://github.com/Sanju562586/CBIT_Transportation_Management",
        deploy: "https://heroic-maamoul-e26cc5.netlify.app"
    },
    {
        title: "Image Caption Generator",
        category: "Machine Learning",
        image: "/assets/images/ImageCaptionGenerator.png",
        github: "#",
        deploy: "#"
    }
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [modalActive, setModalActive] = useState(false);
    const [modalImg, setModalImg] = useState('');
    const [modalAlt, setModalAlt] = useState('');

    const filteredProjects =
        filter === 'All'
            ? projectsData
            : projectsData.filter(
                p => p.category.toLowerCase() === filter.toLowerCase()
            );

    const openImage = (src, alt) => {
        setModalImg(src);
        setModalAlt(alt);
        setModalActive(true);
    };

    return (
        <motion.article
            className="portfolio active"
            data-page="portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
                <ul className="filter-list">
                    {['All', 'Web design', 'Web development', 'Machine Learning'].map(cat => (
                        <li key={cat} className="filter-item">
                            <button
                                className={filter === cat ? 'active' : ''}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>

                <ul className="project-list">
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <motion.li
                                key={project.title}
                                className="project-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="project-card">
                                    <figure
                                        className="project-img"
                                        onClick={() => openImage(project.image, project.title)}
                                    >
                                        <div className="project-item-icon-box">
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </div>
                                        <img src={project.image} alt={project.title} />
                                    </figure>

                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-category">{project.category}</p>

                                    <div className="project-actions">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="action-btn github-btn">
                                            <ion-icon name="logo-github"></ion-icon>
                                            <span>Source Code</span>
                                        </a>
                                        <a href={project.deploy} target="_blank" rel="noreferrer" className="action-btn deploy-btn">
                                            <ion-icon name="rocket-outline"></ion-icon>
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </section>

            <ImageModal
                isActive={modalActive}
                onClose={() => setModalActive(false)}
                imgSrc={modalImg}
                imgAlt={modalAlt}
            />
        </motion.article>
    );
};

export default Portfolio;
