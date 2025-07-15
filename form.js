// form.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('preorderForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    try {
      await fetch(
        'https://smartpromptsolutions.app.n8n.cloud/webhook/ThVfomU8Uw97J4SN',
        {
          method: 'POST',
          mode: 'no-cors', // quítalo cuando el webhook permita CORS
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      window.location.href = 'gracias.html';
    } catch (err) {
      console.error('Error al enviar:', err);
      alert('⚠️ Hubo un problema de conexión. Intenta de nuevo o contáctanos por WhatsApp.');
    }
  });
});
