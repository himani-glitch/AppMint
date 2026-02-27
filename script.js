/* =========================================
   APPMINT — script.js
   ========================================= */

/* ----- PROJECT DATA ----- */
const projects = {
  'qr-landing': {
    title: 'QR-Based Precision Drone Landing',
    category: 'DRONE SYSTEMS',
    year: '2025',
    bgClass: 'qr-bg',
    tags: [
      { label: 'PX4', cls: 'cyan' },
      { label: 'ArduPilot', cls: 'pink' },
      { label: 'OpenCV', cls: 'green' },
      { label: 'MAVLink', cls: 'purple' },
      { label: 'Python', cls: 'yellow' },
    ],
    description:
      'High-accuracy QR marker detection and autonomous landing system integrated with PX4/ArduPilot for precise outdoor drone landings in GPS-denied or high-accuracy environments.',
    problem:
      'Existing GPS-based landing systems had accuracy limitations of 1–3 meters, causing failed deliveries, damaged equipment, and inability to land on moving or confined platforms.',
    solution:
      'Developed a computer vision pipeline using OpenCV for real-time QR marker detection, integrated with PX4 precision landing API and MAVLink for closed-loop position correction.',
    result:
      'Achieved sub-20cm landing accuracy in outdoor conditions. Successfully deployed in warehouse and logistics environments with 98.6% successful autonomous landing rate.',
    githubUrl: '#',
  },
  swarm: {
    title: 'Autonomous Drone Swarm Platform',
    category: 'SWARM AI',
    year: '2025',
    bgClass: 'swarm-bg',
    tags: [
      { label: 'MAVLink', cls: 'cyan' },
      { label: 'ROS2', cls: 'pink' },
      { label: 'Python', cls: 'green' },
      { label: 'DroneKit', cls: 'purple' },
    ],
    description:
      'Multi-drone formation control system supporting synchronized takeoff, landing, and real-time mission coordination for up to 20 drones operating simultaneously.',
    problem:
      'No existing open-source framework provided reliable, low-latency swarm coordination with collision avoidance and real-time mission replanning for ArduPilot-based fleets.',
    solution:
      'Built a centralized swarm coordinator using ROS2 and MAVLink with UDP multicast communication, dynamic role assignment, and conflict-free trajectory planning.',
    result:
      'Successfully coordinated 12-drone formations with under 80ms command latency. Demonstrated at industry events with zero collision incidents across 300+ flight hours.',
    githubUrl: '#',
  },
  yolo: {
    title: 'AI Real-Time Object Detection System',
    category: 'AI VISION',
    year: '2025',
    bgClass: 'yolo-bg',
    tags: [
      { label: 'YOLO', cls: 'cyan' },
      { label: 'NVIDIA Jetson', cls: 'pink' },
      { label: 'RTSP', cls: 'green' },
      { label: 'TensorRT', cls: 'purple' },
    ],
    description:
      'YOLO-powered real-time object detection system optimized for NVIDIA Jetson hardware, with RTSP stream support for surveillance, drone-mounted vision, and perimeter security.',
    problem:
      'Standard YOLO inference on edge hardware ran at under 10 FPS, making real-time detection unreliable for fast-moving drone-mounted cameras in surveillance scenarios.',
    solution:
      'Implemented TensorRT quantization and custom CUDA post-processing pipelines, reducing model inference time by 4x while maintaining detection accuracy above 91% mAP.',
    result:
      'Achieved 35+ FPS real-time detection on Jetson Orin. Deployed in 3 enterprise surveillance systems monitoring over 40 simultaneous RTSP streams.',
    githubUrl: '#',
  },
  gcs: {
    title: 'Custom Ground Control Station',
    category: 'GCS SOFTWARE',
    year: '2024',
    bgClass: 'gcs-bg',
    tags: [
      { label: 'MAVLink', cls: 'cyan' },
      { label: 'React', cls: 'pink' },
      { label: 'WebSockets', cls: 'green' },
      { label: 'Node.js', cls: 'purple' },
    ],
    description:
      'Enterprise-grade Ground Control Station application with real-time telemetry, mission planning, live video streaming, role-based access control, and multi-drone management.',
    problem:
      'QGroundControl and Mission Planner lacked customizability for enterprise clients requiring Branded UI, role-based operator controls, and integration with proprietary backend systems.',
    solution:
      'Developed a full-stack GCS web application with a React frontend, Node.js MAVLink bridge, live RTSP-to-WebRTC video relay, and a scalable REST API for mission management.',
    result:
      'Deployed for 2 enterprise UAV operators managing fleets of 15+ drones. Reduced mission setup time by 65% and improved situational awareness with real-time multi-feed video.',
    githubUrl: '#',
  },
  firmware: {
    title: 'Drone Firmware Security & Protection',
    category: 'FIRMWARE SECURITY',
    year: '2025',
    bgClass: 'firmware-bg',
    tags: [
      { label: 'C++', cls: 'cyan' },
      { label: 'PX4', cls: 'pink' },
      { label: 'Encryption', cls: 'green' },
      { label: 'Secure Boot', cls: 'purple' },
    ],
    description:
      'Comprehensive firmware security architecture for UAV companies including secure boot, firmware integrity validation, encrypted parameter storage, and IP protection mechanisms.',
    problem:
      'UAV manufacturers faced IP theft through firmware extraction, unauthorized cloning of flight controllers, and parameter tampering that compromised flight safety and business value.',
    solution:
      'Implemented a multi-layer security stack: hardware secure boot chain, AES-256 parameter encryption, HMAC firmware signatures, and anti-reversal obfuscation layers within PX4.',
    result:
      'Protected firmware deployed across 500+ commercial UAV units. Zero successful extraction attempts reported post-deployment. Reduced IP theft incidents by eliminating binary cloning.',
    githubUrl: '#',
  },
  iot: {
    title: 'IoT Monitoring & Automation System',
    category: 'IOT',
    year: '2024',
    bgClass: 'iot-bg',
    tags: [
      { label: 'Raspberry Pi', cls: 'cyan' },
      { label: 'MQTT', cls: 'pink' },
      { label: 'Cloud', cls: 'green' },
      { label: 'Node-RED', cls: 'purple' },
    ],
    description:
      'Edge-based sensor monitoring platform with cloud dashboards, configurable automation logic, real-time alerts, and remote device management for industrial environments.',
    problem:
      'Industrial clients had dozens of sensors generating data in silos with no unified monitoring, leading to delayed fault detection, manual reporting, and reactive maintenance cycles.',
    solution:
      'Architected an MQTT-based edge network with Raspberry Pi gateways, Node-RED automation logic, InfluxDB time-series storage, and a Grafana cloud dashboard with SMS/email alerting.',
    result:
      'Reduced fault detection time from hours to under 2 minutes. Cut maintenance costs by 40% through predictive alerting. Deployed across 3 industrial facilities with 200+ sensors.',
    githubUrl: '#',
  },
};

