import React, { useState } from 'react';

// Data for the risk cards
const riskItems = [
    { 
        id: 1, 
        title: 'Operational Risk', 
        subtitle: 'Logistical Complexity',
        icon: '🚚', 
        content: 'Phased pilot in 3-5 cities to refine processes. Develop a robust tech backend for real-time inventory and logistics visibility. Create standardized operational playbooks for Valmo hubs to ensure consistent execution.'
    },
    { 
        id: 2, 
        title: 'Market Risk', 
        subtitle: 'Sales Cannibalization',
        icon: '📉', 
        content: 'Analyze purchasing data to ensure net-new spending. Design Utsav themes around specific occasions (festivals, seasons) that naturally drive incremental demand, not just generic sales that shift existing spending.'
    },
    { 
        id: 3, 
        title: 'Execution Risk', 
        subtitle: 'Captain Ineffectiveness',
        icon: '🤷‍♂️', 
        content: 'Implement a tiered system for Captains with performance-based rewards. Use data analytics to monitor activity and flag fraud. Provide robust training, community management, and clear communication channels to empower Captains.'
    },
    { 
        id: 4, 
        title: 'Financial Risk', 
        subtitle: 'Margin Erosion',
        icon: '💸', 
        content: 'The financial model is designed so that the significant AOV increase and logistics cost reductions more than offset discounts. Meticulously model and track the P&L for every Utsav to ensure each event is margin-accretive.'
    },
];

const Risks = () => {
    // Set the first risk as the default selected one
    const [selectedRisk, setSelectedRisk] = useState(riskItems[0]);

    return (
        <section id="risks" className="py-16 sm:py-24 px-6">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-brand-primary">Risk Assessment & Mitigation</h3>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">A proactive approach to risk management is key. Select a risk category to view the planned mitigation strategy.</p>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Clickable Risk Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:w-2/5">
                        {riskItems.map(risk => (
                            <button 
                                key={risk.id}
                                onClick={() => setSelectedRisk(risk)}
                                className={`risk-card ${selectedRisk && selectedRisk.id === risk.id ? 'active' : ''}`}
                            >
                                <div className="risk-icon">{risk.icon}</div>
                                <div>
                                    <h4 className="font-bold">{risk.title}</h4>
                                    <p className="text-sm text-gray-500">{risk.subtitle}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Display Area for Selected Risk Content */}
                    <div className="lg:w-3/5">
                        {selectedRisk && (
                            <div className="risk-content-area">
                                <div className="flex items-center mb-4">
                                    <div className="risk-icon-large">{selectedRisk.icon}</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-brand-primary">{selectedRisk.title}</h3>
                                        <p className="text-md text-gray-600">{selectedRisk.subtitle}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>Mitigation Strategy:</strong> {selectedRisk.content}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Risks;
