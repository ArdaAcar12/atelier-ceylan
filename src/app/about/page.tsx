import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atelier Ceylan - Hakkımızda",
  description: "Atelier Ceylan hakkında, misyon, vizyon ve ekip bilgileri.",
};

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Arda Ceylan",
    role: "Mimari / Ortak",
    image: "/about/arda.jpg",
    bio: "Parametrik tasarım ve dijital üretim odaklı mimari projeler geliştirme.",
  },
  {
    id: 2,
    name: "Ayşe Ceylan",
    role: "İç Mimarı",
    image: "/about/ayse.jpg",
    bio: "İç mekan tasarımı ve sürdürülebilir materyal seçimi.",
  },
  {
    id: 3,
    name: "Mehmet Yılmaz",
    role: "Proje Yöneticisi",
    image: "/about/mehmet.jpg",
    bio: "Proje koordinasyonu ve müşteri ilişkileri.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 transition-colors duration-300 dark:bg-gray-900/80">
        <div className="container flex items-center justify-between h-20 px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Atelier Ceylan"
              width={40}
              height={40}
              className="dark:invert"
            />
            <span className="text-xl font-semibold tracking-tight">Atelier Ceylan</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Ana Sayfa</Link>
            <Link href="/#projects" className="font-medium text-primary">Portfolyo</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">İletişim</Link>
          </nav>
          <Link href="/contact" className="btn-primary">
            İletişim
          </Link>
        </div>
      </header>

      <main className="pt-20 pb-12">
        <section className="container py-24 px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4">
              Atelierimize Hoş Geldiniz
            </h1>
            <p className="text-lg text-muted/70 max-w-2xl mx-auto">
              Ceylan Atelier olarak mimarlığı; insan, mekan ve kültürel hafıza arasındaki ilişkiyi güçlendiren bir araç olarak görüyoruz.
            </p>
          </div>
        </section>

        <section className="container py-24 px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-bold text-4xl md:text-5xl tracking-tight text-foreground mb-6">
                Misyon ve Vizyon
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3">Misyon</h3>
                  <p className="text-muted/70 leading-relaxed">
                    Mimarlıkta parametrik tasarım ve dijital üretim ile modern, sürdürülebilir projeler yaratmak. Her projeyi kullanıcılar için işlevsel, estetik ve bağlam odaklı bir deneyim haline getirmek.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3">Vizyon</h3>
                  <p className="text-muted/70 leading-relaxed">
                    Mimarlık alanında global bir başvuru turnedi olmaksızın, parametrik tasarım yaklaşımıyle çevre uyumlu ve yenilikçi çözümler sunarak mimari pratiği modernleştirecek.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about/team-photo.jpg"
                alt="Atelier Ceylan ekip fotoğrafı"
                width={600}
                height={400}
                className="rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center">
                <p className="font-medium text-foreground">Atelier Ceylan</p>
                <p className="text-sm text-muted/70">Mimarisi ve Ekip</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-24 px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-2xl md:text-3xl tracking-tight text-foreground mb-4">Ekip</h3>
              <ul className="space-y-4 text-muted/70 text-sm">
                {teamMembers.map((member) => (
                  <li key={member.id} className="flex items-start gap-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p className="text-muted/60">{member.role}</p>
                      <p className="text-xs">{member.bio}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl md:text-3xl tracking-tight text-foreground mb-4">Nerede Bulunuruz</h3>
              <ul className="space-y-3 text-muted/70 text-sm">
                <li>
                  <a href="mailto:ardaceylan03@gmail.com" className="hover:text-primary transition-colors">
                    ardaceylan03@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+905363917044" className="hover:text-primary transition-colors">
                    +90 536 391 70 44
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="dark:invert"
                  />
                  <a href="https://www.instagram.com/arda_ceyln/" className="text-primary hover:underline">
                    @arda_ceyln
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="dark:invert"
                  />
                  <a href="https://www.linkedin.com/in/arda-ceylan-432851298/" className="text-primary hover:underline">
                    Arda Ceylan
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl md:text-3xl tracking-tight text-foreground mb-4">Proje Deneyimimiz</h3>
              <p className="text-muted/70 text-sm">
                Toplam {teamMembers.length} profesyonel ile {teamMembers.length * 3} proje tamamlanmış.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}