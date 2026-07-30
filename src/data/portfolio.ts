import type { Project, Skill, Experience, SocialLink } from "@/types/portfolio";

export const personal = {
  name: "Rafif",
  role: "Frontend Developer",
  tagline: "Creating engaging frontend experiences and modern web applications",
  description:
    "I enjoy exploring the field of frontend development and love learning new things.",
  email: "rabbanirafif434@gmail.com",
  location: "Indonesia",
  avatar: "👨‍💻",
  available: true,
  availableText: "Available for Internship",
  resumeUrl: "/cv.pdf",
};

function ph(text: string) {
  return `https://placehold.co/800x500/1a1a2e/3b82f6?text=${encodeURIComponent(text)}`;
}

export const projects: Project[] = [
  {
    slug: "flappybird",
    title: "Flappy Bird",
    description:
      "Flappy Bird adalah game 2D berbasis browser yang dibuat menggunakan HTML, CSS, dan JavaScript. Pemain mengendalikan seekor burung untuk melewati celah di antara pipa yang bergerak dari kanan ke kiri sambil menghindari tabrakan. Project ini dibuat untuk mempelajari dasar-dasar game development seperti Canvas API, game loop, collision detection, dan implementasi fisika sederhana menggunakan gravitasi.",
    tech: ["HTML5", "CSS3", "JavaScript (Vanilla JS)", "Canvas API", "DOM API"],
    images: [
      "/projects/flappy_bird_1.jpeg",
      "/projects/flappy_bird_2.jpeg",
      "/projects/flappy_bird_3.jpeg",
    ],
    overview:
      "Flappy Bird adalah game 2D berbasis browser yang dibuat menggunakan HTML, CSS, dan JavaScript. Pemain mengendalikan seekor burung untuk melewati celah di antara pipa yang bergerak dari kanan ke kiri sambil menghindari tabrakan. Project ini dibuat untuk mempelajari dasar-dasar game development seperti Canvas API, game loop, collision detection, dan implementasi fisika sederhana menggunakan gravitasi.",
    features: [
      "Kontrol burung menggunakan keyboard dan mouse.",
      "Sistem gravitasi dan lompatan (flap).",
      "Pipa muncul secara otomatis dengan posisi acak.",
      "Collision detection antara burung dan pipa.",
      "Sistem skor berdasarkan jumlah pipa yang berhasil dilewati.",
      "Tampilan Game Over ketika pemain kalah",
      "Restart permainan tanpa perlu me-refresh halaman.",
      "Menggunakan HTML5 Canvas untuk rendering game secara real-time.",
    ],
    challenges:
      "Tantangan terbesar dalam project ini adalah mengimplementasikan game loop yang berjalan secara real-time, mengatur pergerakan objek menggunakan gravitasi, serta membuat sistem collision detection yang akurat antara burung dan pipa. Selain itu, diperlukan penyesuaian posisi dan ukuran objek agar gameplay terasa seimbang dan nyaman dimainkan.",
    futureImprovements:
      "Menambahkan sistem High Score menggunakan Local Storage, Menambahkan efek suara dan musik latar, Menambahkan menu utama dan menu pause, Menambahkan tingkat kesulitan yang meningkat seiring bertambahnya skor, Menambahkan leaderboard lokal, Menambahkan animasi yang lebih halus pada karakter dan background, Membuat tampilan responsif untuk perangkat mobile, Menambahkan berbagai pilihan karakter dan tema permainan.",
    liveUrl: "https://sipena.example.com",
    sourceUrl: "https://github.com/rafif/sipena",
  },
  {
    slug: "chatbot",
    title: "Chatbot",
    description:
      "Rafif Assistant adalah project personal chatbot berbasis Laravel yang terintegrasi dengan AI. Project ini dibuat untuk mempelajari pengembangan aplikasi AI dari sisi frontend, database, dan integrasi API. Pengguna dapat melakukan percakapan dengan AI, menyimpan riwayat chat, mengatur preferensi AI, serta mencari percakapan yang pernah dilakukan.",
    tech: [
      "Laravel",
      "PHP",
      "Laravel Breeze",
      "HTML",
      "CSS",
      "JavaScript",
      "Blade Template Engine",
      "Groq API",
      "Llama 3",
    ],
    images: [
      "/projects/chatbot_1.jpeg",
      "/projects/chatbot_2.jpeg",
      "/projects/chatbot_3.jpeg",
      "/projects/chatbot_4.jpeg",
      "/projects/chatbot_5.jpeg",
    ],
    overview:
      "Rafif Assistant adalah project personal chatbot berbasis Laravel yang terintegrasi dengan AI. Project ini dibuat untuk mempelajari pengembangan aplikasi AI dari sisi frontend, database, dan integrasi API. Pengguna dapat melakukan percakapan dengan AI, menyimpan riwayat chat, mengatur preferensi AI, serta mencari percakapan yang pernah dilakukan.",
    features: [
      "Chat dengan AI menggunakan API AI.",
      "Riwayat percakapan tersimpan di database.",
      "Membuat chat baru.",
      "Edit judul percakapan.",
      "Hapus percakapan.",
      "Search Chat untuk mencari riwayat percakapan.",
      "Regenerate Response untuk membuat ulang jawaban AI.",
      "AI Settings untuk mengatur perilaku AI.",
      "Dark Mode",
      "Markdown Response dan Syntax Highlight.",
      "Responsive Design",
    ],
    challenges:
      "Mengatasi masalah konektivitas di daerah dengan sinyal lemah serta memastikan validitas data presensi tidak mudah dipalsukan.",
    futureImprovements:
      "Pengembangan fitur face recognition, integrasi dengan sistem SIAKAD, dan aplikasi mobile native.",
    liveUrl: "https://presensi.example.com",
  },
  {
    slug: "clubbasket",
    title: "Club Basket",
    description:
      "Sistem Informasi Koperasi Simpan Pinjam berbasis web untuk mengelola anggota, simpanan, pinjaman, dan angsuran.",
    tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    images: [ph("SiKoper+1"), ph("SiKoper+2"), ph("SiKoper+3")],
    overview:
      "SiKoper adalah platform digital untuk koperasi simpan pinjam yang menangani seluruh operasional mulai dari pendaftaran anggota, pengelolaan simpanan, pencairan pinjaman, hingga monitoring angsuran secara real-time.",
    features: [
      "Manajemen anggota dan tabungan",
      "Pengajuan dan pencairan pinjaman online",
      "Perhitungan bunga otomatis",
      "Jadwal angsuran dan reminder",
      "Laporan keuangan periodik",
      "Multi cabang dan multi unit",
    ],
    challenges:
      "Membuat sistem perhitungan bunga yang akurat untuk berbagai metode (flat, anuitas, efektif) serta menangani transaksi dalam jumlah besar.",
    futureImprovements:
      "Rencana integrasi dengan payment gateway, fitur koperasi syariah, dan dashboard analitik.",
    sourceUrl: "https://github.com/rafif/sikoper",
  },
  {
    slug: "siakad",
    title: "SiAkad",
    description:
      "Sistem Informasi Akademik untuk mengelola data mahasiswa, perkuliahan, KRS, dan nilai secara terintegrasi.",
    tech: ["CodeIgniter 4", "PostgreSQL", "Tailwind CSS", "Alpine.js"],
    images: [ph("SiAkad+1"), ph("SiAkad+2")],
    overview:
      "SiAkad adalah sistem informasi akademik lengkap yang menangani manajemen data mahasiswa, kurikulum, penjadwalan perkuliahan, pengisian KRS, input nilai, dan transkrip akademik.",
    features: [
      "Manajemen data mahasiswa dan dosen",
      "Pengaturan kurikulum dan mata kuliah",
      "Penjadwalan perkuliahan otomatis",
      "KRS online dengan sistem prasyarat",
      "Input nilai dan transkrip elektronik",
      "Monitoring masa studi",
    ],
    challenges:
      "Mengembangkan algoritma penjadwalan yang bisa menghindari bentrok jadwal dan memenuhi berbagai constraint akademik.",
    futureImprovements:
      "Pengembangan fitur mobile, integrasi dengan e-learning, dan sistem tracer study.",
    liveUrl: "https://siakad.example.com",
    sourceUrl: "https://github.com/rafif/siakad",
  },
  {
    slug: "sipesat",
    title: "SiPesat",
    description:
      "Sistem Informasi Pengelolaan Surat dan Arsip untuk mengelola surat masuk, keluar, disposisi, dan pengarsipan digital.",
    tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    images: [ph("SiPesat+1"), ph("SiPesat+2")],
    overview:
      "SiPesat adalah platform digitalisasi surat menyurat yang menggantikan sistem manual dengan workflow elektronik, mendukung disposisi berantai, tracking status, dan pengarsipan digital yang aman.",
    features: [
      "Surat masuk dan keluar terintegrasi",
      "Disposisi elektronik multi-level",
      "Tracking status surat real-time",
      "Pengarsipan digital dengan kategorisasi",
      "Tanda tangan elektronik",
      "Pencarian surat berbasis full-text",
    ],
    challenges:
      "Mengimplementasikan sistem disposisi yang fleksibel mengikuti struktur organisasi yang berbeda-beda serta menjaga keamanan dokumen.",
    futureImprovements:
      "Integrasi dengan TTE (Tanda Tangan Elektronik) resmi, OCR untuk dokumen scan, dan backup cloud otomatis.",
    liveUrl: "https://sipesat.example.com",
  },
  {
    slug: "sigetar",
    title: "SiGetar",
    description:
      "Sistem Informasi Geografis berbasis web untuk pemetaan dan analisis data kependudukan wilayah.",
    tech: ["CodeIgniter 4", "PostgreSQL", "Leaflet.js", "Bootstrap"],
    images: [ph("SiGetar+1"), ph("SiGetar+2"), ph("SiGetar+3")],
    overview:
      "SiGetar adalah aplikasi GIS yang memvisualisasikan data kependudukan dalam bentuk peta interaktif. Dilengkapi dengan fitur analisis spasial untuk mendukung pengambilan keputusan berbasis data kewilayahan.",
    features: [
      "Visualisasi peta interaktif dengan Leaflet",
      "Layer data kependudukan demografis",
      "Analisis spasial dan heatmap",
      "Filter data berdasarkan wilayah dan periode",
      "Export peta dan laporan",
      "Multi-layer markers dan clustering",
    ],
    challenges:
      "Mengoptimalkan rendering ribuan titik data di peta tanpa mengurangi performa serta mengintegrasikan data spasial dari berbagai format.",
    futureImprovements:
      "Integrasi dengan data real-time sensor IoT, 3D mapping, dan predictive analytics kependudukan.",
    sourceUrl: "https://github.com/rafif/sigetar",
  },
];