/* ----- STARS ----- */
function createStars() {
  const container = document.getElementById('stars');
  if (!container) return;
  for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    const dur = (Math.random() * 4 + 2).toFixed(1);
    const delay = (Math.random() * 5).toFixed(1);
    const minOp = (Math.random() * 0.05 + 0.03).toFixed(2);
    const maxOp = (Math.random() * 0.5 + 0.3).toFixed(2);
    star.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;--dur:${dur}s;--delay:${delay}s;--min-op:${minOp};--max-op:${maxOp};animation-delay:${delay}s`;
    container.appendChild(star);
  }
  const colors = ['rgba(34,211,238,0.6)', 'rgba(236,72,153,0.5)', 'rgba(168,85,247,0.4)'];
  for (let i = 0; i < 6; i++) {
    const dot = document.createElement('div');
    dot.className = 'star';
    const size = Math.random() * 3 + 2;
    const dur = (Math.random() * 6 + 4).toFixed(1);
    const delay = (Math.random() * 4).toFixed(1);
    dot.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;background:${colors[i % colors.length]};--dur:${dur}s;--delay:${delay}s;--min-op:0.1;--max-op:0.7;animation-delay:${delay}s`;
    container.appendChild(dot);
  }
}

/* ----- ACTIVE NAV ON SCROLL ----- */
function initNavTracking() {
  const sections = ['home', 'about', 'projects', 'services', 'contact'];
  const navLinks = {};
  sections.forEach(id => { navLinks[id] = document.getElementById(`nav-${id}`); });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        Object.values(navLinks).forEach(l => l && l.classList.remove('active'));
        if (navLinks[entry.target.id]) navLinks[entry.target.id].classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* ----- SMOOTH SCROLL ----- */
function initNavLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
}

