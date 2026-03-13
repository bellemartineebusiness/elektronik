import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy – Voltex El AB",
  description: "Voltex El AB:s integritetspolicy beskriver hur vi samlar in och behandlar dina personuppgifter.",
};

export default function IntegritetspolicyPage() {
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
            Integritetspolicy
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
              1. Personuppgiftsansvarig
            </h2>
            <p>
              Voltex El AB, organisationsnummer 556XXX-XXXX, med adress Elgatan
              12, 111 22 Stockholm, är personuppgiftsansvarig för behandlingen av
              dina personuppgifter. Kontakta oss på{" "}
              <a href="mailto:info@voltexel.se" className="text-[#f59e0b] hover:underline">
                info@voltexel.se
              </a>{" "}
              vid frågor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              2. Vilka uppgifter samlar vi in?
            </h2>
            <p className="mb-3">Vi samlar in följande kategorier av personuppgifter:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Namn och kontaktuppgifter (e-post, telefonnummer, adress)</li>
              <li>Kommunikationshistorik (e-postmeddelanden, formulärinlämningar)</li>
              <li>Tekniska uppgifter (IP-adress, webbläsartyp, besöksstatistik)</li>
              <li>Betalningsinformation vid fakturering</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              3. Ändamål och rättslig grund
            </h2>
            <p className="mb-3">
              Vi behandlar dina personuppgifter för följande ändamål:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong>Avtalsfullgörelse:</strong> För att utföra beställda
                tjänster och hantera kundrelationen.
              </li>
              <li>
                <strong>Rättslig förpliktelse:</strong> För att uppfylla
                bokförings- och skattemässiga krav.
              </li>
              <li>
                <strong>Berättigat intresse:</strong> För kundservice,
                marknadsföring och förbättring av våra tjänster.
              </li>
              <li>
                <strong>Samtycke:</strong> För nyhetsbrev och direktmarknadsföring,
                om du givit ditt samtycke.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              4. Lagring och radering
            </h2>
            <p>
              Vi lagrar dina personuppgifter så länge det är nödvändigt för att
              uppfylla de ändamål de samlades in för, eller så länge som lagen
              kräver. Kunduppgifter relaterade till avtal sparas i upp till 10 år
              i enlighet med bokföringslagen. Uppgifter som samlats in baserat på
              samtycke raderas när samtycket återkallas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              5. Dina rättigheter
            </h2>
            <p className="mb-3">Enligt GDPR har du rätt att:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Begära tillgång till dina personuppgifter</li>
              <li>Begära rättelse av felaktiga uppgifter</li>
              <li>Begära radering av dina uppgifter</li>
              <li>Begära begränsning av behandlingen</li>
              <li>Invända mot behandling baserad på berättigat intresse</li>
              <li>Begära dataportabilitet</li>
              <li>Återkalla samtycke när som helst</li>
            </ul>
            <p className="mt-3 text-sm">
              Kontakta oss på{" "}
              <a href="mailto:info@voltexel.se" className="text-[#f59e0b] hover:underline">
                info@voltexel.se
              </a>{" "}
              för att utöva dina rättigheter. Du har även rätt att lämna klagomål
              till Integritetsskyddsmyndigheten (IMY).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              6. Delning med tredje part
            </h2>
            <p>
              Vi delar inte dina personuppgifter med tredje part utan ditt
              samtycke, förutom när det krävs för att uppfylla avtal (t.ex.
              underleverantörer), rättsliga krav eller med betrodda
              tjänsteleverantörer som behandlar data på våra uppdrag och är
              bundna av oss.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">
              7. Kontakt
            </h2>
            <p>
              Vid frågor om vår integritetspolicy, kontakta oss:
              <br />
              Voltex El AB, Elgatan 12, 111 22 Stockholm
              <br />
              E-post:{" "}
              <a href="mailto:info@voltexel.se" className="text-[#f59e0b] hover:underline">
                info@voltexel.se
              </a>
              <br />
              Telefon: 070-123 45 67
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
