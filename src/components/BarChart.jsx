import React, { useEffect, useRef } from 'react';

// This component will only be rendered when Chart.js is confirmed to be loaded.
const BarChart = ({ chartId, data, options }) => {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        // Ensure the canvas context and Chart.js library are available before creating the chart
        if (canvasRef.current && typeof window.Chart !== 'undefined') {
            // Destroy the previous chart instance if it exists to prevent memory leaks
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            const ctx = canvasRef.current.getContext('2d');
            
            // Create the new chart instance
            chartRef.current = new window.Chart(ctx, {
                type: 'bar',
                data: data,
                options: options,
            });
        }

        // Cleanup function to destroy chart instance on component unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data, options]); // Re-run effect if data or options change

    return <canvas ref={canvasRef} id={chartId}></canvas>;
};

export default BarChart;

/* import React, { useEffect, useRef } from 'react';

// This component will only be rendered when Chart.js is confirmed to be loaded.
const BarChart = ({ chartId, data, options }) => {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        // Destroy the previous chart instance if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = canvasRef.current.getContext('2d');
        
        // window.Chart will exist by the time this component renders.
        chartRef.current = new window.Chart(ctx, {
            type: 'bar',
            data: data,
            options: options,
        });

        // Cleanup function to destroy chart instance on component unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data, options]); // Re-run effect if data or options change

    return <canvas ref={canvasRef} id={chartId}></canvas>;
};

export default BarChart;
*/