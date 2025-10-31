/**
 * useFacebookPixel Hook
 * Hook personalizado para manejar eventos de Facebook Pixel de manera consistente
 */

import { useCallback } from 'react'

/**
 * Interfaz para parámetros de eventos de Facebook Pixel
 */
interface FacebookPixelEventParams {
  content_name?: string
  content_category?: string
  value?: number
  currency?: string
}

/**
 * Hook para utilizar Facebook Pixel events en componentes React
 * @returns Objeto con funciones para disparar eventos de Facebook Pixel
 */
export function useFacebookPixel() {
  /**
   * Dispara un evento personalizado de Facebook Pixel
   * @param eventName - Nombre del evento
   * @param params - Parámetros adicionales del evento
   */
  const trackEvent = useCallback((eventName: string, params?: FacebookPixelEventParams) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, params)
    } else {
      console.warn('Facebook Pixel no está disponible', { eventName, params })
    }
  }, [])

  /**
   * Evento: ViewContent - Visualización de contenido específico
   * @param contentName - Nombre del contenido
   * @param category - Categoría del contenido
   * @param value - Valor del contenido
   * @param currency - Moneda (default: USD)
   */
  const trackViewContent = useCallback((
    contentName: string,
    category: string = 'Servicios',
    value?: number,
    currency: string = 'USD'
  ) => {
    trackEvent('ViewContent', {
      content_name: contentName,
      content_category: category,
      value,
      currency
    })
  }, [trackEvent])

  /**
   * Evento: Lead - Formulario enviado o contacto inicial
   */
  const trackLead = useCallback(() => {
    trackEvent('Lead')
  }, [trackEvent])

  /**
   * Evento: Contact - Clic en WhatsApp u otro contacto
   */
  const trackContact = useCallback(() => {
    trackEvent('Contact')
  }, [trackEvent])

  /**
   * Evento: CompleteRegistration - Registro completado con email
   */
  const trackCompleteRegistration = useCallback(() => {
    trackEvent('CompleteRegistration')
  }, [trackEvent])

  /**
   * Evento: Purchase - Compra realizada
   * @param value - Valor de la compra
   * @param currency - Moneda (default: USD)
   */
  const trackPurchase = useCallback((value: number, currency: string = 'USD') => {
    trackEvent('Purchase', { value, currency })
  }, [trackEvent])

  return {
    trackViewContent,
    trackLead,
    trackContact,
    trackCompleteRegistration,
    trackPurchase,
    trackEvent
  }
}
