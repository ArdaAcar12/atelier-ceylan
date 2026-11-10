"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ImageViewer from "@/components/ImageViewer";
import type { Project } from "@/data/projects";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [viewerSrc, setViewerSrc] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 transition-colors duration-300 dark:bg-gray-900/80 border-b border-border/50">
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
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link
              href="/#projects"
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolyo
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              Hakkımızda
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              İletişim
            </Link>
          </nav>
          <Link href="/contact" className="btn-primary hidden sm:block">
            İletişim
          </Link>
        </div>
      </header>

      <main className="pt-24 pb-12">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8 pl-6"
        >
          ← Projelerimize Dön
        </Link>

        <section className="container px-6">
          <div className="max-w-5xl mx-auto">
            {/* Üstte geniş banner benzeri ana resim */}
            <div className="relative h-[55vh] md:h-[70vh] bg-gray-100 dark:bg-gray-800 overflow-hidden mb-12 cursor-pointer group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover w-full h-full group-hover:opacity-96 transition-opacity duration-300"
                onClick={() => setViewerSrc(project.image)}
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span
                  className="inline-block text-[11px] font-semibold uppercase tracking-wider text-white bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/20 mb-4 block"
                >
                  {project.category}
                </span>
                <h1 className="text-foreground text-4xl md:text-5xl font-bold leading-tight">
                  {project.title}
                </h1>
              </div>
            </div>

            {/* Açıklama */}
            <div className="space-y-6 mb-10">
              <div>
                <h2 className="text-foreground font-bold text-xl tracking-tight mb-3">
                  Proje Hakkında
                </h2>
                <p className="text-muted/80 leading-relaxed text-lg">
                  {project.description ||
                    "Proje açıklaması buraya gelecek. Detayları kendinize göre düzenleyebilirsiniz."}
                </p>
              </div>

              {/* İnceleme galerisi - 2 ser 2 ser */}
              <div className="pt-6 border-t border-border/50">
                <h2 className="text-foreground font-bold text-xl tracking-tight mb-6">
                  İnceleme
                </h2>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {project.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl bg-border overflow-hidden relative group cursor-pointer"
                      onClick={() => setViewerSrc(img)}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} İnceleme ${i + 1}`}
                        fill
                        className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white text-sm font-medium">
                          İncele
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {viewerSrc && (
        <ImageViewer
          src={viewerSrc}
          alt={project.title}
          isOpen
          onClose={() => setViewerSrc(null)}
        />
      )}
    </div>
  );
}
