// URL de la API de usuarios
//function getDate2 () {} // Funcion  normal es igual de valida que la flecha

const api = "https://jsonplaceholder.typicode.com/users";
const btnApiUser = document.getElementById("apiUsers");
//<button type="button" id="apiUsers" class="btn btn-primary">Ejecutar API</button>
// Ejecutar API
//</button>

// Obtener la informacion de la API
// Funcion flecha

const getData = (url) => {
  fetch(url)
    .then((Response) => Response.json())
    .then((json) => {
      console.log('response data',json);
      fillData(json);
    })
    .catch((error) => {
      console.log("Error desde la api", error);
      alert("La api no esta disponible");
    });
};


// "Error que le llega desde la API"



const fillData = (jsonData) => {
    // Crear los 10 cards con los datos de los 10nusuarios que estan dentro de jsonData
    let htmlCards = ""

    // Ciclo for = repetitivo
    console.log(jsonData);
    jsonData.forEach(e => {
      htmlCards += '<div class="col">';
      htmlCards += '<div class="card">';
      htmlCards += '<div class="card-body">';
      htmlCards += `<h5 class="card-title">${e.name}</h5>`; //interpolacion: $ poner en un texto el valor de una variable
      htmlCards += `<h5 class="card-text">${e.email}</h5>`;
      htmlCards += `<h5 class="card-text">${e.address.city}</h5>`;
      htmlCards += `<h5 class="card-text">${e.phone}</h5>`;
      htmlCards += "</div>";
      htmlCards += "</div>";
      htmlCards += "</div>"; 
    });
    document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

//innerhtml. sobre escribir en el html

btnApiUser.onclick = function () {
  getData(api);
};





// let lista = document.getElementById("cardsFromApi");
    //jsonData.forEach(element => {
      //let p = document.createElement("span");
     // p.innerHTML = element.name;

     // lista.appendChild(p
       // )
  //});




// Evento click


// (return)

//Variables
//Alertas y log
//Condicionales (if/else)
//Tipos de datos
//Comparaciones
//Operadores logicos
//DOM= javascrip pueda ir al html hacer lo que quiera
//Funciones
//Eventos click
//Promesas
//Asincronismo
