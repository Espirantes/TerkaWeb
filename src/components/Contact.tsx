"use client";

import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-text md:text-4xl">Kontakt</h2>
          <p className="mt-4 text-lg text-text-light">
            Neváhejte nás kontaktovat s jakýmkoli dotazem.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-text">
                Domov důchodců Řepy
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-text">Adresa</p>
                    <p className="text-text-light">
                      Žalanského 68/54
                      <br />
                      163 00 Praha 17 — Řepy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-text">Telefon</p>
                    <a
                      href="tel:+420222333444"
                      className="text-primary hover:underline"
                    >
                      +420 222 333 444
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-text">E-mail</p>
                    <a
                      href="mailto:info@ddrepy.cz"
                      className="text-primary hover:underline"
                    >
                      info@ddrepy.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-text">Návštěvní hodiny</p>
                    <p className="text-text-light">
                      Denně 9:00 — 18:00
                      <br />
                      Po domluvě i mimo tyto hodiny
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-text">Napište nám</h3>

            {status === "sent" ? (
              <div className="mt-6 rounded-xl bg-primary/10 p-6 text-center">
                <p className="text-lg font-semibold text-primary">
                  Děkujeme za zprávu!
                </p>
                <p className="mt-2 text-text-light">
                  Ozveme se vám co nejdříve.
                </p>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-text"
                  >
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-secondary bg-cream px-4 py-3 text-text outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-text"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-secondary bg-cream px-4 py-3 text-text outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-text"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-xl border border-secondary bg-cream px-4 py-3 text-text outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-text"
                  >
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-secondary bg-cream px-4 py-3 text-text outline-none transition-colors focus:border-primary"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xl bg-accent px-6 py-4 font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-50"
                >
                  {status === "sending" ? "Odesílání..." : "Odeslat zprávu"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
