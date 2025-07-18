// Función para mostrar una alerta personalizada
function mostrarAlerta() {
  alert("Gracias por confiar en Servicool Zasa. ¡Te responderemos pronto!");
}

// Validación dinámica del formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
  // Verifica si el formulario es válido
  if (!this.checkValidity()) {
    event.preventDefault(); // Evita el envío
    event.stopPropagation(); // Detiene propagación
  }

  // Agrega clases de Bootstrap para mostrar validación
  this.classList.add("was-validated");
});
