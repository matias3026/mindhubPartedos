import data from './data.js';

let contenedorDeTarjetas = document.getElementById("recenPorMi");
let tarjetasOriginales = []; // arreglo para almacenar las tarjetas originales

for(let event of data.events){
    let card = document.createElement("div");
    card.className = "row";
    card.innerHTML = `
      <div class="card-body col-12 col-md-8">.col-12 .col-md-8" data-category="${event.category}">
          <img class="fotarget" src="${event.image}" class="card-img-top" alt="">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event.description} </p>
          <div class="precio">
              <p class="Price">${event.price}</p>
              <a href="#" class="btn btn-primary">xxxxxxxxxxx</a>
          </div>  
      </div>
    `;
    contenedorDeTarjetas.appendChild(card);
    tarjetasOriginales.push(card); // almacenamos la tarjeta original en el arreglo
}

// función para filtrar los eventos por categoría
function filtrarPorCategoria() {
  let categoriasSeleccionadas = [];
  let checkboxes = document.querySelectorAll('input[name=categoria]:checked');

  // obtenemos las categorías seleccionadas
  for (let checkbox of checkboxes) {
    categoriasSeleccionadas.push(checkbox.value);
  }

  // mostramos las tarjetas correspondientes a las categorías seleccionadas
  for (let tarjeta of tarjetasOriginales) {
    let categoria = tarjeta.querySelector('.card-body').dataset.category;
    if (categoriasSeleccionadas.includes(categoria) || categoriasSeleccionadas.length === 0 || (categoriasSeleccionadas.length === 1 && categoriasSeleccionadas[0] === 'todos')) {
      tarjeta.style.display = 'block';
    } else {
      tarjeta.style.display = 'none';
    }
  }
}

// crea los checkboxes y agrega el listener para filtrar los eventos
function crearCheckboxes() {
  var contenedor = document.getElementById("checkboxes");

  for (let categoria of ['Food Fair' ,'Museum','Music Concert', 'Costume Party', 'Race', 'Book Exchange', 'Cinema']) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "categoria";
    checkbox.value = categoria;
    var label = document.createElement("label");
    label.appendChild(document.createTextNode(categoria));
    label.appendChild(checkbox);
    contenedor.appendChild(label);

    checkbox.addEventListener('change', (event) => {
      filtrarPorCategoria();
    });
  }

  var checkboxTodos = document.createElement("input");
  checkboxTodos.type = "checkbox";
  checkboxTodos.name = "categoria";
  checkboxTodos.value = "todos";
  checkboxTodos.checked = true;
  var labelTodos = document.createElement("label");
  labelTodos.appendChild(document.createTextNode("Todos"));
  labelTodos.appendChild(checkboxTodos);
  contenedor.insertBefore(labelTodos, contenedor.firstChild);

  checkboxTodos.style.display = "none";
  labelTodos.style.display = "none";




  checkboxTodos.addEventListener('change', (event) => {
    let checkboxes = document.querySelectorAll('input[name=categoria]:not([value="todos"])');
    if (checkboxTodos.checked) {
      for (let checkbox of checkboxes) {
        checkbox.checked = false;
      }
    } else {
      for (let checkbox of checkboxes) {
        checkbox.checked = true;
      }
    }
    filtrarPorCategoria();
  });
}

crearCheckboxes();
