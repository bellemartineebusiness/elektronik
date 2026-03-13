type Reason = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const reasons: Reason[] = [
  {
    title: "Certifierade elektriker",
    description:
      "Alla våra elektriker är behöriga och certifierade enligt gällande standarder. Vi håller oss ständigt uppdaterade med senaste regler och tekniker.",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Snabb service",
    description:
      "Vi vet att tid är viktigt. Därför erbjuder vi snabb responstid och flexibla tider som passar dig – även kvällar och helger vid behov.",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Garanterat arbete",
    description:
      "Vi står bakom allt vi gör. Vårt arbete levereras med garanti och vi löser eventuella problem utan extra kostnad för dig.",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: "Prisvärt",
    description:
      "Konkurrenskraftiga priser utan dolda avgifter. Vi ger alltid ett tydligt fast pris i förväg så att du vet vad arbetet kostar.",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="varfor-oss" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#f59e0b] mb-3">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-sm font-semibold uppercase tracking-widest">
              Varför välja oss
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
            Din trygghet är vår prioritet
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Vi sätter alltid kunden i första rummet och levererar resultat som
            överstiger förväntningarna.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-[#f8fafc] rounded-xl p-6 border border-gray-100 hover:border-[#f59e0b]/40 hover:shadow-md transition-all group text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#f59e0b]/10 rounded-full text-[#f59e0b] mb-4 group-hover:bg-[#f59e0b] group-hover:text-white transition-all">
                {reason.icon}
              </div>
              <h3 className="text-base font-bold text-[#0f172a] mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
