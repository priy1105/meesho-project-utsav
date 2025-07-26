import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Solution from './components/Solution';
import Impact from './components/Impact';
import Blueprint from './components/Blueprint';
import Risks from './components/Risks';
import Footer from './components/Footer';

function App() {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    // Effect to load the Chart.js script from a CDN
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.async = true;
        script.onload = () => setIsScriptLoaded(true);
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    // Function to handle smooth scrolling for navigation links
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for sticky header height
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <Header onNavClick={handleNavClick} />
            {isScriptLoaded ? (
                <main>
                    <Hero />
                    <Challenge isScriptLoaded={isScriptLoaded} />
                    <Solution />
                    <Impact isScriptLoaded={isScriptLoaded} />
                    <Blueprint />
                    <Risks />
                </main>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <p className="text-2xl font-semibold">Loading Dashboard...</p>
                </div>
            )}
            <Footer />
        </>
    );
}

export default App;