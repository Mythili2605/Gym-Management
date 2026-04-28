// ============================================
//   FITZONE GYM - SHARED DATA STORE
//   This file holds all sample data and
//   helper functions used across all pages.
// ============================================

// --- MEMBERS DATA ---
const defaultMembers = [
  { id: 1, name: "Arjun Sharma",    email: "arjun@email.com",  phone: "9876543210", plan: "Premium", status: "Active",  joined: "2024-01-15", expires: "2025-01-15", trainer: "Raj Kumar",   fee: 2500, photo: "" },
  { id: 2, name: "Priya Nair",      email: "priya@email.com",  phone: "9876543211", plan: "Basic",   status: "Active",  joined: "2024-03-01", expires: "2025-04-20", trainer: "Sunita Verma", fee: 1200, photo: "" },
  { id: 3, name: "Rahul Mehta",     email: "rahul@email.com",  phone: "9876543212", plan: "Elite",   status: "Active",  joined: "2023-11-10", expires: "2025-04-25", trainer: "Raj Kumar",   fee: 4000, photo: "" },
  { id: 4, name: "Sneha Pillai",    email: "sneha@email.com",  phone: "9876543213", plan: "Basic",   status: "Expired", joined: "2024-02-20", expires: "2025-03-20", trainer: "Amit Singh",  fee: 1200, photo: "" },
  { id: 5, name: "Vikram Reddy",    email: "vikram@email.com", phone: "9876543214", plan: "Premium", status: "Active",  joined: "2024-04-05", expires: "2025-04-30", trainer: "Sunita Verma", fee: 2500, photo: "" },
  { id: 6, name: "Meera Iyer",      email: "meera@email.com",  phone: "9876543215", plan: "Elite",   status: "Active",  joined: "2024-01-01", expires: "2025-05-01", trainer: "Raj Kumar",   fee: 4000, photo: "" },
  { id: 7, name: "Suresh Kumar",    email: "suresh@email.com", phone: "9876543216", plan: "Basic",   status: "Active",  joined: "2024-05-10", expires: "2025-05-10", trainer: "Amit Singh",  fee: 1200, photo: "" },
  { id: 8, name: "Anjali Desai",    email: "anjali@email.com", phone: "9876543217", plan: "Premium", status: "Pending", joined: "2025-04-10", expires: "2026-04-10", trainer: "Sunita Verma", fee: 2500, photo: "" },
  { id: 9, name: "Karan Bose",      email: "karan@email.com",  phone: "9876543218", plan: "Basic",   status: "Active",  joined: "2024-06-15", expires: "2025-04-28", trainer: "Raj Kumar",   fee: 1200, photo: "" },
  { id: 10, name: "Divya Rao",      email: "divya@email.com",  phone: "9876543219", plan: "Elite",   status: "Active",  joined: "2024-02-14", expires: "2025-04-22", trainer: "Amit Singh",  fee: 4000, photo: "" },
];

// --- TRAINERS DATA ---
const defaultTrainers = [
  { id: 1, name: "Raj Kumar",     email: "raj@fitzone.com",    phone: "9900001111", specialty: "Strength Training", experience: "8 years",  salary: 35000, status: "Active",  members: 32 },
  { id: 2, name: "Sunita Verma",  email: "sunita@fitzone.com", phone: "9900002222", specialty: "Yoga & Flexibility", experience: "5 years", salary: 28000, status: "Active",  members: 25 },
  { id: 3, name: "Amit Singh",    email: "amit@fitzone.com",   phone: "9900003333", specialty: "Cardio & HIIT",     experience: "6 years",  salary: 30000, status: "Active",  members: 28 },
  { id: 4, name: "Pooja Tiwari",  email: "pooja@fitzone.com",  phone: "9900004444", specialty: "Zumba & Dance",     experience: "4 years",  salary: 25000, status: "Active",  members: 20 },
  { id: 5, name: "Dev Kapoor",    email: "dev@fitzone.com",    phone: "9900005555", specialty: "Bodybuilding",      experience: "10 years", salary: 40000, status: "Active",  members: 35 },
  { id: 6, name: "Neha Gupta",    email: "neha@fitzone.com",   phone: "9900006666", specialty: "Pilates",           experience: "3 years",  salary: 22000, status: "Active",  members: 18 },
  { id: 7, name: "Ravi Shankar",  email: "ravi@fitzone.com",   phone: "9900007777", specialty: "CrossFit",          experience: "7 years",  salary: 32000, status: "Active",  members: 30 },
  { id: 8, name: "Kavitha Nair",  email: "kavitha@fitzone.com",phone: "9900008888", specialty: "Functional Fitness",experience: "5 years",  salary: 27000, status: "On Leave",members: 22 },
];

