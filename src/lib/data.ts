export interface OrbitNode {
	angle: string;
	index: number;
	name: string;
	category: string;
	description: string;
	iconType: 'code' | 'video' | 'motion' | 'photo' | 'design';
}

export interface EducationItem {
	id: string;
	index: number;
	tilt: string;
	level: string;
	logoClass: string;
	name: string;
	sub: string;
	description: string;
}

export interface ExperienceItem {
	id: string;
	index: number;
	period: string;
	image: string;
	alt: string;
	org: string;
	role: string;
	description: string;
}

export interface SoftwareItem {
	index: number;
	code: string;
	name: string;
	category: string;
	description: string;
}

export interface ProjectItem {
	id: string;
	index: number;
	rotation: string;
	category: 'Web' | 'Foto' | 'Video' | 'Motion' | 'Design';
	hue: number;
	image: string;
	alt: string;
	subtitle: string;
	title: string;
	projectType: string;
	role: string;
	tools: string;
	year: string;
	output: string;
	href?: string;
}

export const orbitNodes: OrbitNode[] = [
	{
		angle: '0deg',
		index: 0,
		name: 'Fullstack Developer',
		category: 'Development',
		description:
			'Membangun aplikasi web dan sistem informasi end-to-end: frontend modern (JavaScript, TypeScript, SvelteKit, Tailwind), backend logika (PHP, Node.js), dan basis data MySQL.',
		iconType: 'code'
	},
	{
		angle: '72deg',
		index: 1,
		name: 'Video Editing',
		category: 'Editing Video',
		description:
			'Menyusun timeline, memotong adegan, dan finishing video agar alur cerita kuat dan siap tayang di berbagai platform.',
		iconType: 'video'
	},
	{
		angle: '144deg',
		index: 2,
		name: 'Motion Graphics',
		category: 'Motion Graphics',
		description:
			'Membuat animasi, transisi, dan elemen visual yang bergerak lewat keyframe, untuk logo reveal, teks, dan visual pendukung video.',
		iconType: 'motion'
	},
	{
		angle: '216deg',
		index: 3,
		name: 'Photo Editing',
		category: 'Photo Editing',
		description:
			'Mengolah foto dengan koreksi warna, retouching, dan penyesuaian eksposur agar tampilan tetap konsisten di setiap hasil.',
		iconType: 'photo'
	},
	{
		angle: '288deg',
		index: 4,
		name: 'Graphic Design',
		category: 'Desain Visual',
		description:
			'Mendesain logo, ikon, poster, dan elemen grafis dalam bentuk vektor yang tetap tajam di semua ukuran.',
		iconType: 'design'
	}
];

export const educations: EducationItem[] = [
	{
		id: '01',
		index: 1,
		tilt: '-2.5deg',
		level: 'SD',
		logoClass: 'lg-sd',
		name: 'SDN Palebon 01',
		sub: 'Panda Raya',
		description:
			'Sekolah dasar tempat menempuh pendidikan awal dan membangun fondasi pengetahuan serta karakter di Jl. Panda Raya, Semarang.'
	},
	{
		id: '02',
		index: 2,
		tilt: '0deg',
		level: 'SMP',
		logoClass: 'lg-smp',
		name: 'SMPN 32 Semarang',
		sub: 'Ki Mangunsarkoro',
		description:
			'Lembaga pendidikan menengah pertama tempat mengembangkan potensi akademik, kedisiplinan, dan eksplorasi minat kreatif di Jl. Ki Mangunsarkoro, Semarang.'
	},
	{
		id: '03',
		index: 3,
		tilt: '2.5deg',
		level: 'SMK',
		logoClass: 'lg-smk',
		name: 'SMKN 8 Semarang',
		sub: 'Mugassari',
		description:
			'Sekolah Menengah Kejuruan di Mugassari, Semarang, Jurusan PPLG (Pengembangan Perangkat Lunak & Gim) yang memperkuat keahlian coding, video, dan desain.'
	}
];

