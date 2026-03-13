const stats = [
  { value: "2008", label: "Grundat" },
  { value: "1 200+", label: "Genomförda projekt" },
  { value: "98%", label: "Nöjda kunder" },
  { value: "15+", label: "Års erfarenhet" },
];

export default function About() {
  return (
    <section
      id="om-oss"
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <div className="inline-flex items-center gap-2 text-[#f59e0b] mb-4">
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
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              <span className="text-sm font-semibold uppercase tracking-widest">
                Om oss
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              Mer än 15 år av{" "}
              <span className="text-[#f59e0b]">pålitliga eltjänster</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5">
              Voltex El AB grundades 2008 med en enkel vision: att leverera
              högkvalitativa eltjänster med fokus på säkerhet, pålitlighet och
              kundnöjdhet. Vi har sedan dess vuxit till ett av regionens mest
              betrodda elföretag.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-5">
              Vårt team består av erfarna, certifierade elektriker som håller sig
              uppdaterade med de senaste reglerna och teknologierna inom
              elbranschen. Vi arbetar med både privatpersoner och företag och
              erbjuder helhetslösningar inom el.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Hos oss får du alltid ett fast pris utan dolda avgifter, snabb
              service och ett arbete som utförs med stolthet och noggrannhet.
              Din trygghet och säkerhet är vår högsta prioritet.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 bg-[#0f172a]/60 border border-[#f59e0b]/30 text-[#fbbf24] text-sm px-3 py-1.5 rounded-full">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Behörig elmästare
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#0f172a]/60 border border-[#f59e0b]/30 text-[#fbbf24] text-sm px-3 py-1.5 rounded-full">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Försäkrat arbete
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#0f172a]/60 border border-[#f59e0b]/30 text-[#fbbf24] text-sm px-3 py-1.5 rounded-full">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ROT-avdrag
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#0f172a]/60 border border-[#f59e0b]/30 text-[#fbbf24] text-sm px-3 py-1.5 rounded-full">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Godkänd av Elsäkerhetsverket
              </span>
            </div>
          </div>

          {/* Stats column */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#f59e0b] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
