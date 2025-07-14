// Arreglo inicial de productos
let productos = [
  { nombre: "Aire Acondicionado Split 12000 BTU", precio: 300, descripcion: "Eficiencia energética A, ideal para habitaciones medianas." },
  { nombre: "Aire Acondicionado Inverter 18000 BTU", precio: 450, descripcion: "Tegnologia inverter para mayor ahorro de energia." },
  { nombre: "Aire Acondicionado Alta eficinecia 24000 BTU", precio: 670, descripcion: "Tecnología ecologico enfriamiento rapido ." }
];

// Función para renderizar la lista de productos
function renderizarProductos() {
  const lista = document.getElementById("product-list");
  lista.innerHTML = ""; // Limpiar la lista existente

  productos.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - $${producto.precio} USD - ${producto.descripcion}`;
    lista.appendChild(item);
  });
}

// Evento para manejar el envío del formulario
document.getElementById("product-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Obtener valores del formulario
  const nombre = document.getElementById("name").value.trim();
  const precio = parseFloat(document.getElementById("price").value);
  const descripcion = document.getElementById("description").value.trim();

  // Validar los campos
  if (nombre && !isNaN(precio) && descripcion) {
    // Agregar el nuevo producto al arreglo
    productos.push({ nombre, precio, descripcion });

    // Limpiar los campos del formulario
    document.getElementById("product-form").reset();

    // Volver a renderizar la lista de productos
    renderizarProductos();
  } else {
    alert("Por favor, completa todos los campos correctamente.");
  }
});

// Renderizar la lista de productos al cargar la página
document.addEventListener("DOMContentLoaded", renderizarProductos);
