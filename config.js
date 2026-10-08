/* =====================================================
   MD. SUJON SARDER — WEBSITE CONFIG (config.js)
   =====================================================
   EDIT ONLY THIS FILE for content, colors, themes,
   section order, and visibility.
   Keep the quotes "", commas ,, and brackets [] as-is.
   Save, then open index.html in a browser.
   ===================================================== */

const CONFIG = {

  /* ---------- BASIC INFO ---------- */
  name: "Md. Sujon Sarder",
  firstName: "Sujon",
  lastName: "Sarder",
  initials: "MR",
  tagline: "IT Officer | IT Support & School Technology Professional",
  eyebrow: "Technology · Education · Digital Systems",
  shortBio: "Passionate about technology, education, digital systems, and creating smarter IT solutions.",
  location: "Dhaka, Bangladesh",
  email: "sujon.gnd@gmail.com",
  phone: "01711-324110",
  photo: "photo.jpg",          // place your image in the same folder
  cv: "#",                     // e.g. "sujon-sarder-cv.pdf"
  year: 2026,

  /* Social links (leave empty string "" to hide) */
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    github: "",
    twitter: "",
    website: ""
  },

  /* ---------- SEO / META ---------- */
  metaTitle: "Md. Sujon Sarder — IT Officer | Technology Professional",
  metaDescription: "Personal profile of Md. Sujon Sarder, IT Officer at Excel Academy, Bangladesh — IT support, school technology and digital systems.",

  /* ---------- SECTION ORDER & VISIBILITY ----------
     Reorder the array to change page order.
     Set visible: false to hide a section completely.
     id must match the section id used in the HTML. */
  sections: [
    { id: "home",        visible: true,  label: "Home" },
    { id: "about",       visible: true,  label: "About" },
    { id: "education",   visible: true,  label: "Education" },
    { id: "experience",  visible: true,  label: "Experience" },
    { id: "strengths",   visible: true,  label: "Strengths" },
    { id: "skills",      visible: true,  label: "Skills" },
    { id: "projects",    visible: true,  label: "Projects" },
    { id: "achievements",visible: true,  label: "Achievements" },
    { id: "interests",   visible: true,  label: "Interests" },
    { id: "approach",    visible: true,  label: "Approach" },
    { id: "contact",     visible: true,  label: "Contact" }
  ],

  /* ---------- STATS (hero) ---------- */
  stats: [
    ["9+", "Years of IT Experience"],
    ["3",  "Organizations Worked With"],
    ["2+", "Projects Completed"],
    ["3+", "Systems Managed"]
  ],

  /* ---------- ABOUT ---------- */
  bio: [
    "I'm Md. Sujon Sarder, an IT professional with over 9 years of experience in system administration, network security, and IT infrastructure. I enjoy leading teams and building secure, scalable solutions that people can rely on.",
    "I currently work as IT Officer at Excel Academy, where I manage the school website and school management software, keeping our systems reliable, secure, and easy to use.",
	"Before that, I served as IT Officer at Wordbridge School from 2016 to 2025. There I managed network systems and smart classroom technology, supported staff and students, protected data security, and helped run online exams, result processing, and digital infrastructure.",
    "I am also pursuing a Master's in MPMIS at the University of Dhaka."
  ],
  focus: [
    "IT Support", "School Technology Management", "Software & ERP Systems",
    "Network & Hardware Support", "Digital Education Tools", "Website & System Coordination",
    "Google Workspace for Education", "Troubleshooting", "Workflow Improvement"
  ],
  profile: [
    ["Full Name", "Md. Sujon Sarder"],
    ["Current Position", "IT Officer"],
    ["Organization", "Excel Academy"],
    ["Location", "Dhanmondi, Dhaka"],
    ["Professional Interests", "School IT Management, IT Infrastructure, System Administration, EduTech & Smart Classrooms, Digital Transformation, AI in Education, Data Security, Team Leadership"]
  ],

  /* ---------- EDUCATION ---------- */
  education: [
    ["Master's in MPMIS (pursuing)", "University of Dhaka", "MPMIS", "[2026]", "Currently pursuing alongside professional work."],
    ["BSc in Computer Science", "Eastern University", "Computer Science", "2016 – 2019", "Result: 3.52 out of 4.00."],
    ["Diploma in Computer Technology", "Patuakhali Polytechnic Institute", "Computer Technology", "2015", "Result: 3.58 out of 4.00."]
  ],
  learning: [
    ["IT Certifications", "Web Design & Development, 2016"],
    ["Technology Training", "Graphics Design, 2018"],
    ["Google Workspace Training", "Add training details"],
    ["Professional Development", "Add details"],
    ["Workshops", "Add relevant workshops"]
  ],

  /* ---------- EXPERIENCE ---------- */
  experience: [
    {
      title: "IT Officer",
      org: "Excel Academy",
      date: "2025 – Present",
      current: true,
      summary: "Manages the school website and school management software, keeping systems reliable, secure and easy to use.",
      responsibilities: [
        "IT infrastructure support", "School management software coordination",
        "Hardware and software troubleshooting", "Network support",
        "Printer and device management", "Website coordination",
        "Google Workspace for Education", "User account and email management",
        "Technical support for teachers and administrative staff",
        "Online class and meeting support", "Coordination with software development teams",
        "Digital workflow improvement"
      ]
    },
    {
      title: "IT Officer",
      org: "Wordbridge School",
      date: "2016 – 2025",
      current: false,
      summary: "Managed network systems and smart classroom technology; supported staff and students and ensured data security.",
      responsibilities: [
        "Network systems management", "Smart classroom technology",
        "Technical support for staff and students", "Data security",
        "Online exam assistance", "Result processing", "Digital infrastructure"
      ]
    },
    {
      title: "Assistant Manager (IT)",
      org: "MovingUps",
      date: "2015 – 2016",
      current: false,
      summary: "Oversaw IT operations, system upgrades, vendor coordination and team support.",
      responsibilities: [
        "IT operations", "System upgrades", "Vendor coordination",
        "Team support", "Reliable network security and technical support for users"
      ]
    }
  ],

  /* ---------- STRENGTHS ---------- */
  strengths: [
    "IT Troubleshooting", "Technical Support", "School IT Management",
    "Network Management", "Hardware & Software Support", "School Management Systems",
    "Google Workspace", "Website Management", "Problem Solving",
    "Communication", "Team Coordination", "Documentation",
    "User Support", "Technology Planning"
  ],

  /* ---------- SKILLS ----------
     Each category: [ "Category Name", [ "Skill", ... ] ]
     Optional: use { n: "Skill", level: 1-5 } for dots */
  skills: [
    ["IT & Infrastructure", [
      "System Administration", "Network Security", "Networking",
      "Hardware Maintenance", "Windows", "Printers", "Troubleshooting", "Backup Management"
    ]],
    ["Education Technology", [
      "Google Workspace for Education", "Google Meet",
      "Online learning tools", "School management systems"
    ]],
    ["Software & Digital Systems", [
      "Microsoft Office", "Excel", "Website administration",
      "ERP / school management software", "IT Documentation"
    ]],
    ["Creative & Digital", [
      "Basic graphic design", "Digital content",
      "Social media technology", "Website content management"
    ]]
  ],

  /* ---------- PROJECTS ---------- */
  projects: [
    { name: "[Project name]", category: "School Website Projects", role: "[Your role]", desc: "[Short description]", tags: ["[Tools]"], status: "[Status]", img: "" },
    { name: "[Project name]", category: "School Management System Implementation", role: "[Your role]", desc: "[Short description]", tags: ["[Tools]"], status: "[Status]", img: "" },
    { name: "[Project name]", category: "Google Workspace for Education", role: "[Your role]", desc: "[Short description]", tags: ["[Tools]"], status: "[Status]", img: "" },
    { name: "[Project name]", category: "IT Infrastructure Projects", role: "[Your role]", desc: "[Short description]", tags: ["[Tools]"], status: "[Status]", img: "" },
    { name: "[Project name]", category: "Digital Education Projects", role: "[Your role]", desc: "[Short description]", tags: ["[Tools]"], status: "[Status]", img: "" },
    { name: "[Project name]", category: "Software QA & Requirement Coordination", role: "[Your role]", desc: "[Short description]", tags: ["[Tools]"], status: "[Status]", img: "" }
  ],

  /* ---------- ACHIEVEMENTS ---------- */
  achievements: [
    ["Career Milestone", "9+ years in IT across three organizations (2015 – present)"],
    ["Academic Achievement", "BSc in Computer Science, 3.52/4.00 (2019); Diploma in Computer Technology, 3.58/4.00 (2015)"],
    ["Award", "Most Outstanding Employee of the Year, Wordbridge (2021)"],
    ["Major IT Project", "[Add entry]"],
    ["Technology Implementation", "[Add entry]"],
    ["Training & Workshop", "[Add entry]"]
  ],

  /* ---------- INTERESTS ---------- */
  interests: [
    "Educational Technology", "IT Infrastructure", "Digital Transformation",
    "Artificial Intelligence", "Cloud Technology", "Cybersecurity",
    "School Management Systems", "Automation", "Digital Productivity"
  ],

  /* ---------- APPROACH ---------- */
  approach: [
    ["Learn", "Continuously develop technical and professional skills."],
    ["Solve", "Approach technical problems logically and practically."],
    ["Improve", "Look for ways to make systems and workflows simpler."],
    ["Support", "Provide reliable technology support to users and teams."]
  ],

  /* ---------- THEMES (3–5 presets) ----------
     Change any hex value to retheme.
     "default" is the starting theme. */
  themes: {
    teal: {
      name: "Teal",
      light: { bg: "#f7f8fa", card: "#ffffff", tx: "#23272f", mut: "#667085", ac: "#0f766e", ac2: "#14b8a6", bd: "#e4e7ec" },
      dark:  { bg: "#0f1216", card: "#171b21", tx: "#eceff3", mut: "#98a2b3", ac: "#2dd4bf", ac2: "#14b8a6", bd: "#262c35" }
    },
    indigo: {
      name: "Indigo",
      light: { bg: "#f5f6fa", card: "#ffffff", tx: "#1e1b4b", mut: "#64748b", ac: "#4f46e5", ac2: "#818cf8", bd: "#e2e8f0" },
      dark:  { bg: "#0f0f1a", card: "#1a1a2e", tx: "#e0e7ff", mut: "#94a3b8", ac: "#818cf8", ac2: "#a5b4fc", bd: "#2e2e4a" }
    },
    emerald: {
      name: "Emerald",
      light: { bg: "#f0fdf4", card: "#ffffff", tx: "#14532d", mut: "#4b5563", ac: "#059669", ac2: "#34d399", bd: "#d1fae5" },
      dark:  { bg: "#0a1a12", card: "#12241a", tx: "#d1fae5", mut: "#86efac", ac: "#34d399", ac2: "#6ee7b7", bd: "#1a3a2a" }
    },
    rose: {
      name: "Rose",
      light: { bg: "#fff1f2", card: "#ffffff", tx: "#4c0519", mut: "#6b7280", ac: "#e11d48", ac2: "#fb7185", bd: "#fecdd3" },
      dark:  { bg: "#1a0a0f", card: "#2a1218", tx: "#ffe4e6", mut: "#fda4af", ac: "#fb7185", ac2: "#fda4af", bd: "#3f1a24" }
    },
    amber: {
      name: "Amber",
      light: { bg: "#fffbeb", card: "#ffffff", tx: "#451a03", mut: "#6b7280", ac: "#d97706", ac2: "#fbbf24", bd: "#fde68a" },
      dark:  { bg: "#1a1205", card: "#2a1f0a", tx: "#fef3c7", mut: "#fcd34d", ac: "#fbbf24", ac2: "#fcd34d", bd: "#3f2e0a" }
    }
  },
  defaultTheme: "teal"   // one of the keys above
};
