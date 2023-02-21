const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://rejsegalleri-07a8.restdb.io/rest/kontinenter/${id}`;

const options = {
  headers: {
    "x-apikey": "63f487e9478852088da6850c",
  },
};

function hentData(url) {
  fetch(url, options)
    .then((res) => res.json())
    .then(vis);
}
function vis(element) {
  document.querySelector(".navn").textContent = element.titel;
  document.querySelector(".bynavn").textContent = element.by;
  document.querySelector(".land").textContent = element.land;
  document.querySelector(".stedfoto").src = "billeder/" + element.image;
  document.querySelector(".temperatur").textContent = element.temperatur;
  document.querySelector(".rating").textContent = element.rating;
  document.querySelector(".type").textContent = element.type;
}

hentData(url);
