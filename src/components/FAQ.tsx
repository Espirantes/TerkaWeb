"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: FaqItem[];
}

const FALLBACK_ITEMS: FaqItem[] = [
  { question: "Jak podat žádost o umístění?", answer: "Žádost můžete podat osobně, poštou nebo e-mailem. K žádosti přiložte kopii občanského průkazu, lékařské zprávy a rozhodnutí o příspěvku na péči (pokud máte). Formulář žádosti je ke stažení na našich stránkách nebo k vyzvednutí na recepci." },
  { question: "Jaké jsou podmínky přijetí?", answer: "Přijímáme seniory od 65 let, kteří potřebují pravidelnou pomoc v každodenním životě. Podmínkou je podaná žádost, lékařské vyjádření a osobní pohovor. Přednost mají žadatelé s vyšším stupněm příspěvku na péči." },
  { question: "Co si mám vzít s sebou?", answer: "Osobní oblečení, hygienické potřeby, oblíbené předměty z domova (fotografie, knihy). Pokoj je plně vybaven nábytkem, ložním prádlem a ručníky. Můžete si přinést i vlastní menší nábytek po dohodě." },
  { question: "Jaké jsou návštěvní hodiny?", answer: "Návštěvy jsou vítány denně od 9:00 do 18:00. Po předchozí domluvě je možné dohodnout i návštěvu mimo tyto hodiny. Rodinní příslušníci se mohou účastnit i společných aktivit." },
  { question: "Je možné si domov předem prohlédnout?", answer: "Ano, osobní prohlídky domova pořádáme po předchozí domluvě, zpravidla ve všední dny od 10:00 do 15:00. Kontaktujte nás telefonicky nebo e-mailem." },
];

export function FAQ({ title, subtitle, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqItems = items ?? FALLBACK_ITEMS;

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text md:text-4xl">
            {title ?? "Časté dotazy"}
          </h2>
          <p className="mt-4 text-lg text-text-light">
            {subtitle ?? "Odpovědi na nejčastější otázky."}
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={item.question}
              className="overflow-hidden rounded-xl border border-secondary bg-cream"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-semibold text-text">
                  {item.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-text-light">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
