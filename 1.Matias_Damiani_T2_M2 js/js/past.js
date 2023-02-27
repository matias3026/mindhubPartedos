
import data from './data.js';


let contenedorDeTarjetas = document.getElementById("recenPorMi");

for(let event of data.events){

    if (event.date < (data.currentDate)){
    let cardvar = document.createElement("div");
    cardvar.className = "col";
    cardvar.innerHTML = `

        <div class="card h-100">
            <img src="${event.image}" class="card-img-top" alt="..."></img>
            <div class="card-body text-center">
                <h3 class="card-title">${event.name}</h3>
                <p class="card-text">${event.description}</p>
                <div class="card_bottom">
                    <h5>Price:  ${event.price}</h5>
                    <button class="card_bottom_button">
                        Ver
                    </button>
                </div>
            </div>
        </div>
    `;

    contenedorDeTarjetas.appendChild(cardvar); //Luego de generar toda la variable card, con appendChild se la sumo al div de id #cards-row que 
    //tengo como contenedor principal de las cards
}
}

