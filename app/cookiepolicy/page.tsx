import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookiepolicy – Voltex El AB",
  description: "Information om hur Voltex El AB använder cookies på sin webbplats.",
};

export default function CookiepolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#fbbf24] text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Tillbaka till startsidan
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Cookiepolicy
          </h1>
          <p className="text-gray-400 mt-3 text-sm">
            Senast uppdaterad: 1 januari 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              1. Vad är cookies?
            </h2>
            <p>
              Cookies är små textfiler som lagras på din enhet när du besöker en
              webbplats. De hjälper webbplatsen att komma ihåg dina inställningar
              och förbättrar din upplevelse vid återbesök. Cookies kan inte skada
              din enhet eller innehålla skadlig kod.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              2. Vilka typer av cookies använder vi?
            </h2>
            <div className="space-y-4">
              <div className="bg-[#f8fafc] rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-[#0f172a] mb-1 text-sm">
                  Nödvändiga cookies
                </h3>
                <p className="text-sm text-gray-500">
                  Dessa cookies är nödvändiga för att webbplatsen ska fungera
                  korrekt. De kan inte stängas av i våra system. De lagrar inga
                  personligt identifierbara uppgifter.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-[#0f172a] mb-1 text-sm">
                  Analyscookies
                </h3>
                <p className="text-sm text-gray-500">
                  Vi använder analyscookies (t.ex. Google Analytics) för att
                  förstå hur besökare interagerar med webbplatsen. Alla uppgifter
                  är anonymiserade och aggregerade.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-[#0f172a] mb-1 text-sm">
                  Funktionscookies
                </h3>
                <p className="text-sm text-gray-500">
                  Dessa cookies möjliggör förbättrad funktionalitet och
                  personalisering, som att komma ihåg dina preferenser.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-[#0f172a] mb-1 text-sm">
                  Marknadsföringscookies
                </h3>
                <p className="text-sm text-gray-500">
                  Dessa cookies används för att visa relevanta annonser. De kan
                  ställas in av oss eller av tredjepartsleverantörer. Du kan
                  välja bort dessa.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              3. Hur länge lagras cookies?
            </h2>
            <p className="mb-3">
              Cookies lagras under olika tidsperioder beroende på typ:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                <strong>Sessionscookies:</strong> Raderas automatiskt när du
                stänger webbläsaren.
              </li>
              <li>
                <strong>Beständiga cookies:</strong> Lagras under en angiven
                period (vanligtvis 30 dagar till 2 år) tills du raderar dem
                manuellt eller de löper ut.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              4. Hantera cookies
            </h2>
            <p className="mb-3">
              Du kan kontrollera och hantera cookies på flera sätt:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                Via din webbläsares inställningar – du kan blockera eller radera
                cookies.
              </li>
              <li>
                Via cookiemeddelandet på vår webbplats när du besöker oss för
                första gången.
              </li>
              <li>
                Observera att om du blockerar nödvändiga cookies kan delar av
                webbplatsen sluta fungera.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              5. Tredjepartscookies
            </h2>
            <p>
              Vi kan använda tjänster från tredje part som sätter egna cookies,
              exempelvis Google Analytics och sociala medieplattformar. Dessa
              tredje parters användning av cookies styrs av deras egna
              sekretesspolicyer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              6. Kontakt
            </h2>
            <p>
              Har du frågor om vår cookiepolicy? Kontakta oss på{" "}
              <a href="mailto:info@voltexel.se" className="text-[#f59e0b] hover:underline">
                info@voltexel.se
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