export const skills: Skill[] = [
  { name: "Laravel", category: "backend", level: 90, icon: "⚡" },
  { name: "CodeIgniter 4", category: "backend", level: 85, icon: "🔥" },
  { name: "Node.js", category: "backend", level: 75, icon: "💚" },
  { name: "Express.js", category: "backend", level: 70, icon: "🚀" },
  { name: "PostgreSQL", category: "database", level: 85, icon: "🐘" },
  { name: "MySQL", category: "database", level: 80, icon: "🗄️" },
  { name: "React", category: "frontend", level: 60, icon: "⚛️" },
  { name: "Next.js", category: "frontend", level: 55, icon: "▲" },
  { name: "Tailwind CSS", category: "frontend", level: 70, icon: "🎨" },
  { name: "Git", category: "tools", level: 85, icon: "📦" },
  { name: "Docker", category: "tools", level: 60, icon: "🐳" },
  { name: "REST API", category: "backend", level: 90, icon: "🔗" },
  { name: "Linux", category: "tools", level: 75, icon: "🐧" },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Developer Intern",
    company: "Tech Solutions Inc.",
    period: "Jan 2026 - Present",
    description:
      "Developing and maintaining RESTful APIs for internal tools. Optimizing database queries and improving API response times by 40%.",
    tech: ["Laravel", "PostgreSQL", "Redis"],
  },
  {
    id: "exp-2",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Jun 2025 - Dec 2025",
    description:
      "Built custom web applications for small businesses including POS systems, company profiles, and inventory management systems.",
    tech: ["CodeIgniter 4", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    id: "exp-3",
    role: "Junior Developer",
    company: "StartupHub",
    period: "Mar 2025 - May 2025",
    description:
      "Collaborated on building a marketplace platform. Contributed to frontend architecture, database design, and API integration.",
    tech: ["Node.js", "Express.js", "MongoDB", "Docker"],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Rafif110808", icon: "github" },
  { name: "Email", url: "mailto:rabbanirafif434@gmail.com", icon: "mail" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
