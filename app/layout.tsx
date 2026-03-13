import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voltex El AB – Professionella Eltjänster",
  description:
    "Voltex El AB erbjuder säkra och pålitliga elinstallationer, reparationer och smarta hemlösningar för hem och företag i hela regionen.",
  keywords:
    "elektriker, elinstallation, reparation, smart hem, laddbox, belysning, underhåll",
  openGraph: {
    title: "Voltex El AB – Professionella Eltjänster",
    description:
      "Säkra och pålitliga eltjänster för hem och företag. Certifierade elektriker med snabb service.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
