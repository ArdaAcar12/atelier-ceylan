import { notFound } from "next/navigation";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id.toString() }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) return { title: "Proje Bulunamadı" };
  return {
    title: `${project.title} - Atelier Ceylan`,
    description:
      project.description ||
      `Atelier Ceylan tarafından tasarlanan ${project.category} projesi.`,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
