import React, { useState, useEffect } from 'react';

const Header = ({ onNavClick }) => {
    const [activeLink, setActiveLink] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'challenge', 'solution', 'impact', 'blueprint', 'risks'];
            const scrollPosition = window.scrollY + 100;
            
            const currentSection = sections.find(id => {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
                }
                return false;
            });

            if (currentSection) {
                setActiveLink(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'challenge', label: 'The Challenge' },
        { id: 'solution', label: 'The Solution' },
        { id: 'impact', label: 'The Impact' },
        { id: 'blueprint', label: 'Blueprint' },
        { id: 'risks', label: 'Risks' },
    ];

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="Meesho Logo" className="h-8" />
                    <h1 className="text-2xl font-bold text-brand-primary ml-25 whitespace-nowrap">Project Utsav</h1>
                </div>
                <div className="hidden md:flex space-x-8">
                    {navItems.map(item => (
                        <a key={item.id} href={`#${item.id}`} onClick={(e) => onNavClick(e, item.id)} className={`nav-link ${activeLink === item.id ? 'active' : ''}`}>
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