// --- CLASSES DATA ---
const defaultClasses = [
  { id: 1, name: "Morning Yoga",       trainer: "Sunita Verma", time: "06:00 AM", duration: 60,  days: "Mon,Wed,Fri", capacity: 20, enrolled: 18, category: "Yoga" },
  { id: 2, name: "HIIT Blast",         trainer: "Amit Singh",   time: "07:00 AM", duration: 45,  days: "Tue,Thu,Sat", capacity: 15, enrolled: 14, category: "Cardio" },
  { id: 3, name: "Strength Basics",    trainer: "Raj Kumar",    time: "08:00 AM", duration: 60,  days: "Mon-Fri",     capacity: 12, enrolled: 10, category: "Strength" },
  { id: 4, name: "Zumba Fever",        trainer: "Pooja Tiwari", time: "10:00 AM", duration: 50,  days: "Mon,Wed,Fri", capacity: 25, enrolled: 22, category: "Dance" },
  { id: 5, name: "Body Sculpt",        trainer: "Dev Kapoor",   time: "05:00 PM", duration: 60,  days: "Mon-Fri",     capacity: 15, enrolled: 13, category: "Strength" },
  { id: 6, name: "Evening CrossFit",   trainer: "Ravi Shankar", time: "06:00 PM", duration: 60,  days: "Tue,Thu,Sat", capacity: 18, enrolled: 16, category: "CrossFit" },
  { id: 7, name: "Power Pilates",      trainer: "Neha Gupta",   time: "09:00 AM", duration: 55,  days: "Mon,Wed,Fri", capacity: 12, enrolled: 9,  category: "Pilates" },
  { id: 8, name: "Functional Fitness", trainer: "Kavitha Nair", time: "07:00 PM", duration: 60,  days: "Mon,Wed,Fri", capacity: 15, enrolled: 12, category: "Functional" },
];

// --- PAYMENTS DATA ---
const defaultPayments = [
  { id: 1,  member: "Arjun Sharma",  amount: 2500, plan: "Premium", date: "2025-04-01", method: "UPI",         status: "Paid" },
  { id: 2,  member: "Priya Nair",    amount: 1200, plan: "Basic",   date: "2025-04-02", method: "Cash",        status: "Paid" },
  { id: 3,  member: "Rahul Mehta",   amount: 4000, plan: "Elite",   date: "2025-04-03", method: "Card",        status: "Paid" },
  { id: 4,  member: "Sneha Pillai",  amount: 1200, plan: "Basic",   date: "2025-04-05", method: "UPI",         status: "Pending" },
  { id: 5,  member: "Vikram Reddy",  amount: 2500, plan: "Premium", date: "2025-04-07", method: "Net Banking", status: "Paid" },
  { id: 6,  member: "Meera Iyer",    amount: 4000, plan: "Elite",   date: "2025-04-08", method: "Card",        status: "Paid" },
  { id: 7,  member: "Suresh Kumar",  amount: 1200, plan: "Basic",   date: "2025-04-10", method: "Cash",        status: "Paid" },
  { id: 8,  member: "Anjali Desai",  amount: 2500, plan: "Premium", date: "2025-04-10", method: "UPI",         status: "Pending" },
  { id: 9,  member: "Karan Bose",    amount: 1200, plan: "Basic",   date: "2025-04-11", method: "UPI",         status: "Paid" },
  { id: 10, member: "Divya Rao",     amount: 4000, plan: "Elite",   date: "2025-04-12", method: "Card",        status: "Paid" },
];

