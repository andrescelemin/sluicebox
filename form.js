// form.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('preorderForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Recogemos todos los campos, incluidos los ocultos (_next, kit, etc.)
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mrbkwwrd', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        // Si recibimos 200 OK, redirigimos al thanks page definido en _next
        const nextUrl = form.querySelector('input[name="_next"]').value;
        window.location.href = nextUrl;
      } else {
        // Si Formspree devuelve un error, lo mostramos en consola y al usuario
        const errorData = await response.json();
        console.error('Error Formspree:', errorData);
        alert('⚠️ Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.');
      }
    } catch (err) {
      console.error('Error de conexión al enviar:', err);
      alert('⚠️ No se pudo conectar. Intenta nuevamente o contáctanos por WhatsApp.');
    }
  });
});
