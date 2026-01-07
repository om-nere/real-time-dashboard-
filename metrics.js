export function getMetrics() {
  return {
    cpu: Math.floor(Math.random() * 80) + 10,
    memory: Math.floor(Math.random() * 70) + 20,
    network: Math.floor(Math.random() * 100),
    service: Math.random() > 0.1 ? "RUNNING" : "DOWN"
  };
}
