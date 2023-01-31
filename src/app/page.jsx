/* eslint-disable react/no-unescaped-entities */

'use client';

import { useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg-px-40">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
