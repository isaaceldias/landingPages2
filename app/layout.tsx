import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nayra Estética | Cuidado estético com intenção",
  description: "Projeto demonstrativo de landing page para uma clínica de estética facial, corporal e capilar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
