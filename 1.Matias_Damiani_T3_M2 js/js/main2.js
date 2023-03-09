import data from './data.js';

// funciones para insertar cards al HTML

let contenedorDeTarjetas = document.getElementById("recenPorMi");

for(let event of data.events){
    let card = document.createElement("div");
    card.className = "row";
    card.innerHTML = `

    
    <div class="card-body">
        <img class="fotarget" src="${event.image}" class="card-img-top" alt="">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description} </p>
        <div class="precio">
            <p class="Price">${event.price}</p>
            <a href="#" class="btn btn-primary">xxxxxxxxxxx</a>
        </div>
        
    </div>
    `;

   

    contenedorDeTarjetas.appendChild(card)
}
// funciones para filtrar con checks


let contienecheqs = document.getElementById("ul_cheqs"); //Selecciono mi contenedor de checkbox, el cual es un UL
let categoriasEvent = []; // Array para almacenar las categorías únicas, el cual va a pasar por un filtro con un IF
//Para tomar todas las categorias sin que se repitan


for(let event of data.events) { //recorro cada evento del array events, perteneciente a mi variable data (que contiene el data.js)
  if(!categoriasEvent.includes(event.category)) { // Verifica si la categoría ya está presente en el array
    // Si el array uniqueCategories (no) tiene la categoria que obtuvimso de event, se agrega al mismo.
    categoriasEvent.push(event.category); // Agrega la categoría al final del array, si se cumplio la condicion anterior



    //Creo una variable llamada checkbox, la cual va a generar un elemento de tipo LI (dentro del UL seleccionado que tiene
    //la variable de checkboxContainer, con la clase nav-item y el contenido especificado en innerHTML)
    let checkbox = document.createElement("li");
    checkbox.className = "nav-item";
    checkbox.innerHTML = `
      <label>
        <input class="de" type="checkbox" value="${event.category}"><span>${event.category}</span> 
      </label> 
    `; //al input de tipo checkbox le asigno como value la categoria del evento iterado, para poder filtarlos posteriormente
    //con los checkboxes seleccionados y la barra de busqueda
    contienecheqs.appendChild(checkbox); // Por ultimo, a lo que acabo de crear en la variable checkBox, se lo mando al checkboxContainer
  }
}



//Barra de busqueda + categorias funcionando

const busquedaInput = document.getElementById('search-input'); // Selecciono la barra de busqueda
const checkboxes = document.querySelectorAll("input[type='checkbox']"); //selecciono los checkbox
const cards = document.querySelectorAll(".card"); //selecciono mis cards
const mensajeBusqueda = document.getElementById("resultados"); //selecciono un div que tengo para mostrar el msj de error



function buscarYFiltrar() {
  const busquedaMinuscula = busquedaInput.value.toLowerCase();
  let seleccionCat = [];

  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      seleccionCat.push(checkbox.value);
    }
  }

  let visibleCards = 0;
  for (let card of cards) {
    const cardName = card.getElementsByTagName('h3')[0].innerText.toLowerCase();
    const cardDescription = card.getElementsByTagName('p')[0].innerText.toLowerCase();
    const cardCategories = card.dataset.category.split(" ");
    let showCard = true;
    let matchCategory = false;

    if (busquedaMinuscula !== '' && !cardName.includes(busquedaMinuscula) && !cardDescription.includes(busquedaMinuscula)) {
      showCard = false;
    }

    for (let category of cardCategories) {
      if (seleccionCat.length > 0 && seleccionCat.includes(category)) {
        matchCategory = true;
      }
    }

    if (seleccionCat.length > 0 && !matchCategory) {
      showCard = false;
    }

    card.style.display = showCard ? 'block' : 'none';

    if (showCard) {
      visibleCards++;
    } 
  }

  if (visibleCards === 0) {
    mensajeBusqueda.style.display = "block";
  } else {
    mensajeBusqueda.style.display = "none";
  }
}
mensajeBusqueda.innerHTML = 'No se encontraron resultados. Por favor, busca de nuevo.';
//messageContainer refiere a un div que tengo en el mismo contenedor de las cards, que inicialmente se encuentra vacio (no se ve)
//Si se cumple la condicion de que no haya cards visibles, ese div se llena con el texto de error especificado
} else {
  mensajeBusqueda.innerHTML = '';
//Si visibleCards > 0 , o sea, si hay cards visibles, ese contenedor pasa a estar vacio para que no muestre nada.
//Esto lo hago para evitar meter texto al pedo que me moleste la visualización de mi página
}
}



busquedaInput.addEventListener('input', buscarYFiltrar);
//searchInput, la barra de busqueda, ejecuta la función de buscar que declaré antes, a medida que voy introduciendo o borrando texto
//Si no, tendria que usar un boton y ejecutar la funcion al apretar el boton, pero esto es mejor porque se actualiza solo

for (let checkbox of checkboxes) {
checkbox.addEventListener("change", buscarYFiltrar);
//Cuando se marca un checkbox, se ejecuta la función de buscar que declaré antes
}