export const experiences: ExperienceItem[] = [
	{
		id: '01',
		index: 1,
		period: '2024–Present',
		image: 'assets/images/xp-snapandev.webp',
		alt: 'SnapanDev SMKN 8 Semarang',
		org: 'SMKN 8 Semarang',
		role: 'Wakil Ketua Ekstrakurikuler SNAPANDEV',
		description:
			'Memimpin dan mengkoordinasikan komunitas developer siswa di SMKN 8 Semarang. Mengembangkan ekosistem teknologi, membina kolaborasi coding antarsiswa PPLG, serta menginisiasi berbagai inovasi proyek perangkat lunak dan web kreatif sekolah.'
	},
	{
		id: '02',
		index: 2,
		period: '2022–2024',
		image: 'assets/images/xp-osis.webp',
		alt: 'OSIS SMPN 32 Semarang',
		org: 'SMPN 32 Semarang',
		role: 'Bendahara & Sekbid TIK OSIS (2 Tahun)',
		description:
			'Mengemban amanah selama 2 periode kepengurusan dalam tata kelola keuangan organisasi serta memimpin Seksi Bidang TIK. Bertanggung jawab atas dokumentasi visual, publikasi media digital, dan digitalisasi berbagai kegiatan sekolah.'
	},
	{
		id: '03',
		index: 3,
		period: '2022–2023',
		image: 'assets/images/xp-kemendikbud.webp',
		alt: 'Agent of Change',
		org: 'Kemendikbud × SMPN 32',
		role: 'Agent of Change',
		description:
			'Terpilih sebagai agen perubahan sekolah (Program Roots Kemendikbud) untuk membangun iklim pergaulan positif bebas perundungan. Turut aktif menggerakkan komunikasi sebaya serta menyukseskan berbagai kegiatan keagamaan dan sosial sekolah.'
	},
	{
		id: '04',
		index: 4,
		period: '2022 & 2023',
		image: 'assets/images/xp-osn.webp',
		alt: 'OSN Matematika',
		org: 'Puspresnas / OSN',
		role: 'Delegasi OSN Matematika',
		description:
			'Mewakili sekolah dalam ajang bergengsi Olimpiade Sains Nasional (OSN) tingkat SMP bidang Matematika selama dua tahun berturut-turut. Mengasah ketajaman logika berpikir, daya analitis mendalam, dan pemecahan masalah yang sistematis.'
	}
];

export const softwares: SoftwareItem[] = [
	{
		index: 0,
		code: 'u-vc',
		name: 'VS Code',
		category: 'Code Editor & IDE',
		description:
			'Saya memakai Visual Studio Code sebagai lingkungan pengembangan utama: menulis kode TypeScript, JavaScript, PHP, dan SvelteKit dengan ekstensi linter, debugging, dan integrasi terminal bawaan.'
	},
	{
		index: 1,
		code: 'u-cc',
		name: 'CapCut',
		category: 'Video',
		description:
			'Saya memakai CapCut untuk editing video pendek yang cepat, seperti konten Q&A dan short video: caption, transisi, dan ritme potongan yang disesuaikan dengan TikTok dan Reels.'
	},
	{
		index: 2,
		code: 'u-dv',
		name: 'DaVinci Resolve',
		category: 'Video & Color',
		description:
			'Saya memakai DaVinci Resolve untuk color grading dan koreksi warna, supaya tampilan video lebih konsisten dan terasa lebih sinematik.'
	},
	{
		index: 3,
		code: 'u-ae',
		name: 'After Effects',
		category: 'Motion Design',
		description:
			'Saya memakai After Effects untuk motion graphics dan animasi: logo reveal, animasi teks, transisi, dan elemen visual yang digerakkan dengan keyframe.'
	},
	{
		index: 4,
		code: 'u-am',
		name: 'Alight Motion',
		category: 'Motion Design',
		description:
			'Saya memakai Alight Motion untuk animasi dan motion design yang cepat langsung dari HP, misalnya lyric video dan transisi pendek untuk media sosial.'
	},
	{
		index: 5,
		code: 'u-ps',
		name: 'Photoshop',
		category: 'Foto & Desain',
		description:
			'Saya memakai Photoshop untuk edit foto dan desain visual: retouching, manipulasi gambar, serta membuat thumbnail dan poster promosi.'
	},
	{
		index: 6,
		code: 'u-gh',
		name: 'GitHub',
		category: 'Version Control',
		description:
			'Saya memakai GitHub untuk manajemen kode dan kolaborasi repositori: tracking commit, branching, issue tracking, dan deployment kode proyek web modern.'
	},
	{
		index: 7,
		code: 'u-my',
		name: 'MySQL',
		category: 'Database Management',
		description:
			'Saya memakai MySQL untuk perancangan basis data relasional: mendesain tabel, relasi foreign key, optimasi query SQL terstruktur, dan integrasi backend API.'
	}
];

