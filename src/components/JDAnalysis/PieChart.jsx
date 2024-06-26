import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const data = {
        labels: ["Eye Contact", "Stuttering", "Body Language"],
        datasets: [
          {
            data: [12, 12, 12],
            backgroundColor: ["#8950FC", "#00AB9A", "#FFA800"],
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: "Custom Pie Chart",
          },
          legend: {
            position: "bottom", // Position legend at the bottom
            boxWidth: 80, // Width of each legend box
            align: "center", // Align legend items at the center
            labels: {
              boxWidth: 15, // Width of each legend item
              boxHeight: 15, // Height of each legend item
              padding: 5, // Padding between legend items
            },
          },
        },
      };

      new Chart(chartContainer.current, {
        type: "pie",
        data: data,
        options: options,
      });
    }
  }, []);

  return (
    <div className="w-full h-full">
      <canvas ref={chartContainer} />
    </div>
  );
};

export default PieChart;
