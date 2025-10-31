/**
 * Process.tsx
 * Sección del proceso con CTAs en cada paso del journey
 * Botones de acción en cada fase del proceso
 */

import React from 'react'
import { MessageCircle, Settings, Rocket, CheckCircle } from 'lucide-react'

/**
 * Process
 * Muestra el proceso de implementación con CTAs en cada etapa
 */
export default function Process(): JSX.Element {
  const WHATSAPP_LINK = 'https://api.whatsapp.com/send?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20SmartPrompt%20AI'
  const UPWORK_LINK = 'https://www.upwork.com/services/product/development-it-your-custom-ai-agent-in-just-48-hours-1960380554091163349?ref=project_share&tier=1'

  const steps = [
    {
      icon: <MessageCircle className="h-8 w-8 text-emerald-400" />,
      step: '01',
      title: 'Consulta Inicial',
      description: 'Analizamos tus necesidades específicas y definimos objetivos',
      duration: '15-30 min',
      ctaText: 'Agendar Consulta'
    },
    {
      icon: <Settings className="h-8 w-8 text-emerald-400" />,
      step: '02',
      title: 'Configuración Personalizada',
      description: 'Desarrollamos tu agente de IA según tus procesos y herramientas',
      duration: '24 horas',
      ctaText: 'Comenzar Configuración'
    },
    {
      icon: <Rocket className="h-8 w-8 text-emerald-400" />,
      step: '03',
      title: 'Implementación Rápida',
      description: 'Integramos y desplegamos tu agente en tus sistemas existentes',
      duration: '24 horas',
      ctaText: 'Ver Demo en Vivo'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-400" />,
      step: '04',
      title: 'Soporte Continuo',
      description: 'Monitoreo, optimización y soporte 24/7 para máximo rendimiento',
      duration: 'Continuo',
      ctaText: 'Conocer Soporte'
    }
  ]

  return (
    <section id="process" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">
            De la Idea a la Implementación en 48 Horas
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Un proceso probado que garantiza resultados desde el primer día
          </p>
        </div>

        <div className="relative">
          {/* Línea de conexión */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-500/20 hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Icono y número */}
                  <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                    <div className="hidden md:flex w-16 h-16 bg-emerald-500/10 rounded-full items-center justify-center border-2 border-emerald-500/30">
                      {step.icon}
                    </div>
                    <div className="flex md:hidden w-12 h-12 bg-emerald-500/10 rounded-full items-center justify-center border-2 border-emerald-500/30">
                      {step.icon}
                    </div>
                    <div className="md:hidden">
                      <div className="text-sm font-semibold text-emerald-400 mb-1">
                        Paso {step.step}
                      </div>
                      <div className="text-xs text-slate-400">
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-emerald-500/30 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="hidden md:flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-emerald-400">
                            Paso {step.step}
                          </span>
                          <span className="text-sm text-slate-400">
                            • {step.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-50 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-300 mb-4">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 lg:w-auto">
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center whitespace-nowrap"
                        >
                          {step.ctaText}
                        </a>
                        <a
                          href={UPWORK_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-slate-600 hover:bg-slate-700/50 text-slate-200 py-3 px-6 rounded-lg font-medium transition-colors text-center whitespace-nowrap"
                        >
                          Ver Proceso
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final del proceso */}
        <div className="text-center mt-16 bg-gradient-to-r from-slate-800 to-emerald-500/10 rounded-2xl p-8 border border-emerald-500/20">
          <h3 className="text-2xl font-bold text-slate-50 mb-4">
            ¿Listo para Comenzar?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            El primer paso es una consulta gratuita de 15 minutos. Sin compromiso, solo soluciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white py-4 px-8 rounded-lg font-medium transition-colors text-lg"
            >
              Comenzar Consulta Gratuita
            </a>
            <a
              href={UPWORK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:bg-slate-700/50 text-slate-200 py-4 px-8 rounded-lg font-medium transition-colors text-lg"
            >
              Ver Proceso Completo
            </a>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Respuesta en menos de 2 horas durante horario laboral
          </p>
        </div>
      </div>
    </section>
  )
}