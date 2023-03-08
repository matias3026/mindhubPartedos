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
  const busquedaMinuscula = busquedaInput.value.toLowerCase(); //pasa el contenido de la barra de busqueda a minuscula para evitar errores
  let seleccionCat = []; //Creo un array que se va a llenar en funcion a los checkboxes que vaya marcando
  
  for (let checkbox of checkboxes) { //recorre los checkboxes
    if (checkbox.checked) { //si un checkbox esta marcado,
      seleccionCat.push(checkbox.value); // lo agrego a mi array que se llena en función a los checkboxes marcados
    }
  }

  let visibleCards = 0; // Creo una variable de cards visibles, que me va a servir para mostrar o no el mensaje de error
  for (let card of cards) { //recorre cada card de la constante cards, la que declare antes y me selecciona todos los elementos con clase card
    const cardName = card.getElementsByTagName('h3')[0].innerText.toLowerCase(); //En h3 tengo el nombre, paso todo a minus para evitar error
    const cardDescription = card.getElementsByTagName('p')[0].innerText.toLowerCase(); // en el p tengo la descripción, lo mismo que arriba
    const cardCategories = card.dataset.category.split(" "); //Esto no se bien como funciona, pero me toma el valor de la category que puse en
    //la creación de las cards. HELP ME!
    let showCard = true; //Por defecto, mi variable que indica si la carta se muestra o no, esta activo

    if (busquedaMinuscula !== '' && !cardName.includes(busquedaMinuscula) && !cardDescription.includes(busquedaMinuscula)) {
      showCard = false;
    }
  // Si la barra de busqueda no esta vacia, y ni el nombre de la card ni su descripcion corresponden al contenido de la misma, 
  // la variable que indica la visibilidad pasa a falsa.
  // O sea, si escribo algo pero esto no corresponde a la card en nombre ni descripcion, se oculta

    for (let category of cardCategories) { //Recorro cada categoria
      if (seleccionCat.length > 0 && !seleccionCat.includes(category)) {
        showCard = false;
        break;
      }
      //Si el array de categorias no esta vacio, es decir, si tiene algun checkbox marcado, y el valor de este checkbox
      //no corresponde al atributo data-category="${event.category}" de mis cards, la card se oculta
    }


    card.style.display = showCard ? 'block' : 'none'; //Dependiendo de si la variable showCard es verdadera o falsa, la card
    //toma un valor de display de tipo block, o de none (no visible)


    if (showCard) {
      visibleCards++;
    } 
  //Si el valor de showCard es visible, se suma un 1 a la variable visibleCards, que se usa a modo de contador de las cards que efectivamente
  //son visibles segun los filtros aplicados o la falta de filtros aplicados
  }

  if (visibleCards === 0) {
  //Si la variable showCard es 0, es decir, ninguna card es visible (showCard funciona como contador, si es nulo, es porque ninguna card
  //tiene la propiedad blobk del card.style.display = showCard ? 'block'  )
  //Entonces, si ninguna card es visible, hay que mostrar un mensaje de error

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

