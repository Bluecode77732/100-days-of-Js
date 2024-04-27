const wheel = document.getElementById("wheel"), 
    spinBtn = document.getElementById("spin-btn"),
    finalValue = document.getElementById("final-value");

// Values of min and max angle for a value
const rotationValues = [
    { minDegree: 0, maxDegree: 30, value: 2 },
    { minDegree: 31, maxDegree: 90, value: 1 },
    { minDegree: 91 , maxDegree: 150, value: 6 },
    { minDegree: 151, maxDegree: 210, value: 5  },
    { minDegree: 211, maxDegree: 270, value: 4  },
    { minDegree: 271, maxDegree: 330, value: 3 },
    { minDegree: 331, maxDegree: 390, value: 2 },
];

// Size of pieces
const data = [16, 16, 16, 16, 16, 16];

// Background color of pieces
const pieColors = [
    "#1565c0",
    "#2196f3",
    "#1565c0",
    "#1565c0",
    "#2196f3",
    "#1565c0"
];

// Using pie chart for the wheel
let myChart = new Chart(wheel, {
    // Display text on pie chart
    plugins: [ChartDataLabels],
    type: "pie",
    data: {
        // Values on chart
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [
            {
                backgroundColor : pieColors,
                data : data,
            },
        ],
    },
    options: {
        // Responsive chart design
        responsive: true,
        animation: { duration : 0},
        plugins: {
            tooltip: false,
            legend: {
                display: false,
            },
            // Show labels inside of pie chart
            datalabels: {
                color: "#ffffff",
                formatter: (_, context) => context.Chart.data.labels[context.dataIndex],
                font: { size: 24 }
            },
        },
    },
});

// Display value based on randomAngle

const valueGenerator = (angleValue) => {
    for (const i of rotationValues) {
        if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
            finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
            spinBtn.disabled = false;
            break;
        }
    }
};

// Spinner Count 
let count = 0; 
// 100 rotation for animation and last rotation for result
let resultValue = 101;
spinBtn.addEventListener("click", () => {
    spinBtn.disabled = true;
    finalValue.innerHTML = `<p>Good Luck!</p>`;
    
});
