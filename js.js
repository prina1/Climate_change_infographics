document.addEventListener("DOMContentLoaded", function () {
    // Dummy temperature data (replace with actual API data)
    const years = [2000, 2005, 2010, 2015, 2020];
    const temperatures = [0.8, 1.2, 1.6, 2.0, 2.4];
  
    const ctx = document.getElementById("temperatureChart").getContext("2d");
    const temperatureChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: years,
        datasets: [{
          label: "Global Temperature Rise",
          data: temperatures,
          borderColor: "rgba(75, 192, 192, 1)",
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: "Temperature Rise (°C)"
            }
          },
          x: {
            title: {
              display: true,
              text: "Year"
            }
          }
        }
      }
    });
  });
  