export const projects: ProjectItem[] = [
	{
		id: '001',
		index: 0,
		rotation: '-3deg',
		category: 'Web',
		hue: 210,
		image: 'assets/images/projects/project-01-qa-content.webp',
		alt: 'Lapor MPK SMKN 8 Semarang — M. Erel',
		subtitle: 'NO. 001 / 010 · Web & App',
		title: 'LAPOR MPK SMKN 8',
		projectType: 'School System',
		role: 'Fullstack Developer',
		tools: 'Flutter, PHP, MySQL',
		year: '2026',
		output: 'Web & Mobile App'
	},
	{
		id: '002',
		index: 1,
		rotation: '2.5deg',
		category: 'Web',
		hue: 268,
		image: 'assets/images/projects/project-02-sponsorship.webp',
		alt: 'Portal Ekstrakurikuler SNAPANDEV SMKN 8 Semarang',
		subtitle: 'NO. 002 / 010 · Web Platform',
		title: 'PORTAL SNAPANDEV',
		projectType: 'Organizational',
		role: 'Fullstack Developer',
		tools: 'SvelteKit, TypeScript, Tailwind',
		year: '2026',
		output: 'Web Platform'
	},
	{
		id: '003',
		index: 2,
		rotation: '-1.5deg',
		category: 'Motion',
		hue: 330,
		image: 'assets/images/projects/project-03-logo-reveal.webp',
		alt: '3D Logo Reveal Animation rel. × SNAPANDEV',
		subtitle: 'NO. 003 / 010 · Motion Graphics',
		title: 'LOGO REVEAL ANIMATION',
		projectType: 'Organizational',
		role: 'Motion Graphics Designer',
		tools: 'After Effects, Alight Motion',
		year: '2026',
		output: 'Animation'
	},
	{
		id: '004',
		index: 3,
		rotation: '3deg',
		category: 'Video',
		hue: 22,
		image: 'assets/images/projects/project-04-after-movie.webp',
		alt: 'Dokumentasi MPLS & Event SMKN 8 Semarang — M. Erel',
		subtitle: 'NO. 004 / 010 · Video · Event',
		title: 'DOKUMENTASI EVENT',
		projectType: 'Organizational',
		role: 'Videographer & Video Editor',
		tools: 'CapCut, DaVinci Resolve',
		year: '2025',
		output: 'Video'
	},
	{
		id: '005',
		index: 4,
		rotation: '-2.5deg',
		category: 'Foto',
		hue: 152,
		image: 'assets/images/projects/project-05-wedding.webp',
		alt: 'Night City Photography Semarang — M. Erel',
		subtitle: 'NO. 005 / 010 · Foto',
		title: 'NIGHT CITY PHOTOGRAPHY',
		projectType: 'Personal',
		role: 'Photographer & Editor',
		tools: 'Adobe Photoshop',
		year: '2025',
		output: 'Photo'
	},
	{
		id: '006',
		index: 5,
		rotation: '1.8deg',
		category: 'Foto',
		hue: 46,
		image: 'assets/images/projects/project-06-photo-editing.webp',
		alt: 'Street & Railway Color Grading Semarang — M. Erel',
		subtitle: 'NO. 006 / 010 · Foto',
		title: 'STREET COLOR GRADING',
		projectType: 'Personal',
		role: 'Photo Editor',
		tools: 'Adobe Photoshop',
		year: '2025',
		output: 'Photo'
	},
	{
		id: '007',
		index: 6,
		rotation: '-3.2deg',
		category: 'Video',
		hue: 192,
		image: 'assets/images/projects/project-07-creative-lesson.webp',
		alt: 'TikTok 2x2 Grid Shorts Generator — @reiforrel',
		subtitle: 'NO. 007 / 010 · Video · TikTok',
		title: 'SHORTS 2X2 GRID ENGINE',
		projectType: 'Personal',
		role: 'Creator & Developer',
		tools: 'Python, FFmpeg, CapCut',
		year: '2026',
		output: 'Video & Automation',
		href: 'https://www.tiktok.com/@reiforrel'
	},
	{
		id: '008',
		index: 7,
		rotation: '2.2deg',
		category: 'Motion',
		hue: 300,
		image: 'assets/images/projects/project-08-lyric-video.webp',
		alt: 'Typography Lyric Video — @reiforrel',
		subtitle: 'NO. 008 / 010 · Motion Graphics',
		title: 'TYPOGRAPHY LYRIC VIDEO',
		projectType: 'Personal',
		role: 'Motion Graphics Designer',
		tools: 'After Effects, Alight Motion',
		year: '2026',
		output: 'Animation',
		href: 'https://www.tiktok.com/@reiforrel'
	},
	{
		id: '009',
		index: 8,
		rotation: '-2.8deg',
		category: 'Design',
		hue: 190,
		image: 'assets/images/projects/project-09-properties.webp',
		alt: 'Event Properties & Social Media Kit SNAPANDEV & OSIS',
		subtitle: 'NO. 009 / 010 · Design',
		title: 'EVENT PROPERTIES DESIGN',
		projectType: 'Organizational',
		role: 'Graphic Designer',
		tools: 'Adobe Photoshop, Canva',
		year: '2026',
		output: 'Graphic Design'
	},
	{
		id: '010',
		index: 9,
		rotation: '2.6deg',
		category: 'Design',
		hue: 290,
		image: 'assets/images/projects/project-10-banner.webp',
		alt: 'Banner & Poster Open Recruitment SNAPANDEV SMKN 8 Semarang',
		subtitle: 'NO. 010 / 010 · Design',
		title: 'BANNER & POSTER EVENT',
		projectType: 'Organizational',
		role: 'Graphic Designer',
		tools: 'Adobe Photoshop, Canva',
		year: '2026',
		output: 'Graphic Design'
	}
];

export const profile = {
	name: 'Erel',
	fullName: 'M. Erel',
	major: 'Jurusan PPLG',
	role: 'Fullstack Developer | Video Editor | UI Designer',
	bio1: "I'm Erel, a passionate PPLG student who enjoys exploring the world of technology and digital innovation. I have a strong interest in fullstack development, UI design, and creative digital projects.",
	bio2: 'I love turning ideas into functional and visually appealing experiences. Always curious, continuously learning, and driven to improve my skills while creating something meaningful through technology.',
	email: 'owekmessi@gmail.com',
	phone: '081234395899',
	instagram: '@rel.mes',
	tiktok: '@reiforrel',
	youtube: 'Relmes Channel'
};
