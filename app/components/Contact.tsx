"use client";

import { useState, FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate async submit
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1200);
  }

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#0f172a] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent transition-all";

  return (
    <section id="kontakt" className="py-20 bg-white">
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-sm font-semibold uppercase tracking-widest">
              Kontakta oss
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
            Kom i kontakt med oss
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Fyll i formuläret så återkommer vi inom 24 timmar. Eller ring oss
            direkt för akuta ärenden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className="rounded-xl p-6 text-white"
              style={{
                background:
                  "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
              }}
            >
              <h3 className="text-lg font-bold mb-5">Kontaktuppgifter</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#f59e0b] mt-0.5 shrink-0"
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
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">Telefon</div>
                    <a
                      href="tel:+46701234567"
                      className="text-white font-medium text-sm hover:text-[#fbbf24] transition-colors"
                    >
                      070-123 45 67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#f59e0b] mt-0.5 shrink-0"
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
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">E-post</div>
                    <a
                      href="mailto:info@voltexel.se"
                      className="text-white font-medium text-sm hover:text-[#fbbf24] transition-colors"
                    >
                      info@voltexel.se
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#f59e0b] mt-0.5 shrink-0"
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
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">Adress</div>
                    <span className="text-white font-medium text-sm">
                      Elgatan 12, 111 22 Stockholm
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#f59e0b] mt-0.5 shrink-0"
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
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">
                      Öppettider
                    </div>
                    <span className="text-white font-medium text-sm">
                      Mån–Fre: 07:00–17:00
                    </span>
                    <br />
                    <span className="text-gray-400 text-xs">
                      Jour dygnet runt
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-xl p-5">
              <div className="flex items-center gap-2 text-[#0f172a] font-semibold text-sm mb-1">
                <svg
                  className="w-4 h-4 text-[#f59e0b]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13 2L4.09 12.97A1 1 0 0 0 5 14.5h6.5L10 22l9.91-10.97A1 1 0 0 0 19 9.5H12.5L13 2z" />
                </svg>
                Akuta elärenden
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Vid akuta elfel är vi tillgängliga dygnet runt. Ring vår
                jourlinje direkt för snabb hjälp.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center bg-[#f8fafc] rounded-xl p-10 text-center border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
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
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                  Tack för ditt meddelande!
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Vi har mottagit din förfrågan och återkommer inom 24 timmar.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#f59e0b] font-semibold text-sm hover:underline"
                >
                  Skicka ett nytt meddelande
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#f8fafc] rounded-xl p-6 sm:p-8 border border-gray-100 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-[#0f172a] mb-1.5 uppercase tracking-wide"
                    >
                      Namn <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ditt fullständiga namn"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#0f172a] mb-1.5 uppercase tracking-wide"
                    >
                      E-post <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="din@epost.se"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-[#0f172a] mb-1.5 uppercase tracking-wide"
                  >
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="070-000 00 00"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-[#0f172a] mb-1.5 uppercase tracking-wide"
                  >
                    Meddelande <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Beskriv ditt ärende, t.ex. typ av arbete och adress..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#f59e0b] hover:bg-[#fbbf24] disabled:opacity-60 text-[#0f172a] font-bold text-sm px-6 py-3.5 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Skickar...
                    </>
                  ) : (
                    <>
                      Skicka meddelande
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
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-xs text-center">
                  Genom att skicka formuläret godkänner du vår{" "}
                  <a
                    href="/integritetspolicy"
                    className="text-[#f59e0b] hover:underline"
                  >
                    integritetspolicy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
