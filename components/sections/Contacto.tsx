"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/content/i18n-context";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { siteConfig } from "@/data/siteConfig";

type SubmitState = "idle" | "loading" | "success" | "error";

export function Contacto() {
  const { t } = useLanguage();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", weddingDate: "", message: "", company: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("request_failed");
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <section id="contacto" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              {/* Honeypot anti-spam, oculto para personas, visible para bots */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("company")}
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-sans text-sm text-carbon/70">
                    {t.contact.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full rounded-lg border border-carbon/15 bg-white/70 px-4 py-3 text-carbon outline-none transition-colors duration-400 focus:border-champagne"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-700">{t.contact.form.errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-sans text-sm text-carbon/70">
                    {t.contact.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full rounded-lg border border-carbon/15 bg-white/70 px-4 py-3 text-carbon outline-none transition-colors duration-400 focus:border-champagne"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-700">{t.contact.form.errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block font-sans text-sm text-carbon/70">
                    {t.contact.form.phone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full rounded-lg border border-carbon/15 bg-white/70 px-4 py-3 text-carbon outline-none transition-colors duration-400 focus:border-champagne"
                  />
                </div>

                <div>
                  <label htmlFor="weddingDate" className="mb-2 block font-sans text-sm text-carbon/70">
                    {t.contact.form.weddingDate}
                  </label>
                  <input
                    id="weddingDate"
                    type="date"
                    {...register("weddingDate")}
                    className="w-full rounded-lg border border-carbon/15 bg-white/70 px-4 py-3 text-carbon outline-none transition-colors duration-400 focus:border-champagne"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-sans text-sm text-carbon/70">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t.contact.form.messagePlaceholder}
                  {...register("message")}
                  className="w-full resize-none rounded-lg border border-carbon/15 bg-white/70 px-4 py-3 text-carbon outline-none transition-colors duration-400 focus:border-champagne"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-700">{t.contact.form.errors.message}</p>
                )}
              </div>

              <Button type="submit" disabled={submitState === "loading"} className="w-full sm:w-auto">
                {submitState === "loading" ? t.contact.form.submitting : t.contact.form.submit}
              </Button>

              {submitState === "success" && (
                <p className="flex items-center gap-2 text-sm text-green-700">
                  <CheckCircle2 size={18} /> {t.contact.form.success}
                </p>
              )}
              {submitState === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-700">
                  <AlertCircle size={18} /> {t.contact.form.error}
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="rounded-2xl bg-carbon p-8 text-cream">
              <h3 className="font-serif text-xl">{t.contact.infoTitle}</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-champagne" />
                  <div>
                    <p className="text-cream/50">{t.contact.addressLabel}</p>
                    <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-champagne">
                      {siteConfig.address.full}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="mt-0.5 shrink-0 text-champagne" />
                  <div>
                    <p className="text-cream/50">{t.contact.phoneLabel}</p>
                    <a href={siteConfig.phoneHref} className="hover:text-champagne">
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="mt-0.5 shrink-0 text-champagne" />
                  <div>
                    <p className="text-cream/50">{t.contact.scheduleLabel}</p>
                    {siteConfig.schedule.map((s) => (
                      <p key={s.day}>
                        {s.day}: {s.hours}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-carbon/10 sm:aspect-video lg:aspect-[4/3]">
              <iframe
                src={siteConfig.mapsEmbedSrc}
                title="Ubicación de Dynamic Casaments en Sabadell"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
