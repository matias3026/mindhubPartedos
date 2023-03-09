import data from './data.js';

// funciones para insertar cards al HTML

let contenedorDeTarjetas = document.getElementById("recenPorMi");

for(let event of data.events){
    let card = document.createElement("div");
    card.className = "row";
    card.innerHTML = `

    
     <div class="card-body" data-category="${event.category}">
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


let contienecheqs = document.getElementById("ul_cheqs"); 
let categoriasEvent = []; 


for(let event of data.events) { 
  if(!categoriasEvent.includes(event.category)) { 
    categoriasEvent.push(event.category);    
    let checkbox = document.createElement("li");
    checkbox.className = "nav-item";
    checkbox.innerHTML = `
      <label>
        <input class="de" type="checkbox" value="${event.category}"><span>${event.category}</span> 


      </label> 
      
    `; 
    contienecheqs.appendChild(checkbox); 
  }
}



//Barra de busqueda + categorias funcionando

const busquedaInput = document.getElementById('search-input'); 
const checkboxes = document.querySelectorAll("input[type='checkbox']"); 
const cards = document.querySelectorAll(".card"); 
const mensajeBusqueda = document.getElementById("mensajeBusqueda"); 


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

    if (busquedaMinuscula !== '' && !cardName.includes(busquedaMinuscula) && !cardDescription.includes(busquedaMinuscula)) {
      showCard = false;
    }
  

    for (let category of cardCategories) { 
      if (seleccionCat.length > 0 && !seleccionCat.includes(category)) {
        showCard = false;
        break;
      }
      
    }


    card.style.display = showCard ? 'block' : 'none'; 

    if (showCard) {
      visibleCards++;
    } 
 
  }

  if (visibleCards === 0) {
    mensajeBusqueda.innerHTML = 'No se encontraron resultados. Por favor, busca de nuevo.'; 
  } else {
    mensajeBusqueda.innerHTML = '';
  }
}



busquedaInput.addEventListener('input', buscarYFiltrar);
for (let checkbox of checkboxes) {
  checkbox.addEventListener("change", buscarYFiltrar);
}

