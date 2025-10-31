/**
 * Hero.tsx
 * Sección principal del sitio con título, descripción, CTA y una imagen destacada.
 * Botones actualizados: Reservar → WhatsApp, Ver soluciones → Upwork
 */

import React from 'react'

/**
 * Hero
 * Muestra el encabezado principal y la imagen destacada con estilo responsivo.
 */
export default function Hero(): JSX.Element {
  // Enlaces actualizados según solicitud
  const WHATSAPP_LINK = 'https://api.whatsapp.com/send?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20SmartPrompt%20AI'
  const UPWORK_LINK = 'https://www.upwork.com/services/product/development-it-your-custom-ai-agent-in-just-48-hours-1960380554091163349?ref=project_share&tier=1'

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900/20 via-background to-background">
      {/* Contenido */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Texto */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Panel de IA para tu negocio
            </h1>
            <p className="mt-4 max-w-prose text-muted-foreground text-base sm:text-lg">
              Automatiza reservas, soporte y ventas con agentes de IA conectados a tus herramientas.
              Empieza hoy y convierte más conversaciones en clientes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Reservar
              </a>
              <a
                href={UPWORK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-accent/30 transition"
              >
                Ver soluciones
              </a>
            </div>
          </div>

          {/* Imagen destacada */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-emerald-600/10 blur-2xl md:-inset-6" aria-hidden="true" />
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-2xl">
              <img
                src="https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/68ed7bf9b6c48f161d2ff818/resource/1b1421e3-8ff2-4392-8195-494f2edbc8fe.png"
                alt="Persona sonriendo usando un teléfono en un lobby; panel de IA con botón Reservar."
                className="object-cover w-full h-auto"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
