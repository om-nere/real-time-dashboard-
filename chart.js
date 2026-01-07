let cpuChart;

export function drawCPUChart(cpu) {
  const ctx = document.getElementById("cpuChart");

  if (cpuChart) cpuChart.destroy();

  cpuChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Now"],
      datasets: [{
        label: "CPU Usage %",
        data: [cpu]
      }]
    }
  });
}
