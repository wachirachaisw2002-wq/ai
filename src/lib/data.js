// src/lib/data.js

export const users = [
  { username: "user", password: "123", name: "Job Seeker" }
];

// src/lib/data.js

export const careers = [
    // --- Development ---
    {
      id: 1,
      category: "Development",
      name: "Frontend Developer",
      description: "ผู้สร้างหน้าตาเว็บไซต์ (UI) ให้สวยงามและใช้งานง่าย",
      salary: "25,000 - 80,000 THB",
      responsibilities: [
        "แปลงดีไซน์จาก Figma/Adobe XD ให้เป็นโค้ด HTML/CSS/JS",
        "เชื่อมต่อ API เพื่อดึงข้อมูลมาแสดงผลหน้าเว็บ",
        "ดูแลให้เว็บแสดงผลได้ดีในทุกหน้าจอ (Responsive Design)",
        "ปรับปรุงประสิทธิภาพเว็บ (Performance Optimization) ให้โหลดเร็ว"
      ],
      skills: ["HTML/CSS", "JavaScript", "React/Next.js", "Tailwind CSS", "Git"],
      pros: "เห็นผลงานทันที, ตลาดต้องการสูง, ทำงานที่ไหนก็ได้ (Remote)",
      cons: "เทคโนโลยีเปลี่ยนไวมาก, ต้องละเอียดเรื่อง Design pixel-perfect",
      roadmap: ["พื้นฐาน Web", "JavaScript Deep Dive", "Modern Frameworks", "API Integration", "Testing & Performance"]
    },
    {
      id: 2,
      category: "Development",
      name: "Backend Developer",
      description: "ผู้อยู่เบื้องหลังระบบ ดูแล Server และฐานข้อมูล",
      salary: "30,000 - 90,000 THB",
      responsibilities: [
        "ออกแบบและสร้าง Database Schema",
        "เขียน API (RESTful/GraphQL) ให้ Frontend เรียกใช้งาน",
        "ดูแลความปลอดภัย (Security) และการยืนยันตัวตน (Authentication)",
        "จัดการ Server และการ Deploy ระบบ (DevOps Basic)"
      ],
      skills: ["Node.js/Go/Python", "SQL/NoSQL", "Docker", "API Design", "Security Basic"],
      pros: "เงินเดือนสูง, ตรรกะชัดเจน, ไม่ต้องปวดหัวเรื่อง CSS/Design",
      cons: "ความรับผิดชอบสูง (ถ้าระบบล่มคือเรื่องใหญ่), งานแก้ยากกว่าหน้าบ้าน",
      roadmap: ["Logic & Algo", "Database Design", "API Development", "Server Management", "Microservices"]
    },
    {
      id: 3,
      category: "Development",
      name: "Full Stack Developer",
      description: "ทำได้ทั้งหน้าบ้านและหลังบ้าน เข้าใจระบบครบวงจร",
      salary: "35,000 - 100,000+ THB",
      responsibilities: [
        "พัฒนาฟีเจอร์ใหม่ตั้งแต่หน้าเว็บจนถึงฐานข้อมูล",
        "แก้ไขบั๊กที่เกิดขึ้นทั้งฝั่ง Client และ Server",
        "เลือก Tech Stack ที่เหมาะสมกับโปรเจกต์",
        "ประสานงานระหว่างทีม Design และ Infrastructure"
      ],
      skills: ["React", "Node.js", "Database", "DevOps", "System Design"],
      pros: "เป็นที่ต้องการของ Startup, เข้าใจภาพรวมงานทั้งหมด",
      cons: "ต้องรู้เยอะและกว้าง, อาจเหนื่อยเพราะทำทุกส่วน",
      roadmap: ["Frontend Mastery", "Backend Basics", "Database", "Deployment", "System Architecture"]
    },
    {
      id: 4,
      category: "Development",
      name: "Mobile App Developer",
      description: "นักพัฒนาแอปพลิเคชันบนมือถือ iOS และ Android",
      salary: "30,000 - 85,000 THB",
      responsibilities: [
        "เขียนโค้ดเพื่อสร้างแอปบนมือถือ (Native หรือ Cross-platform)",
        "เชื่อมต่อกับ Hardware มือถือ เช่น กล้อง, GPS, Notification",
        "นำแอปขึ้น Store (App Store / Play Store)",
        "แก้ไข Crash และปรับปรุง UX บนหน้าจอสัมผัส"
      ],
      skills: ["Swift/Kotlin", "Flutter/React Native", "Mobile UI", "API Integration", "Store Publishing"],
      pros: "ตลาด Mobile เติบโตตลอด, เห็นคนใช้งานจริงง่าย",
      cons: "มือถือมีหลายรุ่นหลายขนาดหน้าจอ, Review Store จุกจิก",
      roadmap: ["Platform Choice", "UI Layouts", "Device Features", "Store Publishing", "Advanced Animations"]
    },
    {
      id: 5,
      category: "Development",
      name: "DevOps Engineer",
      description: "ผสานการพัฒนาและการดูแลระบบให้เป็นอัตโนมัติ",
      salary: "45,000 - 120,000+ THB",
      responsibilities: [
        "สร้าง Pipeline CI/CD สำหรับการ Deploy อัตโนมัติ",
        "ดูแล Cloud Infrastructure (AWS, Azure, GCP)",
        "เขียน Script เพื่อลดงานซ้ำซ้อน (Automation)",
        "Monitor ระบบและแก้ไขปัญหาเมื่อ Server ล่ม"
      ],
      skills: ["Linux", "Docker/K8s", "CI/CD", "Cloud Platforms", "Scripting (Bash/Python)"],
      pros: "เงินเดือนสูงมาก, ขาดแคลนคนเก่ง",
      cons: "ความกดดันสูง, ต้อง On-call ตลอดเวลา",
      roadmap: ["OS Concept", "Cloud", "Containerization", "Automation Pipeline", "Monitoring & Logging"]
    },
    // --- Data ---
    {
      id: 6,
      category: "Data",
      name: "Data Analyst",
      description: "นักวิเคราะห์ข้อมูลเพื่อหา Insight ทางธุรกิจ",
      salary: "28,000 - 70,000 THB",
      responsibilities: [
        "ดึงข้อมูลจาก Database มาทำความสะอาด (Data Cleaning)",
        "สร้าง Dashboard สรุปผลการดำเนินงาน (Visualization)",
        "หาแนวโน้มและสรุป Insight เพื่อแนะนำทีม Business",
        "ตอบคำถามทางธุรกิจด้วยข้อมูล"
      ],
      skills: ["Excel", "SQL", "PowerBI/Tableau", "Python Basic", "Statistics"],
      pros: "เป็นหัวใจสำคัญของการตัดสินใจธุรกิจ, เข้าได้ทุกวงการ",
      cons: "ข้อมูลมักจะไม่สะอาดต้องจัดการเยอะ, ต้องสื่อสารเก่ง",
      roadmap: ["Excel Advanced", "SQL Querying", "Visualization", "Business Acumen", "Python for Data"]
    },
    {
      id: 7,
      category: "Data",
      name: "Data Scientist",
      description: "นักวิทยาศาสตร์ข้อมูล สร้างโมเดลทำนายอนาคต",
      salary: "50,000 - 150,000 THB",
      responsibilities: [
        "สร้างโมเดล Machine Learning เพื่อทำนายผลลัพธ์",
        "ทดลองและวิจัยอัลกอริทึมใหม่ๆ เพื่อแก้ปัญหา",
        "จัดการข้อมูลขนาดใหญ่ (Big Data)",
        "แปลผลทางคณิตศาสตร์ให้เป็นภาษาธุรกิจ"
      ],
      skills: ["Python/R", "Machine Learning", "Statistics", "Big Data Tools", "Math"],
      pros: "รายได้สูง, งานท้าทายทางวิชาการ, ได้ทำนวัตกรรม",
      cons: "ต้องเก่งเลขมาก, อธิบายเรื่องยากให้คนเข้าใจยาก",
      roadmap: ["Calculus/Stats", "Programming", "ML Algorithms", "Model Deployment", "Research"]
    },
    {
      id: 8,
      category: "Data",
      name: "Data Engineer",
      description: "วิศวกรข้อมูล ผู้สร้างท่อส่งข้อมูล (Pipeline)",
      salary: "40,000 - 110,000 THB",
      responsibilities: [
        "ออกแบบและสร้าง Data Pipeline (ETL)",
        "ดูแล Data Warehouse / Data Lake",
        "เขียน Script เพื่อดึงข้อมูลจากแหล่งต่างๆ (Scraping/API)",
        "ดูแลคุณภาพข้อมูล (Data Quality)"
      ],
      skills: ["SQL", "Python", "Spark/Hadoop", "Cloud Data Services", "ETL Tools"],
      pros: "เป็นที่ต้องการสูงมากในบริษัทใหญ่, ค่าตอบแทนดี",
      cons: "งานเบื้องหลังที่ไม่ค่อยมีใครเห็น, เจอปัญหาข้อมูลไม่ตรงบ่อย",
      roadmap: ["Programming", "Database Deep Dive", "Big Data Tools", "Data Pipeline", "Cloud Architecture"]
    },
    {
        id: 9,
        category: "Data",
        name: "AI / ML Engineer",
        description: "วิศวกร AI นำโมเดลไปใช้งานจริง",
        salary: "55,000 - 140,000 THB",
        responsibilities: [
            "นำโมเดล ML ไป Deploy บน Production (MLOps)",
            "ปรับจูนโมเดลให้ทำงานเร็วและแม่นยำขึ้น",
            "สร้าง API สำหรับเรียกใช้ AI",
            "ติดตามผลการทำงานของโมเดล (Model Monitoring)"
        ],
        skills: ["Python", "TensorFlow/PyTorch", "Docker", "API Development", "Cloud AI Services"],
        pros: "อยู่ในเทรนด์อนาคต, ค่าตัวแพง, ได้ทำ Tech ล้ำๆ",
        cons: "Tech เปลี่ยนไวมาก, ต้องใช้ Resource เครื่องสูง",
        roadmap: ["Software Engineering", "ML Basics", "Deep Learning", "Model Deployment", "Optimization"]
    },
    // --- Design ---
    {
      id: 10,
      category: "Design",
      name: "UX/UI Designer",
      description: "ออกแบบประสบการณ์และหน้าตาแอปพลิเคชัน",
      salary: "25,000 - 80,000 THB",
      responsibilities: [
        "ทำ User Research เพื่อเข้าใจปัญหาผู้ใช้",
        "ออกแบบ Wireframe และ Prototype",
        "สร้าง Design System ให้ทีม Dev นำไปใช้",
        "ทดสอบ Usability Test กับผู้ใช้งานจริง"
      ],
      skills: ["Figma", "User Research", "Prototyping", "Design System", "Communication"],
      pros: "ได้ใช้ความคิดสร้างสรรค์, เห็นผลงานสวยงาม",
      cons: "ต้องรับฟัง Feedback เยอะ, แก้งานบ่อย",
      roadmap: ["Design Principles", "Tool Mastery", "User Psychology", "Collaboration", "Advanced Prototyping"]
    },
    {
        id: 11,
        category: "Design",
        name: "Graphic Designer",
        description: "นักออกแบบกราฟิก สื่อสารผ่านภาพ",
        salary: "20,000 - 60,000 THB",
        responsibilities: [
            "ออกแบบสื่อโฆษณา Banner, Social Media Post",
            "สร้าง Corporate Identity (CI) และ Logo",
            "Retouch และตกแต่งภาพถ่าย",
            "ออกแบบสิ่งพิมพ์ (Print Ads)"
        ],
        skills: ["Photoshop", "Illustrator", "Layout", "Color Theory", "Typography"],
        pros: "งานหลากหลาย, ฟรีแลนซ์ง่าย",
        cons: "คู่แข่งเยอะ, อาจโดนกดราคา",
        roadmap: ["Art Fundamentals", "Software Skills", "Portfolio Building", "Branding", "Motion Graphics"]
    },
    // --- Product & Management ---
    {
        id: 12,
        category: "Product",
        name: "Product Owner (PO)",
        description: "ผู้กำกับทิศทางของผลิตภัณฑ์และเรียงลำดับงาน",
        salary: "50,000 - 120,000 THB",
        responsibilities: [
          "คุยกับ Stakeholders เพื่อรวบรวมความต้องการ",
          "เขียน User Stories และจัดลำดับความสำคัญ (Prioritize)",
          "วางแผน Roadmap ของ Product",
          "ตรวจรับงานจากทีม Dev (UAT)"
        ],
        skills: ["Agile/Scrum", "Communication", "Business Analysis", "User Story", "Prioritization"],
        pros: "มีอำนาจตัดสินใจทิศทาง, ฝึกความเป็นผู้นำ",
        cons: "ความรับผิดชอบสูง, ประชุมเยอะมาก",
        roadmap: ["Business Analysis", "Project Management", "Agile", "Leadership", "Product Strategy"]
    },
    {
        id: 13,
        category: "Product",
        name: "Project Manager (Tech)",
        description: "ผู้บริหารโครงการให้เสร็จตามกำหนด",
        salary: "45,000 - 100,000 THB",
        responsibilities: [
            "วางแผน Timeline และ Resource ของโครงการ",
            "ติดตามความคืบหน้าและแก้ปัญหาติดขัด (Blockers)",
            "บริหารความเสี่ยง (Risk Management)",
            "รายงานผลให้ผู้บริหารทราบ"
        ],
        skills: ["Project Planning", "Time Management", "Jira/Trello", "Negotiation", "Risk Management"],
        pros: "ได้ทักษะการบริหารคน, เป็นศูนย์กลางทีม",
        cons: "แรงกดดันรอบด้าน, ต้องตามงานคนอื่น",
        roadmap: ["Team Coordination", "Methodologies (Waterfall/Agile)", "Tools", "Soft Skills", "PMP Cert"]
    },
    // --- QA & Security ---
    {
        id: 14,
        category: "QA",
        name: "Software QA / Tester",
        description: "ผู้ตรวจสอบคุณภาพซอฟต์แวร์ก่อนถึงมือลูกค้า",
        salary: "22,000 - 65,000 THB",
        responsibilities: [
          "เขียน Test Case เพื่อครอบคลุมการใช้งานต่างๆ",
          "ทดสอบระบบหาบั๊ก (Manual Testing)",
          "เขียนสคริปต์ทดสอบอัตโนมัติ (Automated Testing)",
          "รายงานบั๊กให้ทีม Dev แก้ไข"
        ],
        skills: ["Test Case Design", "Selenium/Cypress", "Jira", "SQL", "Attention to Detail"],
        pros: "เป็นด่านหน้าสำคัญ, เริ่มต้นสาย Tech ได้ง่าย",
        cons: "งานซ้ำจำเจบ้าง, อาจขัดแย้งกับ Dev",
        roadmap: ["Testing Concept", "Test Case", "Automation Tools", "Programming Basic", "Performance Testing"]
    },
    {
        id: 15,
        category: "Security",
        name: "Cyber Security Specialist",
        description: "ผู้ปกป้องระบบจากการโจมตีทางไซเบอร์",
        salary: "45,000 - 120,000+ THB",
        responsibilities: [
          "ตรวจสอบช่องโหว่ของระบบ (Penetration Testing)",
          "ตั้งค่า Firewall และระบบป้องกัน",
          "Monitor การโจมตีและตอบสนองเหตุการณ์ (Incident Response)",
          "อบรมพนักงานเรื่องความปลอดภัย"
        ],
        skills: ["Network Security", "Ethical Hacking", "Firewall", "Compliance", "Linux"],
        pros: "ความต้องการสูงมาก, ยิ่งเก่งยิ่งค่าตัวแพง",
        cons: "เครียดสูง, ต้องตื่นตัวตลอดเวลา",
        roadmap: ["Networking", "OS Internals", "Security Tools", "Certifications (CISSP/CEH)", "Cloud Security"]
    },
    // --- Infrastructure & Emerging ---
    {
        id: 16,
        category: "Infrastructure",
        name: "Cloud Architect",
        description: "ผู้ออกแบบโครงสร้างระบบบน Cloud",
        salary: "80,000 - 200,000 THB",
        responsibilities: [
            "ออกแบบ Architecture บน Cloud ให้รองรับ Load ได้สูง",
            "ควบคุมค่าใช้จ่าย Cloud (Cost Optimization)",
            "วางแผน Disaster Recovery (DR)",
            "ให้คำปรึกษาทีม Dev เรื่อง Cloud Services"
        ],
        skills: ["AWS/Azure/GCP", "System Design", "Networking", "Security", "Cost Management"],
        pros: "ระดับสูงสุดสาย Infra, เงินเดือน Top tier",
        cons: "ต้องประสบการณ์สูง, ความผิดพลาดราคาแพง",
        roadmap: ["SysAdmin Experience", "DevOps Skills", "Cloud Certification", "Enterprise Architecture", "Financial Ops"]
    },
    {
        id: 17,
        category: "Infrastructure",
        name: "System Administrator",
        description: "ผู้ดูแลระบบเครือข่ายและ Server ในองค์กร",
        salary: "25,000 - 60,000 THB",
        responsibilities: [
            "ติดตั้งและดูแล Server (Windows/Linux)",
            "จัดการ User Access และ Permission",
            "Backup ข้อมูลและกู้คืนเมื่อมีปัญหา",
            "ดูแลระบบ Network ภายใน (LAN/WAN)"
        ],
        skills: ["Windows Server", "Linux", "Networking (Cisco)", "Virtualization", "Hardware"],
        pros: "งานมั่นคง, เป็นพื้นฐานที่ดี",
        cons: "งาน Routine เยอะ, ต้องแสตนด์บายแก้ปัญหา",
        roadmap: ["Hardware", "OS Admin", "Networking", "Cloud Basics", "Security Admin"]
    },
    {
        id: 18,
        category: "Emerging",
        name: "Blockchain Developer",
        description: "นักพัฒนาบนระบบ Blockchain และ Web3",
        salary: "50,000 - 150,000+ THB",
        responsibilities: [
            "เขียน Smart Contracts (Solidity)",
            "พัฒนา DApps เชื่อมต่อกับ Blockchain",
            "ตรวจสอบความปลอดภัยของ Smart Contract",
            "วิจัย Protocol ใหม่ๆ"
        ],
        skills: ["Solidity", "Rust", "Web3.js", "Cryptography", "Finance Logic"],
        pros: "ค่าตัวสูงลิ่ว, เทคโนโลยีล้ำสมัย",
        cons: "ความเสี่ยงสูง (Bug = เงินหาย), ตลาดผันผวน",
        roadmap: ["Web Dev", "Blockchain Theory", "Smart Contract", "Security Audit", "DeFi Concepts"]
    },
    {
        id: 19,
        category: "Emerging",
        name: "Game Developer",
        description: "นักพัฒนาเกม สร้างความสนุกให้ผู้เล่น",
        salary: "25,000 - 80,000 THB",
        responsibilities: [
            "เขียนโค้ดระบบ Gameplay และ Physics",
            "ใช้งาน Game Engine (Unity/Unreal)",
            "Optimize เกมให้ลื่นไหล",
            "แก้บั๊กและปรับสมดุลเกม"
        ],
        skills: ["C#/C++", "Unity/Unreal", "3D Math", "Graphics Programming", "Game Design"],
        pros: "ได้ทำสิ่งที่รัก, งานสนุกท้าทาย",
        cons: "งานหนักช่วงปิดโปรเจกต์ (Crunch), แข่งขันสูง",
        roadmap: ["Programming", "Game Engine", "Mathematics", "Game Design", "Graphics API"]
    },
    {
        id: 20,
        category: "Marketing",
        name: "Digital Marketer (Tech)",
        description: "นักการตลาดสาย Tech ใช้ Data ขับเคลื่อน",
        salary: "25,000 - 70,000 THB",
        responsibilities: [
            "ยิงโฆษณา (Ads) บน Social Media",
            "ทำ SEO ให้เว็บติดอันดับ Google",
            "วิเคราะห์ผลลัพธ์จาก Google Analytics",
            "วางแผน Content Strategy"
        ],
        skills: ["SEO/SEM", "Analytics", "Social Media Ads", "Content Writing", "MarTech Tools"],
        pros: "วัดผลได้ชัดเจน, รับงานนอกง่าย",
        cons: "Algorithm เปลี่ยนบ่อย, ต้องเรียนรู้ตลอด",
        roadmap: ["Marketing Basic", "Content Creation", "Analytics", "Ads Optimization", "Automation"]
    }
  ];

