import { getMetrics } from "./metrics.js";
import { drawCPUChart } from "./charts.js";

setInterval(() => {
  const data = getMetrics();

  document.getElementById("cpu").innerText = data.cpu + "%";
  document.getElementById("memory").innerText = data.memory + "%";
  document.getElementById("network").innerText = data.network + " Mbps";
  document.getElementById("service").innerText = data.service;

  if (data.cpu > 75) {
    document.getElementById("alert").innerText = "⚠️ High CPU Usage!";
  } else {
    document.getElementById("alert").innerText = "System Stable ✅";
  }

  drawCPUChart(data.cpu);
}, 3000);