/* ----- MODAL ----- */
const overlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');

function openModal(key) {
  const p = projects[key];
  if (!p) return;
  document.getElementById('modal-img').className = `modal-img ${p.bgClass}`;
  document.getElementById('modal-category').textContent = p.category;
  document.getElementById('modal-year').textContent = p.year;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-tags').innerHTML = p.tags.map(t => `<span class="tech-tag ${t.cls}">${t.label}</span>`).join('');
  document.getElementById('modal-description').textContent = p.description;
  document.getElementById('modal-problem').textContent = p.problem;
  document.getElementById('modal-solution').textContent = p.solution;
  document.getElementById('modal-result').textContent = p.result;
  document.getElementById('modal-view-code').href = p.githubUrl;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
  setTimeout(() => document.getElementById('modal-close').focus(), 50);
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

/* ----- PROJECT CARD CLICKS ----- */
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.project); }
  });
  card.addEventListener('click', (e) => {
    if (e.target.closest('.case-study-link')) return;
    openModal(card.dataset.project);
  });
});

document.querySelectorAll('.case-study-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const card = link.closest('.project-card');
    if (card) openModal(card.dataset.project);
  });
});

/* ----- CHARACTER COUNT ----- */
const textarea = document.getElementById('message');
const charCount = document.getElementById('char-count');
if (textarea && charCount) {
  textarea.addEventListener('input', () => { charCount.textContent = textarea.value.length; });
}

/* ----- CONTACT FORM ----- */
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const btn = document.getElementById('btn-send-message');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => { form.style.display = 'none'; success.classList.add('show'); }, 1200);
}

/* ----- FADE-IN ON SCROLL ----- */
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function addFadeInClasses() {
  ['.available-badge', '.hero-title', '.hero-subtitle', '.hero-desc', '.hero-cta',
    '.scroll-indicator', '.about-left', '.stat-card', '.projects-header',
    '.project-card', '.service-card', '.contact-top', '.contact-detail-item',
    '.social-item', '.form-card'
  ].forEach((sel, si) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = `${(i + si * 0.03) * 0.07}s`;
    });
  });
}

/* ----- PARALLAX STARS ----- */
document.addEventListener('mousemove', (e) => {
  const starsEl = document.getElementById('stars');
  if (!starsEl) return;
  starsEl.style.transform = `translate(${(e.clientX / window.innerWidth - 0.5) * 12}px,${(e.clientY / window.innerHeight - 0.5) * 12}px)`;
});

/* ----- THEME TOGGLE (Day/Night) ----- */
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  // Load saved preference
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';

    if (next === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', next);
  });
}

/* ----- VANILLA TILT ON PROJECT CARDS ----- */
function initTiltEffect() {
  if (typeof VanillaTilt === 'undefined') return;
  const cards = document.querySelectorAll('.project-card');
  VanillaTilt.init(Array.from(cards), {
    speed: 300,
    glare: true,
    'max-glare': 0.1,
    gyroscope: true,
    perspective: 900,
    scale: 0.9,
  });
}

/* ----- INIT ----- */
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  addFadeInClasses();
  initFadeIn();
  initNavTracking();
  initNavLinks();
  initThemeToggle();
  initTiltEffect();
});
