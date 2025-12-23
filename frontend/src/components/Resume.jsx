import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.article
            className="resume active"
            data-page="resume"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 20 }}
            transition={{ duration: 0.5 }}
        >

            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">

                    <motion.li
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="h4 timeline-item-title">Chaitanya Bharathi Institute of Technology</h4>
                        <span>2023 - Present</span>
                        <p className="timeline-text">Under-graduation in Computer Science and Engineering.</p>
                    </motion.li>

                    <motion.li
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="h4 timeline-item-title">Government Polytechnic - Nalgonda</h4>
                        <span>2021 - 2023</span>
                        <p className="timeline-text">Diploma in Computer Engineering.</p>
                    </motion.li>

                    <motion.li
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 className="h4 timeline-item-title">Viswashanthi Vidyalayam High School</h4>
                        <span>2011 - 2021</span>
                        <p className="timeline-text">Secondary School Certificate (SSC)</p>
                    </motion.li>

                </ol>

            </section>

            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>

                <ul className="skills-list content-card">

                    <motion.li className="skills-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                        <div className="title-wrapper"><h5 className="h5">Web design</h5><data value="70">70%</data></div>
                        <div className="skill-progress-bg"><motion.div className="skill-progress-fill" initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ duration: 1, delay: 0.2 }}></motion.div></div>
                    </motion.li>

                    <motion.li className="skills-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <div className="title-wrapper"><h5 className="h5">Data Structures and Algorithms</h5><data value="60">60%</data></div>
                        <div className="skill-progress-bg"><motion.div className="skill-progress-fill" initial={{ width: 0 }} whileInView={{ width: "60%" }} transition={{ duration: 1, delay: 0.3 }}></motion.div></div>
                    </motion.li>

                    <motion.li className="skills-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <div className="title-wrapper"><h5 className="h5">Multiple Languages: C, C++, Java, Python</h5><data value="70">70%</data></div>
                        <div className="skill-progress-bg"><motion.div className="skill-progress-fill" initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ duration: 1, delay: 0.4 }}></motion.div></div>
                    </motion.li>

                    <motion.li className="skills-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <div className="title-wrapper"><h5 className="h5">Machine Learning</h5><data value="55">55%</data></div>
                        <div className="skill-progress-bg"><motion.div className="skill-progress-fill" initial={{ width: 0 }} whileInView={{ width: "55%" }} transition={{ duration: 1, delay: 0.5 }}></motion.div></div>
                    </motion.li>

                </ul>
            </section>

        </motion.article>
    );
};

export default Resume;
