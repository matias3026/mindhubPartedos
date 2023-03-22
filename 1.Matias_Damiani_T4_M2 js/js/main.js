
// async function getData() {
//     try { //Intento
//       const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing'); //link con la api 
//       const data = await response.json();  //respuesta  de la api
//       codigoFuncional(data); //uso mi funcion que contiene el codigo anterior, y le paso el parametro (json de respuesta de la API)
//     } catch(error) { //Si hay un error, muestro error en consola
//       console.log('ERROR ,ARI TE VA A RETAR !!', error);
//     }
//   }
// getData(); //Llamo a la funcion anterior de arriba, IMPLEMENTA  try y el catch

// //  funcion que tiene COdigo ANTERIOR. Copio todo dentro y la pego antes de finalizar el .then
// function codigoFuncional(data) {

//   let eventContainer = document.getElementById("cards-row");

  
// for(let event of data.events){

  
//     let card = document.createElement("div");

    

//     card.innerHTML = `
//         <div class="cardc" data-category="${event.category}">
//             <img src="${event.image}" class="card-img-top" alt="..."></img>
//             <div class="card-body text-center">
//                 <h3 class="card-title">${event.name}</h3>
//                 <p class="card-text">${event.description}</p>
//                 <div class="card_bottom">
//                     <h5>Price: $ ${event.price}</h5>
//                     <button class="card_bottom_button">Ver mas</button>
//                 </div>
//             </div>
//         </div>
//     `;

//     let button = card.querySelector(".card_bottom_button");
//     button.addEventListener("click", () => {
//         window.location.href = `./details.html?category=${event.category}&image=${event.image}&name=${event.name}&date=${event.date}&place=${event.place}&description=${event.description}&price=${event.price}`;
//     });

//     eventContainer.appendChild(card);

// }



// //CHECKBOXES dinamicos

// let checkboxContainer = document.getElementById("ul_navbar"); //obtengo chec
// let uniqueCategories = []; // Array para almacenar las categorías se filtra con IF ,para eludir repeticiones



// for(let event of data.events) { //recorrer  array de variable data con js
//   if(!uniqueCategories.includes(event.category)) { // Verifica si la categoría de filtrado  ya está presente en el array
//     // Si el array uniqueCategories (no) tiene la categoria que obtuvimso de event, se agrega al mismo.
//     uniqueCategories.push(event.category); // push para agregar la categoría al final del array, si se cumplio la condicion anterior



//     // variable llamada checkbox, la cual va a generar un elemento de tipo LI (dentro del UL seleccionado que tiene
//     //la variable de checkboxContainer, con la clase nav-item y el contenido especificado en innerHTML)
//     let checkbox = document.createElement("li");
//     checkbox.className = "nav-item";
//     checkbox.innerHTML = `
//       <label>
//         <input type="checkbox" value="${event.category}"><span>${event.category}</span> 
//       </label> 
//     `; 
//     //al input de tipo checkbox le asigno como value la categoria del evento recorrido, para poder filtarlos posteriormente con los checkboxes seleccionados y la barra de busqueda

//     checkboxContainer.appendChild(checkbox); // agregar al checkboxContainer
//   }
// }












// //Barra de busqueda + categorias 

// const searchInput = document.getElementById('search-input'); // traer barra de busqueda
// const checkboxes = document.querySelectorAll("input[type='checkbox']"); //selecciono to2 los checkbox
// const cards = document.querySelectorAll(".card"); //selecciono  cards
// const messageContainer = document.getElementById("message-container"); //traigo div para hacer lo que hacen la 
// //mayoria de mis programas ,traer errores 



// function buscarYFiltrar() {
//   const searchTerm = searchInput.value.toLowerCase(); 
//   let selectedCategories = []; //array que acumula selecciones de checks
  
//   for (let checkbox of checkboxes) { //recorrer checkboxes
//     if (checkbox.checked) { //si un checkbox esta marcado,
//       selectedCategories.push(checkbox.value); //se agrega a l array que se llena seguns checks marcados
//     }
//   }

//   let visibleCards = 0; // variable para cards , que me va a servir para mostrar si es necesario el mensaje de error

//   for (let card of cards) { //recorre cada card de la constante cards, declaradaen barra de busqueda mas arriba y me selecciona todos los elementos con clase card
//     const cardName = card.getElementsByTagName('h3')[0].innerText.toLowerCase(); //lower pasa todo a minuscula
    
//     const cardDescription = card.getElementsByTagName('p')[0].innerText.toLowerCase(); // en el p tengo la descripción, lo mismo que arriba
    
//     const cardCategories = card.dataset.category.split(","); 
//     let showCard = true; // indica si la carta se muestra o no, esta activo como brian sarmiento

