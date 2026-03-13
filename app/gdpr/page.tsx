import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR – Voltex El AB",
  description: "Information om hur Voltex El AB hanterar personuppgifter i enlighet med GDPR.",
};

export default function GdprPage() {
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
            GDPR – Dataskyddsförordningen
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
              Vad är GDPR?
            </h2>
            <p>
              GDPR (General Data Protection Regulation, på svenska
              Dataskyddsförordningen) är en EU-förordning som trädde i kraft den
              25 maj 2018. Den reglerar hur företag och organisationer får samla
              in, lagra och behandla personuppgifter om EU-medborgare. Voltex El
              AB följer fullt ut alla krav i GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              Grundprinciper för vår databehandling
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Lagenlighet",
                  desc: "Vi behandlar endast personuppgifter när vi har en laglig grund för det.",
                },
                {
                  title: "Ändamålsbegränsning",
                  desc: "Uppgifter samlas in för specifika, uttryckliga och legitima ändamål.",
                },
                {
                  title: "Uppgiftsminimering",
                  desc: "Vi samlar bara in uppgifter som är nödvändiga för ändamålet.",
                },
                {
                  title: "Noggrannhet",
                  desc: "Vi vidtar rimliga åtgärder för att hålla uppgifterna korrekta.",
                },
                {
                  title: "Lagringsminimering",
                  desc: "Uppgifter lagras inte längre än nödvändigt.",
                },
                {
                  title: "Säkerhet",
                  desc: "Vi skyddar dina uppgifter med lämpliga tekniska och organisatoriska åtgärder.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#f8fafc] rounded-lg p-4 border border-gray-100"
                >
                  <h3 className="font-semibold text-[#0f172a] text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              Rättsliga grunder för behandling
            </h2>
            <p className="mb-3">Vi behandlar personuppgifter med stöd av:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong>Avtal (Art. 6.1b):</strong> När behandling är nödvändig
                för att fullgöra ett avtal med dig, eller för åtgärder på din
                begäran innan avtal ingås.
              </li>
              <li>
                <strong>Rättslig förpliktelse (Art. 6.1c):</strong> När
                behandling är nödvändig för att uppfylla en rättslig skyldighet.
              </li>
              <li>
                <strong>Berättigat intresse (Art. 6.1f):</strong> När behandling
                är nödvändig för våra eller tredje parts berättigade intressen,
                förutsatt att dina rättigheter inte väger tyngre.
              </li>
              <li>
                <strong>Samtycke (Art. 6.1a):</strong> När du frivilligt givit
                ditt uttryckliga samtycke till behandling för ett eller flera
                specifika ändamål.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              Dina rättigheter enligt GDPR
            </h2>
            <div className="space-y-3">
              {[
                {
                  right: "Rätt till tillgång (Art. 15)",
                  desc: "Du har rätt att begära en kopia av de personuppgifter vi behandlar om dig.",
                },
                {
                  right: "Rätt till rättelse (Art. 16)",
                  desc: "Du har rätt att begära att felaktiga eller ofullständiga uppgifter korrigeras.",
                },
                {
                  right: "Rätt till radering (Art. 17)",
                  desc: 'Du har rätt att begära radering av dina uppgifter ("rätten att bli glömd") under vissa omständigheter.',
                },
                {
                  right: "Rätt till begränsning (Art. 18)",
                  desc: "Du har rätt att begära begränsning av behandlingen under vissa omständigheter.",
                },
                {
                  right: "Rätt till dataportabilitet (Art. 20)",
                  desc: "Du har rätt att få ut dina uppgifter i ett strukturerat, maskinläsbart format.",
                },
                {
                  right: "Rätt att göra invändningar (Art. 21)",
                  desc: "Du har rätt att invända mot behandling som baseras på berättigat intresse eller för direktmarknadsföring.",
                },
              ].map((item) => (
                <div
                  key={item.right}
                  className="flex gap-3 p-4 bg-[#f8fafc] rounded-lg border border-gray-100"
                >
                  <svg
                    className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[#0f172a] text-sm">
                      {item.right}
                    </div>
                    <div className="text-gray-500 text-sm mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              Så utövar du dina rättigheter
            </h2>
            <p className="mb-3">
              För att utöva någon av dina rättigheter, kontakta oss skriftligen:
            </p>
            <div className="bg-[#0f172a] text-white rounded-lg p-5 text-sm">
              <p className="font-semibold text-[#fbbf24] mb-2">
                Voltex El AB – Dataskyddsansvarig
              </p>
              <p>Elgatan 12, 111 22 Stockholm</p>
              <p>
                E-post:{" "}
                <a
                  href="mailto:gdpr@voltexel.se"
                  className="text-[#fbbf24] hover:underline"
                >
                  gdpr@voltexel.se
                </a>
              </p>
              <p>Telefon: 070-123 45 67</p>
            </div>
            <p className="mt-4 text-sm">
              Vi besvarar din begäran inom 30 dagar. Du har också rätt att lämna
              klagomål till tillsynsmyndigheten:{" "}
              <a
                href="https://www.imy.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f59e0b] hover:underline"
              >
                Integritetsskyddsmyndigheten (IMY)
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              Säkerhetsincidenter
            </h2>
            <p>
              Vid en personuppgiftsincident (dataintrång) som sannolikt medför
              risk för dina rättigheter och friheter, kommer vi att underrätta
              Integritetsskyddsmyndigheten inom 72 timmar. Om incidenten medför
              hög risk för dig personligen kommer vi även att informera dig
              direkt.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
