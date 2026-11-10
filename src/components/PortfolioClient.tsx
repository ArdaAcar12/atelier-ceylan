"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LayoutGrid } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const categories = ["Tümü", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function PortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");

  const filteredProjects =
    selectedCategory === "Tümü"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
              href="/portfolio"
              className="font-medium text-primary"
              aria-current="page"
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

      <main className="pt-20 pb-12">
        <section className="container py-20 px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary"
              >
                <LayoutGrid className="w-6 h-6" />
              </div>
              <h1 className="font-bold text-5xl md:text-6xl tracking-tight">
                Proje Galerisi
              </h1>
            </div>
            <p className="text-lg text-muted/70 max-w-2xl mx-auto">
              Ceylan Atelier tarafından tasarlan ve uygulanan seçme proje
              örnekleri. Resimleri tıklayarak proje sayfasına gidebilirsiniz.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 border ${
                    selectedCategory === cat
                      ? "bg-primary text-white border-primary"
                      : "bg-transparent text-foreground/70 border-border/50 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
