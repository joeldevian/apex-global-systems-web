"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, XCircle } from "lucide-react";
import { company } from "@/content/company";
import { SERVICE_INTEREST_VALUES, serviceInterestOptions, type ServiceInterestValue } from "@/content/services";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { submitContact, ApiError } from "@/lib/api";

const schema = z.object({
  name: z.string().min(2, "Ingresa al menos 2 caracteres"),
  email: z.string().email("Ingresa un correo válido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceInterest: z.enum(SERVICE_INTEREST_VALUES),
  message: z.string().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)"),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

export function Contact({ defaultService }: { defaultService?: ServiceInterestValue }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { serviceInterest: defaultService ?? "no-seguro" },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("loading");
    try {
      await submitContact({
        ...values,
        botcheck: honeypotRef.current?.value,
        pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
      });
      setStatus("success");
      reset();
    } catch (err) {
      setErrorMessage(
        err instanceof ApiError
          ? err.message
          : "Ocurrió un error inesperado. Intenta nuevamente.",
      );
      setStatus("error");
    }
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    company.contact.address,
  )}&output=embed`;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-base leading-relaxed text-brand-gray">
            Cuéntanos qué necesita tu negocio y te respondemos con un
            diagnóstico inicial gratuito.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <RevealOnScroll variants={slideInLeft} className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <input
                ref={honeypotRef}
                type="text"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-black">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full border border-brand-sand bg-brand-bg px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-red"
                  />
                  {errors.name ? (
                    <p className="mt-1.5 text-xs text-brand-red">{errors.name.message}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-black">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full border border-brand-sand bg-brand-bg px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-red"
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs text-brand-red">{errors.email.message}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-black">
                    Teléfono <span className="text-brand-gray">(opcional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full border border-brand-sand bg-brand-bg px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-red"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-brand-black">
                    Empresa <span className="text-brand-gray">(opcional)</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register("company")}
                    className="w-full border border-brand-sand bg-brand-bg px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-red"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceInterest" className="mb-1.5 block text-sm font-medium text-brand-black">
                  ¿Qué te interesa?
                </label>
                <select
                  id="serviceInterest"
                  defaultValue={defaultService ?? "no-seguro"}
                  {...register("serviceInterest")}
                  className="w-full border border-brand-sand bg-brand-bg px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-red"
                >
                  {serviceInterestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-black">
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full resize-none border border-brand-sand bg-brand-bg px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-red"
                />
                {errors.message ? (
                  <p className="mt-1.5 text-xs text-brand-red">{errors.message.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-brand-redDeep disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando…
                  </>
                ) : (
                  "Enviar mensaje"
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-brand-black"
                  >
                    <CheckCircle2 size={18} className="text-brand-red" />
                    Gracias — recibimos tu mensaje y te contactaremos pronto.
                  </motion.p>
                ) : null}
                {status === "error" ? (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-brand-gray"
                  >
                    <XCircle size={18} className="text-brand-red" />
                    {errorMessage}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </form>
          </RevealOnScroll>

          <RevealOnScroll variants={slideInRight} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-brand-red" />
                <div>
                  <p className="text-sm font-semibold text-brand-black">Dirección</p>
                  <p className="text-sm text-brand-gray">{company.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="mt-0.5 flex-shrink-0 text-brand-red" />
                <div>
                  <p className="text-sm font-semibold text-brand-black">Correo</p>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-sm text-brand-gray hover:text-brand-red"
                  >
                    {company.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="mt-0.5 flex-shrink-0 text-brand-red" />
                <div>
                  <p className="text-sm font-semibold text-brand-black">WhatsApp / Teléfono</p>
                  <a
                    href={company.contact.whatsappLink}
                    className="text-sm text-brand-gray hover:text-brand-red"
                  >
                    {company.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="aspect-[4/3] w-full overflow-hidden rounded-sm">
                <iframe
                  src={mapSrc}
                  title="Ubicación de Apex Global Systems"
                  loading="lazy"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
