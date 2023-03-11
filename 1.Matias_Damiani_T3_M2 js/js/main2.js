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


