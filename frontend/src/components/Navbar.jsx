import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activePage, setActivePage }) => {
    const navItems = ['About', 'Resume', 'Portfolio', 'Contact'];

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navItems.map((item) => (
                    <li className="navbar-item" key={item}>
                        <motion.button
                            className={`navbar-link ${activePage === item.toLowerCase() ? 'active' : ''}`}
                            onClick={() => setActivePage(item.toLowerCase())}
                            data-nav-link
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item}
                        </motion.button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
