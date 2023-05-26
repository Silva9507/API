const api = "https://rickandmortyapi.com/api/character";
const btnApiUser = document.getElementById("apiUsers");

const getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log("data que llega", json.results);
      fillData(json.results);
    })
    .catch((error) => {
      console.log("Error desde la API", error);
      alert("API no dosponible");
    });
};

const fillData = (jsonData) => {
  let htmlCards = "";

  jsonData.forEach((e) => {
    htmlCards += '<div class="col">';
    htmlCards += "<div class=card>";
    htmlCards += `<img src="${e.image}" class="card-img-top" alt="..."></img>`;
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title">${e.name}</h5>`;
    htmlCards += `<h5 class="card-text">${e.status}</h5>`;
    htmlCards += `<h5 class="card-text">${e.species}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  });
  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

getData(api);