//     if (searchTerm !== '' && !cardName.includes(searchTerm) && !cardDescription.includes(searchTerm)) {
//       showCard = false;
//     }
//   //  indica la visibilidad pasa a falsa.

//   // SI algo pero esto no corresponde a la card en nombre ni descripcion, se oculta

//     for (let category of cardCategories) { //Recorro cada categoria
//       if (selectedCategories.length > 0 && !selectedCategories.includes(category)) {
//         showCard = false;
//         break;
//       }
     
//     }


//     card.style.display = showCard ? 'block' : 'none'; 

//     if (showCard) {
//       visibleCards++;
//     } 
 
//   }

  
//   if (visibleCards === 0) {


//     messageContainer.innerHTML = '<img id="myImage" src="./assets/sadpika.jpg" alt="">';

//   } else {
//     messageContainer.innerHTML = '';

//   }
// }



// searchInput.addEventListener('input', buscarYFiltrar);


// for (let checkbox of checkboxes) {
//   checkbox.addEventListener("change", buscarYFiltrar);

// }

 
//   console.log(data);
  
// }





async function getData() {
    try { //Intento
      const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing'); 
      const data = await response.json();  
      codigoFuncional(data); 
    } catch(error) { 
      console.log('error , ari esta decepcionada !!', error);
    }
  }
getData(); 
function codigoFuncional(data) {

  let eventContainer = document.getElementById("cards-row");

  
for(let event of data.events){

  
    let card = document.createElement("div");

    

    card.innerHTML = `
        <div class="card h-100 card_div" data-category="${event.category}">
            <img src="${event.image}" class="card-img-top" alt="..."></img>
            <div class="card-body text-center">
                <h3 class="card-title">${event.name}</h3>
                <p class="card-text">${event.description}</p>
                <div class="card_bottom">
                    <h5>Price: $ ${event.price}</h5>
                    <button class="card_bottom_button">Ver mas</button>
                </div>
            </div>
        </div>
    `;

    let button = card.querySelector(".card_bottom_button");
    button.addEventListener("click", () => {
        window.location.href = `./details.html?category=${event.category}&image=${event.image}&name=${event.name}&date=${event.date}&place=${event.place}&description=${event.description}&price=${event.price}`;
    });

    eventContainer.appendChild(card);

}



//CHECKBOXES GENERADOS

let checkboxContainer = document.getElementById("ul_navbar"); //Selecciono mi contenedor de checkbox, el cual es un UL
let uniqueCategories = []; // 


for(let event of data.events) { 
  if(!uniqueCategories.includes(event.category)) { 
    uniqueCategories.push(event.category); 
    let checkbox = document.createElement("li");
    checkbox.className = "nav-item";
    checkbox.innerHTML = `
      <label>
        <input type="checkbox" value="${event.category}"><span>${event.category}</span> 
      </label> 
    `; 
    checkboxContainer.appendChild(checkbox); 
  }
}












//Barra de busqueda + categorias funcionando

const searchInput = document.getElementById('search-input'); // Selecciono la barra de busqueda
const checkboxes = document.querySelectorAll("input[type='checkbox']"); //selecciono los checkbox
const cards = document.querySelectorAll(".card"); //selecciono mis cards
const messageContainer = document.getElementById("message-container"); 



function buscarYFiltrar() {
  const searchTerm = searchInput.value.toLowerCase(); 
  let selectedCategories = []; 
  for (let checkbox of checkboxes) { //recorre los checkboxes
    if (checkbox.checked) { //si un checkbox esta marcado,
      selectedCategories.push(checkbox.value); //
    }
  }

  let visibleCards = 0; // Creo una variable de cards visibles, que me va a servir para mostrar o no el mensaje de error
  for (let card of cards) { 
    const cardName = card.getElementsByTagName('h3')[0].innerText.toLowerCase(); 
    const cardDescription = card.getElementsByTagName('p')[0].innerText.toLowerCase(); 
    const cardCategories = card.dataset.category.split(","); 
    let showCard = true; 

    if (searchTerm !== '' && !cardName.includes(searchTerm) && !cardDescription.includes(searchTerm)) {
      showCard = false;
    }


    for (let category of cardCategories) { //Recorro cada categoria
      if (selectedCategories.length > 0 && !selectedCategories.includes(category)) {
        showCard = false;
        break;
      }
      
    }


    card.style.display = showCard ? 'block' : 'none'; //


    if (showCard) {
      visibleCards++;
    } 
  
  }

  
  if (visibleCards === 0) {
  

    messageContainer.innerHTML = '<img id="myImage" src="./assets/sadpika.jpg" alt="">';
 
  } else {
    messageContainer.innerHTML = '';

  }
}



searchInput.addEventListener('input', buscarYFiltrar);


for (let checkbox of checkboxes) {
  checkbox.addEventListener("change", buscarYFiltrar);

}

  
  console.log(data);
  // ...
}




