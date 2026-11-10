import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Atelier Ceylan - Mimariproje ve Tasarım Ofisi",
  description: "Atelier Ceylan, mimarlıkta parametrik tasarım ve dijital üretim ile modern, sürdürülebilir projeler yaratır.",
};

export default function Home() {
  return (
    <div className="min-h-full flex flex-col bg-background text-foreground">
      {/* Navbar (değiştirilmedi) */}
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
            <Link href="/#projects" className="text-foreground hover:text-primary transition-colors">Portfolyo</Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">Hakkımızda</Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">İletişim</Link>
          </nav>
          <Link href="#contact" className="btn-primary">
            İletişim
          </Link>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero: büyük mimari fotoğraf + etkileyici başlık */}
        <section className="relative w-full h-[70vh] md:h-[80vh]">
          <Image
            src="/projects/project-5.jpg"
            alt="Mimari mekân"
            fill
            sizes="100vw"
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <div className="text-center px-6">
              <h1 className="text-foreground text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1] mb-6">
                Mimarlık,<br />
                <span className="font-normal">dijital bir gerçek.</span>
              </h1>
              <p className="text-muted/60 text-lg md:text-xl max-w-xl mx-auto tracking-[0.05em] leading-relaxed">
                İnsan, mekan ve kültürel hafıza arasındaki ilişkiye<br />
                odaklı, sürdürülebilir ve bağlamcı tasarım.
              </p>
            </div>
          </div>
        </section>

        {/* Tüm projeler (veri kaynağı: src/data/projects.ts) */}
        <section id="projects" className="py-24 px-6">
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
              <h2 className="text-foreground text-4xl md:text-5xl font-light tracking-tight">
                Seçme Projelerimiz
              </h2>
              <Link
                href="/#projects"
                className="text-muted/60 text-sm font-medium hover:text-primary transition-colors underline-offset-4"
              >
                Tümünü gör →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Hakkımızda (anasayfa sonu, footer'dan önce) */}
        <section id="about" className="py-24 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-foreground text-4xl md:text-5xl font-light tracking-tight mb-6">
                  Hakkımızda
                </h2>
                <p className="text-muted/60 text-lg md:text-xl leading-relaxed mb-10">
                  Ceylan Atelier olarak mimarlığı; insan, mekan ve kültürel hafıza
                  arasındaki ilişkiye güçlendiren bir araç olarak görüyoruz.
                  Çağdaş mimariyi dijital üretim ve parametrik tasarım yöntemleriyle
                  birleştirmeyi amaçlıyoruz.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-foreground mb-3">Misyon</h3>
                    <p className="text-muted/60 text-sm leading-relaxed">
                      Mimarlıkta parametrik tasarım ve dijital üretim ile modern,
                      sürdürülebilir projeler yaratmak. Her projeyi kullanıcılar için
                      işlevsel, estetik ve bağlam odaklı bir deneyim haline getirmek.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-3">Vizyon</h3>
                    <p className="text-muted/60 text-sm leading-relaxed">
                      Parametrik tasarım yaklaşımıyle çevre uyumlu ve yenilikçi
                      çözümler sunarak mimari pratiği modernleştirmek.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="h-full border-l border-border/40 pl-10">
                  <h3 className="font-medium text-foreground mb-4">Ekip</h3>
                  <ul className="space-y-4 text-sm text-muted/60 leading-relaxed">
                    <li>
                      <span className="font-medium text-foreground block">Arda Ceylan</span>
                      Mimari / Ortak — Parametrik tasarım ve dijital üretim odaklı mimari
                      projeler geliştirme.
                    </li>
                    <li>
                      <span className="font-medium text-foreground block">Ayşe Ceylan</span>
                      İç Mimarı — İç mekan tasarımı ve sürdürülebilir materyal seçimi.
                    </li>
                    <li>
                      <span className="font-medium text-foreground block">Mehmet Yılmaz</span>
                      Proje Yöneticisi — Proje koordinasyonu ve müşteri ilişkileri.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* İletişim & Sosyal Medya (anasayfa sonu, footer'dan önce) */}
        <section id="contact" className="py-24 px-6 bg-muted/10">
          <div className="container max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-foreground text-4xl md:text-5xl font-light tracking-tight mb-6">
                  İletişime Geçin
                </h2>
                <p className="text-muted/60 text-lg md:text-xl leading-relaxed mb-10">
                  Yeni bir proje başlatmak veya danışmak için aşağıdaki
                  kanallardan bize ulaşabilirsiniz.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary flex-shrink-0 mt-0.5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <p className="font-medium text-foreground mb-1">E-posta</p>
                      <a
                        href="mailto:ardaceylan03@gmail.com"
                        className="text-muted/60 hover:text-primary transition-colors text-sm"
                      >
                        ardaceylan03@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <p className="font-medium text-foreground mb-1">Telefon</p>
                      <a
                        href="tel:+905363917044"
                        className="text-muted/60 hover:text-primary transition-colors text-sm"
                      >
                        +90 536 391 70 44
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary flex-shrink-0 mt-0.5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <p className="font-medium text-foreground mb-1">Adres</p>
                      <p className="text-muted/60 text-sm leading-relaxed">
                        Ceylan Atelier<br />
                        İstanbul, Türkiye
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-6">Sosyal Medya</h3>
                <div className="flex gap-4">
                  {[
                    { label: "WhatsApp", href: "#" },
                    { label: "Instagram", href: "#" },
                    { label: "LinkedIn", href: "#" },
                    { label: "Twitter", href: "#" },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors"
                      aria-label={label}
                    >
                      {label === "WhatsApp" && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 12c0-4.89-3.99-8.89-8.89-8.89" />
                          <line x1="12" y1="17" x2="15.5" y2="12.5" />
                        </svg>
                      )}
                      {label === "Instagram" && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="17.5" x2="17.51" y2="17.5" />
                        </svg>
                      )}
                      {label === "LinkedIn" && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      )}
                      {label === "Twitter" && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7 7 0 0 0 23 3z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