// src/lib/assessment-data.js

export const questions = [
  {
    id: 1,
    question: "ในโปรเจกต์สร้างแอปพลิเคชัน คุณอยากรับบทบาทไหนมากที่สุด?",
    options: [
      { text: "ออกแบบหน้าตา (UI) หรือสร้างประสบการณ์ใช้งาน (UX) ให้คนว้าว", type: "creative" }, // Frontend, Mobile, Design, Game
      { text: "วางระบบหลังบ้าน เชื่อมต่อ Database และทำให้ระบบเสถียร", type: "system" }, // Backend, Infra, Blockchain
      { text: "นำข้อมูลผู้ใช้มาวิเคราะห์หา Insight หรือสร้างโมเดลทำนายอนาคต", type: "data" }, // Data, AI
      { text: "ตรวจสอบระบบจับผิด Bug หรือดูแลความปลอดภัยไม่ให้ใครแฮก", type: "audit" } // QA, Security
    ]
  },
  {
    id: 2,
    question: "คุณชอบการทำงานสไตล์ไหน?",
    options: [
      { text: "เน้นผลลัพธ์ที่จับต้องได้ เห็นภาพสวยงาม หรือมีการเคลื่อนไหว", type: "creative" },
      { text: "ชอบแก้ปัญหาเชิงตรรกะ ซับซ้อน ท้าทาย ประสิทธิภาพสูง", type: "system" },
      { text: "ชอบวางแผน สื่อสาร จัดลำดับงาน และมองภาพรวมธุรกิจ", type: "business" }, // PM, PO, Marketing
      { text: "ชอบความถูกต้อง แม่นยำ ละเอียดรอบคอบ และปลอดภัย", type: "audit" }
    ]
  },
  {
    id: 3,
    question: "เครื่องมือหรือเทคโนโลยีที่เห็นแล้วรู้สึกตื่นเต้น?",
    options: [
      { text: "Figma, Adobe Suite, Unity, CSS Animations", type: "creative" },
      { text: "Docker, Kubernetes, Linux, Blockchain", type: "system" },
      { text: "Python (Pandas/Scikit-learn), Excel, PowerBI", type: "data" },
      { text: "Jira (Kanban), Gantt Chart, Google Analytics", type: "business" }
    ]
  },
  {
    id: 4,
    question: "ถ้าเปรียบการทำงานเป็นการสร้างเมือง คุณคือใคร?",
    options: [
      { text: "สถาปนิก (ออกแบบตึกสวยๆ) หรือ ศิลปิน (ตกแต่งเมือง)", type: "creative" },
      { text: "วิศวกรโยธา (วางท่อ สร้างถนน ระบบไฟฟ้า)", type: "system" },
      { text: "นักวางผังเมือง (ดูสถิติประชากร เพื่อขยายเมือง)", type: "data" },
      { text: "นายกเทศมนตรี (บริหารงบ ดูแลภาพรวม)", type: "business" }
    ]
  },
  {
    id: 5,
    question: "เมื่อเจอปัญหา คุณมักจะ...",
    options: [
      { text: "หงุดหงิดถ้าฟอนต์ไม่สวย หรือจัดวางองค์ประกอบเบี้ยว", type: "creative" },
      { text: "รีบหาสาเหตุว่าทำไมระบบช้า หรือ Code ตรงไหน Error", type: "system" },
      { text: "สงสัยว่าปัญหานี้เกิดขึ้นบ่อยแค่ไหน มีสถิติรองรับไหม", type: "data" },
      { text: "กังวลว่าปัญหานี้จะกระทบความปลอดภัย หรือคุณภาพสินค้าไหม", type: "audit" }
    ]
  },
  {
    id: 6,
    question: "คุณถนัดทักษะด้านไหนมากที่สุด?",
    options: [
      { text: "ความคิดสร้างสรรค์ (Creativity) และศิลปะ", type: "creative" },
      { text: "การเขียนโค้ด (Coding) และโครงสร้างระบบ", type: "system" },
      { text: "คณิตศาสตร์ (Math) และสถิติ", type: "data" },
      { text: "การสื่อสาร (Communication) และการเจรจา", type: "business" }
    ]
  },
  {
    id: 7,
    question: "เป้าหมายสูงสุดในการทำงานของคุณคือ?",
    options: [
      { text: "สร้างผลงานที่เป็นที่จดจำ และผู้คนชื่นชอบ", type: "creative" },
      { text: "สร้างระบบที่ทรงพลัง รองรับคนใช้งานได้ระดับโลก", type: "system" },
      { text: "ค้นพบคำตอบใหม่ๆ จากข้อมูลที่คนอื่นมองข้าม", type: "data" },
      { text: "ผลักดันให้โปรเจกต์สำเร็จ และธุรกิจเติบโต", type: "business" }
    ]
  }
];

