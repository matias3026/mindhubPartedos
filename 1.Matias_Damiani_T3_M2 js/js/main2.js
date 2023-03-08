// 1. Añadir eventos "change" a los checkboxes
const checkboxes = document.querySelectorAll('input[name="filtro"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", actualizarFiltro);
});

// 2. Función para actualizar el filtro
function actualizarFiltro() {
  const elementos = document.querySelectorAll(".elemento");
  const checkboxesSeleccionados = document.querySelectorAll('input[name="filtro"]:checked');

  if (checkboxesSeleccionados.length === 0) { // Mostrar todos los elementos si no hay ningún checkbox seleccionado
    elementos.forEach((elemento) => {
      elemento.style.display = "block";
    });
    return;
  }

  elementos.forEach((elemento) => {
    // Comprobar si el elemento cumple con los criterios de filtrado
    let mostrarElemento = false;
    checkboxesSeleccionados.forEach((checkbox) => {
      if (elemento.classList.contains(checkbox.value)) {
        mostrarElemento = true;
      }
    });

    // Mostrar u ocultar el elemento
    if (mostrarElemento) {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";
    }
  });
}

// 3. Mostrar todos los elementos por defecto
window.addEventListener("load", function() {
  const elementos = document.querySelectorAll(".elemento");
  elementos.forEach((elemento) => {
    elemento.style.display = "block";
  });
});
