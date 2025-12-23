import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './assets/css/style.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {
  const [activePage, setActivePage] = useState('about');

  return (
    <main>
      <Cursor />
      <Sidebar />

      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <AnimatePresence mode='wait'>
            {activePage === 'about' && <About key="about" />}
            {activePage === 'resume' && <Resume key="resume" />}
            {activePage === 'portfolio' && <Portfolio key="portfolio" />}
            {activePage === 'contact' && <Contact key="contact" />}
          </AnimatePresence>
        </div>

      </div>
    </main>
  );
}

export default App;
