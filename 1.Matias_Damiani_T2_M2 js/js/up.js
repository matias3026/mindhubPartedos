import data from './data.js';


let contenedorDeTarjetas = document.getElementById("recenPorMi");

for(let event of data.events){

    if (event.date >= (data.currentDate)){
    let card = document.createElement("div");
    card.className = "row";
    card.innerHTML = `

    <img src="${event.image}" class="card-img-top" alt="maraton">
    <div class="card-body" >
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">${event.description} </p>
    <div class="precio">
        <p class="Price">${event.price}</p>
        <a href="#" class="btn btn-primary">xxxxxxxxxxx</a>
    </div>
    </div>
    `;

   

    contenedorDeTarjetas.appendChild(card); //Luego de generar toda la variable card, con appendChild se la sumo al div de id #cards-row que 
    //tengo como contenedor principal de las cards
}}
