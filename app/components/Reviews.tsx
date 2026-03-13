type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Anna Lindström",
    location: "Stockholm",
    rating: 5,
    text: "Voltex El AB installerade laddbox till vår elbil och utförde arbetet snabbt och professionellt. Elektriker kom på utsatt tid, jobbade städat och förklarade allt tydligt. Kan varmt rekommendera!",
  },
  {
    name: "Marcus Johansson",
    location: "Göteborg",
    rating: 5,
    text: "Vi anlitade Voltex för en total elomsättning av vår villa. Fantastiskt arbete från start till slut. Priset var konkurrenskraftigt och kvaliteten var utmärkt. ROT-avdraget underlättade mycket.",
  },
  {
    name: "Petra Karlsson",
    location: "Malmö",
    rating: 5,
    text: "Hade ett akut elfel sent en fredag kväll. De svarade direkt och hade en elektriker hos oss inom en timme. Professionellt, snabbt och till ett rimligt pris. Voltex är mitt förstaval framöver.",
  },
];

function StarIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-[#f59e0b]" aria-label={`${count} av 5 stjärnor`}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="recensioner" className="py-20 bg-[#f8fafc]">
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
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="text-sm font-semibold uppercase tracking-widest">
              Kundrecensioner
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
            Vad våra kunder säger
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Vi är stolta över vårt rykte och de relationer vi byggt med våra
            kunder genom åren.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-[#f59e0b]/30"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {review.text}
              </p>

              <div>
                <Stars count={review.rating} />
                <div className="mt-2">
                  <div className="font-semibold text-[#0f172a] text-sm">
                    {review.name}
                  </div>
                  <div className="text-gray-400 text-xs">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <div className="flex gap-0.5 text-[#f59e0b]">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="text-[#0f172a] font-bold text-sm">
              5.0 / 5.0
            </span>
            <span className="text-gray-400 text-sm">– Genomsnittligt betyg</span>
          </div>
        </div>
      </div>
    </section>
  );
}
