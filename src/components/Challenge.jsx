import React from 'react';
import BarChart from './BarChart.jsx';

const Challenge = ({ isScriptLoaded }) => {
    const barChartData = {
        labels: ['Order Volume Share', 'GMV Share'],
        datasets: [{
            label: 'Market Share %',
            data: [37, 8.5],
            backgroundColor: ['#3b82f6', '#ef4444'],
            borderRadius: 4,
        }]
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}%` } } },
        scales: { 
            y: { beginAtZero: true, max: 40, grid: { color: 'rgba(0,0,0,0.05)' } }, 
            x: { grid: { display: false } } 
        }
    };

    return (
        <section id="challenge" className="py-12 sm:py-16 px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h3 className="text-4xl font-bold text-brand-primary">The Value Seeker's Paradox</h3>
                    <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">Meesho's massive scale in order volume masks a critical challenge: a low Average Order Value (AOV) that limits its share of the total market value.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Stat Cards */}
                    <div className="space-y-4">
                        <div className="stat-card bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-700">Market Share by Order Volume</h4>
                            <p className="text-4xl font-bold text-blue-500 mt-1">37%</p>
                            <p className="text-gray-500 text-sm mt-1">A testament to massive user acquisition and a high frequency of small purchases.</p>
                        </div>
                        <div className="stat-card bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-700">Market Share by GMV</h4>
                            <p className="text-4xl font-bold text-red-500 mt-1">8.5%</p>
                            <p className="text-gray-500 text-sm mt-1">Reveals the underlying issue of low-value transactions despite high volume.</p>
                        </div>
                        <div className="stat-card bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-700">Average Order Value (AOV)</h4>
                            <p className="text-4xl font-bold text-green-500 mt-1">~₹350</p>
                            <p className="text-gray-500 text-sm mt-1">The core metric that needs strategic enhancement for profitability.</p>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                        <h4 className="text-center text-xl font-semibold mb-4">Volume vs. Value Discrepancy</h4>
                        <div className="chart-container">
                             {isScriptLoaded ? <BarChart chartId="marketShareChart" data={barChartData} options={barChartOptions} /> : <p>Loading chart...</p>}
                        </div>
                        <p className="text-center mt-4 text-gray-600">This chart illustrates the core strategic challenge: converting market-leading volume into market-leading value.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenge;
