const api = "https://jsonplaceholder.typicode.com/photos";


const getData = (url) => {
  fetch(url)
    .then((Response) => Response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error desde la api", error);
      alert("La api no esta disponible");
    });
};




const fillData = (jsonData) => {
    // Crear los 10 cards con los datos de los 10nusuarios que estan dentro de jsonData  
    let htmlCards = ""
    // Ciclo repetitivo for
    console.log(jsonData);

    for (let i = 0; i < 20; i++) {

      htmlCards += '<div class="col">';
      htmlCards += '<div class="card">';
      htmlCards += `<img src="${jsonData[i].url}" class="card-img-top" alt="..."></img>`;
      htmlCards += '<div class="card-body">';
      htmlCards += `<h5 class="card-title">${jsonData[i].title}</h5>`; //interpolacion: $ poner en un texto el valor de una variable
      htmlCards += "</div>";
      htmlCards += "</div>";
      htmlCards += "</div>";
    };
    document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

getData(api);

