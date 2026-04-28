// ============================================
//   FITZONE - DASHBOARD JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  updateDateDisplay();
  loadStats();
  loadRecentMembers();
  renderAttendanceChart('week');
  renderRevenueChart();
  loadTodayClasses();
  loadExpiringMemberships();
});

// --- CURRENT DATE ---
function updateDateDisplay() {
  const el = document.getElementById('currentDate');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleDateString('en-IN', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  });
}

// --- STATS ---
function loadStats() {
  const members  = getMembers();
  const active   = members.filter(m => m.status === 'Active').length;
  const payments = getPayments();
  const revenue  = payments
    .filter(p => p.status === 'Paid')
    .reduce((s, p) => s + p.amount, 0);
  const trainers  = getTrainers();
  const classes   = getClasses();
  const attend    = getAttendance();

  document.getElementById('totalMembers').textContent    = members.length;
  document.getElementById('activeMembers').textContent   = active;
  document.getElementById('monthlyRevenue').textContent  = '₹' + revenue.toLocaleString('en-IN');
  document.getElementById('classesToday').textContent    = classes.length;
  document.getElementById('totalTrainers').textContent   = trainers.length;
  document.getElementById('todayAttendance').textContent = attend.length;
}

// --- RECENT MEMBERS TABLE ---
function loadRecentMembers() {
  const tbody = document.getElementById('recentMembersTable');
  if (!tbody) return;
  const members = getMembers().slice(-6).reverse();

  tbody.innerHTML = members.map(m => `
    <tr>
      <td><strong style="color:var(--text)">${m.name}</strong></td>
      <td>${planBadge(m.plan)}</td>
      <td>${statusBadge(m.status)}</td>
    </tr>
  `).join('');
}

// --- ATTENDANCE CHART ---
const weekData  = [45, 62, 58, 71, 80, 67, 55];
const weekLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const monthData = [38, 55, 60, 52, 70, 64, 75, 68, 72, 80, 77, 65, 70, 85, 90, 78, 82, 74, 69, 88, 76, 71, 83, 79, 91, 86, 73, 77, 80, 67];

function renderAttendanceChart(type) {
  const el = document.getElementById('attendanceChart');
  if (!el) return;
  const data   = type === 'week' ? weekData  : monthData.slice(0, 14);
  const labels = type === 'week' ? weekLabels : monthData.slice(0, 14).map((_, i) => (i + 1) + '');
  const max = Math.max(...data);

  el.innerHTML = data.map((val, i) => {
    const h = Math.round((val / max) * 170);
    return `
      <div class="bar-group">
        <div class="bar" style="height:${h}px; background:var(--accent); opacity:${i === data.length - 2 ? 1 : 0.55};" title="${labels[i]}: ${val} check-ins">
          <span class="bar-value">${val}</span>
        </div>
        <span class="bar-label">${labels[i]}</span>
      </div>
    `;
  }).join('');
}

function updateChart(val) { renderAttendanceChart(val); }

// --- REVENUE CHART ---
function renderRevenueChart() {
  const el = document.getElementById('revenueChart');
  if (!el) return;
  const months   = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  const revenues = [98000, 112000, 105000, 118000, 121000, 124500];
  const max = Math.max(...revenues);

  el.innerHTML = months.map((label, i) => {
    const h = Math.round((revenues[i] / max) * 170);
    return `
      <div class="bar-group">
        <div class="bar" style="height:${h}px; background:var(--green); opacity:${i === months.length - 1 ? 1 : 0.55};" title="${label}: ₹${revenues[i].toLocaleString('en-IN')}">
          <span class="bar-value">₹${Math.round(revenues[i] / 1000)}k</span>
        </div>
        <span class="bar-label">${label}</span>
      </div>
    `;
  }).join('');
}

// --- TODAY'S CLASSES ---
function loadTodayClasses() {
  const el = document.getElementById('todayClassList');
  if (!el) return;

  const schedule = [
    { time: "06:00 AM", name: "Morning Yoga",     trainer: "Sunita Verma", enrolled: 18, status: "done" },
    { time: "07:00 AM", name: "HIIT Blast",        trainer: "Amit Singh",   enrolled: 14, status: "done" },
    { time: "08:00 AM", name: "Strength Basics",   trainer: "Raj Kumar",    enrolled: 10, status: "ongoing" },
    { time: "09:00 AM", name: "Power Pilates",     trainer: "Neha Gupta",   enrolled: 9,  status: "ongoing" },
    { time: "10:00 AM", name: "Zumba Fever",       trainer: "Pooja Tiwari", enrolled: 22, status: "upcoming" },
    { time: "05:00 PM", name: "Body Sculpt",       trainer: "Dev Kapoor",   enrolled: 13, status: "upcoming" },
    { time: "06:00 PM", name: "Evening CrossFit",  trainer: "Ravi Shankar", enrolled: 16, status: "upcoming" },
    { time: "07:00 PM", name: "Functional Fitness",trainer: "Kavitha Nair", enrolled: 12, status: "upcoming" },
  ];

  el.innerHTML = schedule.map(c => `
    <div class="class-item">
      <span class="class-time">${c.time}</span>
      <div class="class-dot ${c.status}"></div>
      <div>
        <div class="class-name">${c.name}</div>
        <div class="class-trainer">${c.trainer}</div>
      </div>
      <span class="class-count">${c.enrolled} enrolled</span>
    </div>
  `).join('');
}

// --- EXPIRING MEMBERSHIPS ---
function loadExpiringMemberships() {
  const tbody = document.getElementById('expiringTable');
  if (!tbody) return;
  const members = getMembers();
  const today = new Date();

  const expiring = members.filter(m => {
    const exp = new Date(m.expires);
    const diff = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
    return diff >= 0 && diff <= 15;
  });

  if (!expiring.length) {
    tbody.innerHTML = `<tr><td colspan="4" style="color:var(--text3);text-align:center;padding:20px">No memberships expiring soon</td></tr>`;
    return;
  }

  tbody.innerHTML = expiring.map(m => {
    const exp   = new Date(m.expires);
    const diff  = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
    const urgency = diff <= 3 ? 'color:var(--coral)' : 'color:var(--amber)';
    return `
      <tr>
        <td><strong style="color:var(--text)">${m.name}</strong></td>
        <td>${planBadge(m.plan)}</td>
        <td style="${urgency}; font-weight:500">${diff === 0 ? 'Today!' : `In ${diff} days`}</td>
        <td>
          <button class="btn btn-sm btn-primary" onclick="alert('Renewal email sent to ${m.name}!')">
            Renew
          </button>
        </td>
      </tr>
    `;
  }).join('');
}
