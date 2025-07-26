import React, { useState } from 'react';

// SVG Icons for each tab
const ConceptIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2zM9.05 5A5 5 0 0 0 5 8.95M9.05 1A9 9 0 0 0 1 8.94m-1 7.98v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2z"></path><path d="M12 2a7 7 0 0 1 7 7c0 3-2 5-2 5H7s-2-2-2-5a7 7 0 0 1 7-7z"></path><path d="M12 12v.01"></path></svg>;
const GamificationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3.5 9.5 4-4L12 10l4.5-4.5 4 4L16 14l-4 4.5-4.5-4.5Z"></path><path d="m12 10 4.5 4.5"></path><path d="m12 14.5-4.5-4.5"></path></svg>;
const TrustIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>;


const Solution = () => {
    const [activeTab, setActiveTab] = useState('concept');

    const tabs = [
        { id: 'concept', title: "The 'Utsav' Concept", icon: <ConceptIcon /> },
        { id: 'gamification', title: 'Gamification Layer', icon: <GamificationIcon /> },
        { id: 'trust', title: 'Trust Layer', icon: <TrustIcon /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'concept':
                return (
                    <div>
                        <h4 className="text-2xl font-semibold text-brand-primary mb-3">Hyperlocal Shopping Festivals</h4>
                        <p className="text-gray-700 leading-relaxed">An "Utsav" is a time-bound (e.g., 72-hour), theme-based, hyperlocal shopping festival. Instead of a generic sale, we create culturally resonant events like the "Pune Ganesh Chaturthi Decor Utsav" or "Patna Chhath Puja Essentials Utsav" or the "Jaipur Teej Saree Utsav". This approach taps into the rich cultural fabric of India, making shopping a community celebration and directly targeting a core mechanism to increase AOV: curated "Utsav Baskets" of 3-5 related items, moving single-item orders to high-value bundles.</p>
                    </div>
                );
            case 'gamification':
                return (
                    <div>
                        <h4 className="text-2xl font-semibold text-brand-primary mb-3">Driving Collective Action</h4>
                        <p className="text-gray-700 leading-relaxed mb-6">To drive participation and larger basket sizes, we introduce a powerful gamification layer. A city-wide progress bar tracks total sales, unlocking progressively higher discounts for *everyone* as community milestones are hit. This creates a viral loop, encouraging users to invite others to help reach the next discount tier.</p>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h5 className="font-semibold text-center mb-4">Example: Community-Unlocked Tiers</h5>
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">Progress</span></div>
                                    <div className="text-right"><span className="text-xs font-semibold inline-block text-brand-primary">60%</span></div>
                                </div>
                                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-pink-200">
                                    <div style={{ width: '60%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-secondary"></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>Start</span>
                                    <span>Tier 1: 10% Off</span>
                                    <span>Tier 2: 15% Off</span>
                                    <span>Tier 3: Free Shipping</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'trust':
                return (
                    <div>
                        <h4 className="text-2xl font-semibold text-brand-primary mb-3">The 'Community Captain' Role</h4>
                        <p className="text-gray-700 leading-relaxed">We solve the "scalable trust deficit" by re-introducing a human element. Top resellers are elevated to "Community Captains"—official, trusted curators for their locality. They vouch for product quality in Utsav Baskets, answer questions, and leverage their social capital to drive sales. They are compensated with a curation fee from Meesho, not a commission from sellers, preserving the 0% commission model while building a powerful, distributed network of trust.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="solution" className="py-16 sm:py-24 px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-brand-primary">The Solution: Project Utsav</h3>
                    <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">Project Utsav is a multi-layered framework designed to transform shopping from a solitary transaction into a collective, gamified, and trusted community event. Explore the three core pillars of the solution.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex justify-center border-b border-gray-200">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`tab-button flex items-center justify-center flex-1 py-3 px-4 text-lg font-medium text-gray-600 transition-colors duration-300 ${activeTab === tab.id ? 'active' : ''}`}>
                                {tab.icon}
                                <span className="ml-2">{tab.title}</span>
                            </button>
                        ))}
                    </div>
                    <div className="mt-8">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
