// Activa las animaciones de entrada solo cuando JavaScript está disponible.
if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js");

  const observador = new IntersectionObserver((entradas, instancia) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        instancia.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll("section").forEach((seccion) => {
    observador.observe(seccion);
  });
}

// Carrito de demostración: actualiza la pantalla, no procesa pagos.
const contador = document.getElementById("contador");
const cantidad = document.getElementById("cantidad");
const total = document.getElementById("total");
let cantidadItems = 0;
let sumaTotal = 0;

document.querySelectorAll(".agregar").forEach((boton) => {
  boton.addEventListener("click", () => {
    const precio = Number(boton.dataset.precio);
    if (!Number.isFinite(precio) || precio < 0) return;

    cantidadItems += 1;
    sumaTotal += precio;
    contador.textContent = String(cantidadItems);
    cantidad.textContent = String(cantidadItems);
    total.textContent = `$${sumaTotal.toLocaleString("es-CO")}`;

    contador.classList.remove("rebote");
    void contador.offsetWidth;
    contador.classList.add("rebote");

    boton.textContent = "Agregado ✓";
    setTimeout(() => {
      boton.textContent = "Agregar";
    }, 1200);
  });
});

// Las opiniones aparecen solo en esta pantalla y no se guardan.
const formulario = document.getElementById("form-opinion");
const lista = document.getElementById("lista-opiniones");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const texto = document.getElementById("texto").value.trim();
  if (!nombre || !texto) return;

  const tarjeta = document.createElement("article");
  tarjeta.className = "nueva";

  const parrafo = document.createElement("p");
  parrafo.textContent = `“${texto}”`;

  const firma = document.createElement("strong");
  firma.textContent = nombre;

  tarjeta.append(parrafo, firma);
  lista.prepend(tarjeta);
  formulario.reset();
});
