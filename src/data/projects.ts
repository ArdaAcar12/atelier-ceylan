export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Küçük Ev",
    category: "Konut",
    description: "Özelleştirilebilir bir konut tasarımı parametrik yöntemlerle, sürdürülebilir materyal kullanımı.",
    image: "/projects/project-1.png",
    gallery: [
      "/projects/project-1.png",
      "/projects/project-2.png",
      "/projects/project-3.jpg",
      "/projects/project-4.png",
      "/projects/project-5.jpg",
      "/projects/project-1.png",
      "/projects/project-2.png",
      "/projects/project-3.jpg",
      "/projects/project-4.png",
      "/projects/project-5.jpg",
    ],
  },
  {
    id: 2,
    title: "Ofis Mekanıği",
    category: "İş Yerleri",
    description: "Çalışma verimliliğini artıran açık hava ofis tasarımı, doğal ışık ve enerji verimliliği.",
    image: "/projects/project-2.png",
    gallery: [
      "/projects/project-2.png",
      "/projects/project-1.png",
      "/projects/project-4.png",
      "/projects/project-5.jpg",
      "/projects/project-3.jpg",
      "/projects/project-2.png",
      "/projects/project-1.png",
      "/projects/project-4.png",
      "/projects/project-5.jpg",
      "/projects/project-3.jpg",
    ],
  },
  {
    id: 3,
    title: "Salon Tasarımı",
    category: "Dahil Mekanlar",
    description: "Aile topluluk alanını yeniden tanımlayan minimalist salon, açık konsept tasarımı.",
    image: "/projects/project-3.jpg",
    gallery: [
      "/projects/project-3.jpg",
      "/projects/project-4.png",
      "/projects/project-5.jpg",
      "/projects/project-1.png",
      "/projects/project-2.png",
      "/projects/project-3.jpg",
      "/projects/project-4.png",
      "/projects/project-5.jpg",
      "/projects/project-1.png",
      "/projects/project-2.png",
    ],
  },
  {
    id: 4,
    title: "Kota Complex",
    category: "Kota Tasarımı",
    description: "Modern katma mimari çözümle kiracı yönetimi, yeşil bloklar ve toplu alanları.",
    image: "/projects/project-4.png",
    gallery: [
      "/projects/project-4.png",
      "/projects/project-5.jpg",
      "/projects/project-1.png",
      "/projects/project-2.png",
      "/projects/project-3.jpg",
      "/projects/project-4.png",
      "/projects/project-5.jpg",
      "/projects/project-1.png",
      "/projects/project-2.png",
      "/projects/project-3.jpg",
    ],
  },
  {
    id: 5,
    title: "Yeşil Büro",
    category: "Ofis",
    description: "Sürdürülebilir ofis tasarımı, maksimum güneş verimi ve hijyenik çalışma alanı.",
    image: "/projects/project-5.jpg",
    gallery: [
      "/projects/project-5.jpg",
      "/projects/project-1.png",
      "/projects/project-2.png",
      "/projects/project-3.jpg",
      "/projects/project-4.png",
      "/projects/project-5.jpg",
      "/projects/project-1.png",
      "/projects/project-2.png",
      "/projects/project-3.jpg",
      "/projects/project-4.png",
    ],
  },
];
