"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.id}`} className="block">
      <article
        className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/5"
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            priority={project.id <= 3}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Search className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                İncele
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              {project.category}
            </span>
          </div>
          <h3 className="font-semibold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
      </article>
    </Link>
  );
}
