type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Elinstallationer",
    description:
      "Kompletta elinstallationer för nybyggnation och renovering. Vi utför allt från enskilda uttag till fullständiga installationer i hem och kommersiella fastigheter.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13 2L4.09 12.97A1 1 0 0 0 5 14.5h6.5L10 22l9.91-10.97A1 1 0 0 0 19 9.5H12.5L13 2z" />
      </svg>
    ),
  },
  {
    title: "Reparationer",
    description:
      "Snabb och effektiv felsökning och reparation av elektriska fel. Vi är tillgängliga för akuta ärenden och utför allt arbete med hög kvalitet.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Smarta hem",
    description:
      "Installation av smarta hemsystem – belysning, termostat, larm och mer. Gör ditt hem mer komfort, energieffektivt och säkert med modern teknik.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Belysning",
    description:
      "Professionell design och installation av belysning för alla miljöer. Vi hjälper dig hitta rätt belysning som skapar rätt atmosfär och sparar energi.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    title: "Laddbox installation",
    description:
      "Installera laddstation för elbil hemma eller på arbetsplatsen. Certifierade installatörer, snabb service och BOVERKET-godkända lösningar.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Underhåll",
    description:
      "Regelbundet underhåll och besiktning av elanläggningar. Vi säkerställer att din anläggning uppfyller alla säkerhetskrav och fungerar optimalt.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#f59e0b] mb-3">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M13 2L4.09 12.97A1 1 0 0 0 5 14.5h6.5L10 22l9.91-10.97A1 1 0 0 0 19 9.5H12.5L13 2z" />
            </svg>
            <span className="text-sm font-semibold uppercase tracking-widest">
              Våra tjänster
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
            Allt inom el – under ett tak
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Vi utför alla typer av elarbeten med högsta kvalitet och säkerhet.
            Certifierade elektriker med lång erfarenhet.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 border-t-4 hover:shadow-md transition-shadow group"
              style={{ borderTopColor: "#f59e0b" }}
            >
              <div className="p-6">
                <div className="text-[#1e3a5f] mb-4 group-hover:text-[#f59e0b] transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-[#1e3a5f] text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            Begär kostnadsfri offert
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
