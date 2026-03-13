import Link from "next/link";

const services = [
  "Elinstallationer",
  "Reparationer",
  "Smarta hem",
  "Belysning",
  "Laddbox installation",
  "Underhåll",
];

const legalLinks = [
  { href: "/integritetspolicy", label: "Integritetspolicy" },
  { href: "/cookiepolicy", label: "Cookiepolicy" },
  { href: "/gdpr", label: "GDPR" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo + description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <svg
                className="w-7 h-7 text-[#f59e0b]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13 2L4.09 12.97A1 1 0 0 0 5 14.5h6.5L10 22l9.91-10.97A1 1 0 0 0 19 9.5H12.5L13 2z" />
              </svg>
              <span className="text-white font-bold text-lg tracking-tight group-hover:text-[#fbbf24] transition-colors">
                Voltex El AB
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Certifierade elektriker med mer än 15 års erfarenhet. Vi erbjuder
              säkra och pålitliga eltjänster för hem och företag i hela
              regionen.
            </p>
            <div className="flex gap-2">
              <span className="bg-[#1e3a5f] text-[#fbbf24] text-xs px-2.5 py-1 rounded-full font-medium">
                Behörig elmästare
              </span>
              <span className="bg-[#1e3a5f] text-[#fbbf24] text-xs px-2.5 py-1 rounded-full font-medium">
                ROT-avdrag
              </span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Tjänster
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#tjanster"
                    className="text-gray-400 hover:text-[#fbbf24] text-sm transition-colors flex items-center gap-1.5"
                  >
                    <svg
                      className="w-3 h-3 text-[#f59e0b] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#fbbf24] text-sm transition-colors flex items-center gap-1.5"
                  >
                    <svg
                      className="w-3 h-3 text-[#f59e0b] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#om-oss"
                  className="text-gray-400 hover:text-[#fbbf24] text-sm transition-colors flex items-center gap-1.5"
                >
                  <svg
                    className="w-3 h-3 text-[#f59e0b] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Om oss
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+46701234567"
                  className="text-gray-400 hover:text-[#fbbf24] text-sm transition-colors"
                >
                  070-123 45 67
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:info@voltexel.se"
                  className="text-gray-400 hover:text-[#fbbf24] text-sm transition-colors"
                >
                  info@voltexel.se
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-gray-400 text-sm">
                  Elgatan 12, 111 22 Stockholm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e3a5f] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Voltex El AB. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-[#fbbf24] text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
