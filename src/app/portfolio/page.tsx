import type { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";

export const metadata: Metadata = {
  title: "Atelier Ceylan - Portfolyo",
  description: "Atelier Ceylan tarafından tasarlan ve uygulanan proje örnekleri.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
