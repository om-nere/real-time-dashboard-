let students = 120;
let attendance = 75;

setInterval(() => {
  students += Math.floor(Math.random() * 3);
  attendance = Math.floor(Math.random() * 100);

  document.getElementById("students").innerText = students;
  document.getElementById("attendance").innerText = attendance + "%";
}, 3000);

// Chart
const ctx = document.getElementById('resultChart');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Pass', 'Fail'],
    datasets: [{
      data: [80, 20],
      backgroundColor: ['green', 'red']
    }]
  }
});
