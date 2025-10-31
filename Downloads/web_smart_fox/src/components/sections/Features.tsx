/**
 * Features.tsx
 * Sección de características con CTAs estratégicos en cada feature
 * Cada característica incluye botones de acción directa
 */

import React from 'react'
import { Bot, Zap, Shield, BarChart3 } from 'lucide-react'

/**
 * Features
 * Muestra características principales con CTAs integrados
 */
export default function Features(): JSX.Element {
  const WHATSAPP_LINK = 'https://api.whatsapp.com/send?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20SmartPrompt%20AI'
  const UPWORK_LINK = 'https://www.upwork.com/services/product/development-it-your-custom-ai-agent-in-just-48-hours-1960380554091163349?ref=project_share&tier=1'

  const features = [
    {
      icon: <Bot className="h-10 w-10 text-emerald-400" />,
      title: 'Agentes de IA Personalizados',
      description: 'Desarrollamos agentes específicos para tu industria y procesos únicos',
      benefits: ['Entrenamiento con tus datos', 'Integración con tus herramientas', 'Actualizaciones continuas'],
      ctaText: 'Personalizar Mi Agente'
    },
    {
      icon: <Zap className="h-10 w-10 text-emerald-400" />,
      title: 'Automatización Instantánea',
      description: 'Automatiza reservas, soporte y ventas desde el primer día',
      benefits: ['Implementación en 48h', 'Sin curva de aprendizaje', 'Resultados medibles'],
      ctaText: 'Automatizar Procesos'
    },
    {
      icon: <Shield className="h-10 w-10 text-emerald-400" />,
      title: 'Seguridad Empresarial',
      description: 'Tus datos protegidos con estándares enterprise-level',
      benefits: ['Cifrado end-to-end', 'Cumplimiento normativo', 'Backups automáticos'],
      ctaText: 'Consultar Seguridad'
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-emerald-400" />,
      title: 'Analíticas en Tiempo Real',
      description: 'Monitorea el performance de tu agente y optimiza continuamente',
      benefits: ['Dashboard interactivo', 'Métricas clave', 'Reportes automáticos'],
      ctaText: 'Ver Demo de Métricas'
    }
  ]

  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">
            Todo lo que Necesitas en un Solo Lugar
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Desde la configuración inicial hasta el soporte continuo, tenemos todo cubierto
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-lg mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-slate-400">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto space-y-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    {feature.ctaText}
                  </a>
                  <a
                    href={UPWORK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-slate-600 hover:bg-slate-800 text-slate-200 text-center py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    Ver en Upwork
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA destacado al final */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-500/10 to-slate-800/30 rounded-2xl p-8 border border-emerald-500/20">
          <h3 className="text-2xl font-bold text-slate-50 mb-4">
            ¿No Encuentras lo que Buscas?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Desarrollamos soluciones personalizadas para necesidades específicas. Cuéntanos tu caso y creamos la solución perfecta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white py-4 px-8 rounded-lg font-medium transition-colors text-lg"
            >
              Solicitar Solución Personalizada
            </a>
            <a
              href={UPWORK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:bg-slate-800 text-slate-200 py-4 px-8 rounded-lg font-medium transition-colors text-lg"
            >
              Ver Proyectos Similares
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}