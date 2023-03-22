import data from './data.js';

let contenedorDeTarjetas = document.getElementById("cards_container");
let tarjetasOriginales = []; // arreglo para almacenar las tarjetas originales aca se meten las tarjetas del array

for(let event of data.events){
    let card = document.createElement("div");
    card.className = "row";
    card.innerHTML = `
      <div class="cards2" data-category="${event.category}">
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

