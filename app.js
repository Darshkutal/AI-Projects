// Chart.js default config
Chart.defaults.color = '#8b92a0';
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.06)';
Chart.defaults.font.family = "'DM Sans', sans-serif";

// Revenue line chart
const revenueCtx = document.getElementById('revenueChart');
if (revenueCtx) {
  new Chart(revenueCtx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Revenue',
          data: [3200, 4100, 3800, 5200, 4800, 6100, 7200],
          borderColor: '#00d4aa',
          backgroundColor: 'rgba(0, 212, 170, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: '#00d4aa',
        },
        {
          label: 'Expenses',
          data: [2200, 2900, 2600, 3400, 3100, 3800, 4200],
          borderColor: '#6c5ce7',
          backgroundColor: 'rgba(108, 92, 231, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: '#6c5ce7',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
            padding: 20,
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.04)',
          },
          beginAtZero: true,
        },
      },
      interaction: {
        intersect: false,
        mode: 'index',
      },
    },
  });
}

// Traffic sources doughnut chart
const trafficCtx = document.getElementById('trafficChart');
if (trafficCtx) {
  new Chart(trafficCtx, {
    type: 'doughnut',
    data: {
      labels: ['Direct', 'Organic', 'Referral', 'Social', 'Email'],
      datasets: [
        {
          data: [35, 28, 20, 12, 5],
          backgroundColor: [
            '#00d4aa',
            '#6c5ce7',
            '#fd79a8',
            '#fdcb6e',
            '#74b9ff',
          ],
          borderColor: '#1a1f2a',
          borderWidth: 3,
          hoverOffset: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            usePointStyle: true,
            padding: 16,
          },
        },
      },
    },
  });
}

// Mini chart sparklines for stat cards
function initMiniCharts() {
  document.querySelectorAll('.mini-chart').forEach((el) => {
    const values = el.dataset.values?.split(',').map(Number) || [];
    if (values.length === 0) return;

    const canvas = document.createElement('canvas');
    const rect = el.getBoundingClientRect();
    canvas.width = Math.max(rect.width || 200, 100);
    canvas.height = 40;
    el.innerHTML = '';
    el.style.position = 'relative';
    el.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const max = Math.max(...values);
    const padding = 4;

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const step = (w - padding * 2) / Math.max(values.length - 1, 1);

      ctx.clearRect(0, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(padding, h - padding - (values[0] / max) * (h - padding * 2));

      for (let i = 1; i < values.length; i++) {
        const x = padding + i * step;
        const y = h - padding - (values[i] / max) * (h - padding * 2);
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = '#00d4aa';
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.stroke();

      ctx.lineTo(padding + (values.length - 1) * step, h - padding);
      ctx.lineTo(padding, h - padding);
      ctx.closePath();
      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, 'rgba(0, 212, 170, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 212, 170, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    draw();
  });
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initMiniCharts, 150));
} else {
  setTimeout(initMiniCharts, 150);
}

// Nav item active state
document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-item').forEach((i) => i.classList.remove('active'));
    item.classList.add('active');
  });
});
