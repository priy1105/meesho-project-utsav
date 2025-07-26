import React, { useState, useEffect } from 'react';
import BarChart from './BarChart.jsx';

const Impact = ({ isScriptLoaded }) => {
    const [participationRate, setParticipationRate] = useState(10);
    const [utsavGmv, setUtsavGmv] = useState('6.00');
    const [gmvUplift, setGmvUplift] = useState('34.3');

    // Initial chart data state
    const [gmvChartData, setGmvChartData] = useState({
        labels: ['Baseline GMV', 'Projected Total GMV'],
        datasets: [{
            label: 'Gross Merchandise Value (₹ Cr)',
            data: [17.5, 23.5], // Initial data for 10% participation
            backgroundColor: ['#6B7280', '#7e2a7e'],
            borderRadius: 4,
        }]
    });

    const financialModel = {
        targetUserBase: 500000,
        baselineAOV: 350,
        utsavAOV: 1200,
        baselineGMV: 175000000
    };

    // This effect now updates the text values AND the chart data
    useEffect(() => {
        const participants = financialModel.targetUserBase * (participationRate / 100);
        const currentUtsavGmv = participants * financialModel.utsavAOV;
        const upliftPercentage = (currentUtsavGmv / financialModel.baselineGMV) * 100;

        const utsavGmvInCr = currentUtsavGmv / 10000000;
        const baselineGmvInCr = financialModel.baselineGMV / 10000000;
        const totalGmvInCr = baselineGmvInCr + utsavGmvInCr;

        // Update text values
        setUtsavGmv(utsavGmvInCr.toFixed(2));
        setGmvUplift(upliftPercentage.toFixed(1));

        // Update chart data dynamically
        setGmvChartData(prevData => ({
            ...prevData,
            datasets: [{
                ...prevData.datasets[0],
                data: [baselineGmvInCr.toFixed(2), totalGmvInCr.toFixed(2)]
            }]
        }));
    }, [participationRate]);

    const gmvChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: (context) => `${context.label}: ₹${context.raw} Cr` } } },
        scales: { 
            y: { 
                beginAtZero: true, 
                grid: { color: 'rgba(0,0,0,0.05)' },
                ticks: {
                    callback: function(value) {
                        return '₹' + value + ' Cr';
                    }
                }
            }, 
            x: { grid: { display: false } } 
        }
    };

    return (
        <section id="impact" className="py-16 sm:py-24 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-brand-primary">Projected Impact: A Financial Deep Dive</h3>
                    <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">Project Utsav is designed to deliver measurable, significant improvements to key business metrics. This interactive model demonstrates the potential financial uplift from a single pilot Utsav.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="stat-card bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center"><h4 className="text-lg font-semibold text-gray-700">Baseline AOV</h4><p className="text-4xl font-bold text-gray-800 mt-2">₹350</p></div>
                    <div className="stat-card bg-white p-6 rounded-xl shadow-lg border border-green-300 text-center"><h4 className="text-lg font-semibold text-gray-700">Projected Utsav AOV</h4><p className="text-4xl font-bold text-green-600 mt-2">₹1,200</p></div>
                    <div className="stat-card bg-white p-6 rounded-xl shadow-lg border border-blue-300 text-center"><h4 className="text-lg font-semibold text-gray-700">Logistics Cost Reduction</h4><p className="text-4xl font-bold text-blue-600 mt-2">-33%</p></div>
                    <div className="stat-card bg-white p-6 rounded-xl shadow-lg border border-yellow-300 text-center"><h4 className="text-lg font-semibold text-gray-700">AOV Uplift</h4><p className="text-4xl font-bold text-yellow-500 mt-2">+243%</p></div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
                    <div className="grid md:grid-cols-5 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h4 className="text-2xl font-semibold text-brand-primary mb-4">Interactive Financial Simulator</h4>
                            <p className="text-gray-600 mb-6">Use the slider to adjust the projected participation rate for a pilot Utsav in a Tier-2 city (target base: 500,000 users). See how even modest participation can dramatically increase Gross Merchandise Value (GMV).</p>
                            <label htmlFor="participationRate" className="font-semibold text-gray-700">Participation Rate: <span className="font-bold text-brand-primary">{participationRate}%</span></label>
                            <input id="participationRate" type="range" min="5" max="25" value={participationRate} onChange={(e) => setParticipationRate(e.target.value)} />
                            <div className="mt-6 space-y-3">
                                <div><p className="text-gray-600">Utsav GMV:</p><p className="text-3xl font-bold text-brand-primary">₹{utsavGmv} Cr</p></div>
                                <div><p className="text-gray-600">Total GMV Uplift (vs. Baseline ₹17.5 Cr):</p><p className="text-3xl font-bold text-brand-secondary">+{gmvUplift}%</p></div>
                            </div>
                        </div>
                        <div className="md:col-span-3">
                             <div className="chart-container">
                                {isScriptLoaded ? <BarChart chartId="gmvChart" data={gmvChartData} options={gmvChartOptions} /> : <p>Loading chart...</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