// --- ATTENDANCE DATA ---
const defaultAttendance = [
  { id: 1, member: "Arjun Sharma", date: "2025-04-15", checkIn: "07:15 AM", checkOut: "09:00 AM", class: "Strength Basics" },
  { id: 2, member: "Priya Nair",   date: "2025-04-15", checkIn: "06:05 AM", checkOut: "07:05 AM", class: "Morning Yoga" },
  { id: 3, member: "Rahul Mehta",  date: "2025-04-15", checkIn: "07:10 AM", checkOut: "07:55 AM", class: "HIIT Blast" },
  { id: 4, member: "Vikram Reddy", date: "2025-04-15", checkIn: "10:05 AM", checkOut: "10:55 AM", class: "Zumba Fever" },
  { id: 5, member: "Meera Iyer",   date: "2025-04-15", checkIn: "06:00 AM", checkOut: "07:00 AM", class: "Morning Yoga" },
  { id: 6, member: "Suresh Kumar", date: "2025-04-15", checkIn: "08:00 AM", checkOut: "09:00 AM", class: "Strength Basics" },
  { id: 7, member: "Karan Bose",   date: "2025-04-15", checkIn: "07:05 AM", checkOut: "07:50 AM", class: "HIIT Blast" },
  { id: 8, member: "Divya Rao",    date: "2025-04-15", checkIn: "10:00 AM", checkOut: "11:00 AM", class: "Zumba Fever" },
];

// --- EQUIPMENT DATA ---
const defaultEquipment = [
  { id: 1,  name: "Treadmill",       brand: "LifeFitness", qty: 8,  status: "Good",         lastService: "2025-02-01" },
  { id: 2,  name: "Dumbbell Set",    brand: "Bowflex",     qty: 10, status: "Good",         lastService: "2025-01-15" },
  { id: 3,  name: "Bench Press",     brand: "Bodycraft",   qty: 4,  status: "Needs Repair", lastService: "2024-12-01" },
  { id: 4,  name: "Lat Pulldown",    brand: "LifeFitness", qty: 3,  status: "Good",         lastService: "2025-03-01" },
  { id: 5,  name: "Rowing Machine",  brand: "Concept2",    qty: 4,  status: "Good",         lastService: "2025-02-15" },
  { id: 6,  name: "Elliptical",      brand: "Precor",      qty: 5,  status: "Good",         lastService: "2025-03-10" },
  { id: 7,  name: "Squat Rack",      brand: "Bodycraft",   qty: 3,  status: "Good",         lastService: "2025-01-20" },
  { id: 8,  name: "Spin Bike",       brand: "Peloton",     qty: 12, status: "Needs Repair", lastService: "2024-11-01" },
  { id: 9,  name: "Leg Press",       brand: "LifeFitness", qty: 2,  status: "Good",         lastService: "2025-03-20" },
  { id: 10, name: "Cable Machine",   brand: "Bodycraft",   qty: 4,  status: "Good",         lastService: "2025-02-28" },
];

// ============================================
//  DATA ACCESS HELPERS
// ============================================

function getData(key, defaults) {
  try {
    const saved = localStorage.getItem('fitzone_' + key);
    return saved ? JSON.parse(saved) : defaults;
  } catch(e) { return defaults; }
}

function saveData(key, data) {
  try { localStorage.setItem('fitzone_' + key, JSON.stringify(data)); }
  catch(e) { console.warn('Save failed', e); }
}

// Getters
function getMembers()    { return getData('members',    defaultMembers); }
function getTrainers()   { return getData('trainers',   defaultTrainers); }
function getClasses()    { return getData('classes',    defaultClasses); }
function getPayments()   { return getData('payments',   defaultPayments); }
function getAttendance() { return getData('attendance', defaultAttendance); }
function getEquipment()  { return getData('equipment',  defaultEquipment); }

// Savers
function saveMembers(d)    { saveData('members',    d); }
function saveTrainers(d)   { saveData('trainers',   d); }
function saveClasses(d)    { saveData('classes',    d); }
function savePayments(d)   { saveData('payments',   d); }
function saveAttendance(d) { saveData('attendance', d); }
function saveEquipment(d)  { saveData('equipment',  d); }

// Utils
function nextId(arr) { return arr.length ? Math.max(...arr.map(x => x.id)) + 1 : 1; }

function planBadge(plan) {
  const map = { Basic: 'basic', Premium: 'premium', Elite: 'elite' };
  return `<span class="badge badge-${map[plan] || 'basic'}">${plan}</span>`;
}

function statusBadge(status) {
  const map = { Active: 'active', Expired: 'expired', Pending: 'pending' };
  return `<span class="badge badge-${map[status] || 'pending'}">${status}</span>`;
}

// Sidebar toggle
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}