// ผลลัพธ์: Mapping กลุ่มคะแนน -> รายชื่อ ID ของอาชีพ (ตามไฟล์ data.js)
export const recommendations = {
  creative: {
    title: "สายสร้างสรรค์และประสบการณ์ผู้ใช้ (Creative & UX)",
    description: "คุณมีหัวใจศิลปินผสานกับเทคโนโลยี ชอบสร้างสิ่งที่สวยงาม ใช้งานง่าย และสร้างความประทับใจให้ผู้คน",
    // Frontend(1), Mobile(4), UX/UI(10), Graphic(11), Game(19)
    careerIds: [1, 4, 10, 11, 19]
  },
  system: {
    title: "สายระบบและโครงสร้างพื้นฐาน (System & Infrastructure)",
    description: "คุณคือนักแก้ปัญหาเชิงตรรกะ ชอบความท้าทายของระบบที่ซับซ้อน และการทำให้ทุกอย่างทำงานได้อย่างราบรื่น",
    // Backend(2), FullStack(3), DevOps(5), Cloud(16), SysAdmin(17), Blockchain(18)
    careerIds: [2, 3, 5, 16, 17, 18]
  },
  data: {
    title: "สายข้อมูลและปัญญาประดิษฐ์ (Data & AI)",
    description: "คุณชอบทำงานกับตัวเลข ข้อเท็จจริง และการค้นหาคำตอบที่ซ่อนอยู่เพื่อทำนายอนาคต",
    // Data Analyst(6), Scientist(7), Engineer(8), AI/ML(9)
    careerIds: [6, 7, 8, 9]
  },
  business: {
    title: "สายบริหารและกลยุทธ์ (Management & Strategy)",
    description: "คุณมีทักษะผู้นำ มองภาพรวมธุรกิจออก และสามารถประสานงานพาทีมไปสู่เป้าหมายได้",
    // Product Owner(12), Project Manager(13), Digital Marketer(20)
    careerIds: [12, 13, 20]
  },
  audit: {
    title: "สายตรวจสอบและความปลอดภัย (Quality & Security)",
    description: "คุณเป็นคนละเอียดรอบคอบ ให้ความสำคัญกับความถูกต้อง และความปลอดภัยของระบบเป็นอันดับหนึ่ง",
    // QA(14), CyberSecurity(15)
    careerIds: [14, 15]
  }
};

export const chatbotResponses = {
  default: "ขอโทษครับ ผมไม่เข้าใจคำถาม ลองถามเกี่ยวกับ 'อาชีพ', 'แนะนำ', หรือ 'ติดต่อ' ดูนะครับ",
  keywords: {
    "สวัสดี": "สวัสดีครับ! ให้ผมช่วยแนะนำอาชีพหรือวางแผนเส้นทางดีครับ?",
    "อาชีพ": "เรามีข้อมูลอาชีพ Frontend Developer และ Data Analyst ครับ",
    "ติดต่อ": "สามารถติดต่อแอดมินได้ที่ admin@careerapp.com",
    "พอร์ต": "คุณสามารถดูตัวอย่างพอร์ตได้ที่เมนู 'ตัวอย่าง Portfolio' ครับ"
  }
};