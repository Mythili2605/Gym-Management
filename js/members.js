// ============================================
//   FITZONE - MEMBERS JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  setDate();
  populateTrainerDropdown();
  renderTable();
});

function setDate() {
  const el = document.getElementById('currentDate');
  if (el) el.textContent = new Date().toLocaleDateString('en-IN', { weekday:'short', day:'numeric', month:'short', year:'numeric' });
}

function populateTrainerDropdown() {
  const sel = document.getElementById('mTrainer');
  if (!sel) return;
  getTrainers().forEach(t => {
    const o = document.createElement('option');
    o.value = t.name;
    o.textContent = t.name + ' – ' + t.specialty;
    sel.appendChild(o);
  });
}

function renderTable() {
  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const plan   = document.getElementById('planFilter')?.value || '';
  const status = document.getElementById('statusFilter')?.value || '';
  const tbody  = document.getElementById('membersBody');
  const noRes  = document.getElementById('noResults');

  let members = getMembers();

  if (search) members = members.filter(m => m.name.toLowerCase().includes(search) || m.email.toLowerCase().includes(search));
  if (plan)   members = members.filter(m => m.plan === plan);
  if (status) members = members.filter(m => m.status === status);

  if (!members.length) {
    tbody.innerHTML = '';
    noRes.style.display = 'block';
    return;
  }
  noRes.style.display = 'none';

  tbody.innerHTML = members.map((m, i) => `
    <tr>
      <td style="color:var(--text3)">${i + 1}</td>
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:32px;height:32px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:white;flex-shrink:0">
            ${m.name.split(' ').map(w => w[0]).join('').substring(0,2)}
          </div>
          <div>
            <div style="color:var(--text);font-weight:500">${m.name}</div>
            <div style="font-size:11px;color:var(--text3)">${m.email}</div>
          </div>
        </div>
      </td>
      <td>${m.phone}</td>
      <td>${planBadge(m.plan)}</td>
      <td>${m.trainer || '–'}</td>
      <td>${m.joined}</td>
      <td>${m.expires}</td>
      <td>${statusBadge(m.status)}</td>
      <td>
        <div style="display:flex;gap:6px">
          <button class="btn btn-sm btn-outline" onclick="editMember(${m.id})">✏ Edit</button>
          <button class="btn btn-sm" style="background:var(--coral)20;color:var(--coral);border:none;padding:5px 10px;border-radius:6px;cursor:pointer;font-size:12px" onclick="deleteMember(${m.id})">🗑</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openAddModal() {
  document.getElementById('modalTitle').textContent = 'Add Member';
  document.getElementById('memberId').value = '';
  document.getElementById('mName').value    = '';
  document.getElementById('mEmail').value   = '';
  document.getElementById('mPhone').value   = '';
  document.getElementById('mPlan').value    = 'Basic';
  document.getElementById('mStatus').value  = 'Active';
  document.getElementById('mJoined').value  = new Date().toISOString().split('T')[0];
  document.getElementById('mExpires').value = '';
  document.getElementById('mTrainer').value = '';
  document.getElementById('memberModal').classList.add('active');
}

function editMember(id) {
  const m = getMembers().find(x => x.id === id);
  if (!m) return;
  document.getElementById('modalTitle').textContent = 'Edit Member';
  document.getElementById('memberId').value = m.id;
  document.getElementById('mName').value    = m.name;
  document.getElementById('mEmail').value   = m.email;
  document.getElementById('mPhone').value   = m.phone;
  document.getElementById('mPlan').value    = m.plan;
  document.getElementById('mStatus').value  = m.status;
  document.getElementById('mJoined').value  = m.joined;
  document.getElementById('mExpires').value = m.expires;
  document.getElementById('mTrainer').value = m.trainer || '';
  document.getElementById('memberModal').classList.add('active');
}

function saveMember() {
  const name    = document.getElementById('mName').value.trim();
  const phone   = document.getElementById('mPhone').value.trim();
  const email   = document.getElementById('mEmail').value.trim();
  const plan    = document.getElementById('mPlan').value;
  const status  = document.getElementById('mStatus').value;
  const joined  = document.getElementById('mJoined').value;
  const expires = document.getElementById('mExpires').value;
  const trainer = document.getElementById('mTrainer').value;

  if (!name || !phone) { alert('Name and Phone are required!'); return; }

  const members = getMembers();
  const id      = document.getElementById('memberId').value;
  const fees    = { Basic: 1200, Premium: 2500, Elite: 4000 };

  if (id) {
    const idx = members.findIndex(m => m.id == id);
    if (idx > -1) {
      members[idx] = { ...members[idx], name, phone, email, plan, status, joined, expires, trainer, fee: fees[plan] || 1200 };
    }
  } else {
    members.push({ id: nextId(members), name, phone, email, plan, status, joined, expires, trainer, fee: fees[plan] || 1200, photo: '' });
  }

  saveMembers(members);
  closeModal();
  renderTable();
}

function deleteMember(id) {
  if (!confirm('Delete this member?')) return;
  saveMembers(getMembers().filter(m => m.id !== id));
  renderTable();
}

function closeModal() {
  document.getElementById('memberModal').classList.remove('active');
}
