/**
 * TrustSignals.tsx
 * Sección de señales de confianza con CTAs estratégicos adicionales
 * Incluye botones de WhatsApp y Upwork en cada tarjeta de confianza
 */

import React from 'react'
import { Shield, Clock, Users, CheckCircle } from 'lucide-react'

/**
 * TrustSignals
 * Muestra señales de confianza con CTAs integrados en cada tarjeta
 */
export default function TrustSignals(): JSX.Element {
  const WHATSAPP_LINK = 'https://api.whatsapp.com/send?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20SmartPrompt%20AI'
  const UPWORK_LINK = 'https://www.upwork.com/services/product/development-it-your-custom-ai-agent-in-just-48-hours-1960380554091163349?ref=project_share&tier=1'

  const trustItems = [
    {
      icon: <Shield className="h-8 w-8 text-emerald-400" />,
      title: 'Garantía de Satisfacción',
      description: 'Paga solo cuando estés satisfecho con los resultados',
      ctaText: 'Consultar Garantía'
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-400" />,
      title: 'Implementación Rápida',
      description: 'Tu agente de IA listo en 48 horas o menos',
      ctaText: 'Comenzar Ahora'
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-400" />,
      title: '+100 Clientes Satisfechos',
      description: 'Empresas que ya automatizaron sus procesos',
      ctaText: 'Ver Casos de Éxito'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-400" />,
      title: 'Soporte 24/7',
      description: 'Asistencia continua durante y después de la implementación',
      ctaText: 'Soporte Inmediato'
    }
  ]

  return (
    <section className="py-16 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-50">
            Confiado por Empresas como la Tuya
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Más de 100 empresas ya automatizaron sus procesos con nuestros agentes de IA
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 mb-6 flex-grow">
                  {item.description}
                </p>
                <div className="space-y-3 w-full">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    {item.ctaText}
                  </a>
                  <a
                    href={UPWORK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-slate-600 hover:bg-slate-700/50 text-slate-200 text-center py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    Ver Planes en Upwork
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional al final de la sección */}
        <div className="text-center mt-12 bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-slate-50 mb-4">
            ¿Aún tienes dudas?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Habla directamente con nuestro equipo y resuelve todas tus preguntas en menos de 5 minutos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-8 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              Chat Inmediato por WhatsApp
            </a>
            <a
              href={UPWORK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:bg-slate-700/50 text-slate-200 py-3 px-8 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              Ver Todas las Soluciones
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}