// variabler for parametre vi finder fra HTML
const urlParams = new URLSearchParams(window.location.search);
const by = urlParams.get("by");

const main = document.querySelector("main");
const template = document.querySelector("template").content;
document.querySelector("h2").textContent = by;

// URL til categorilisten for vores byer

const url = `https://rejsegalleri-07a8.restdb.io/rest/kontinenter?q={"by":"${by}"}`;
console.log(url);
//Variabler for billeder + RestDB nøgle
const medieurl = "https://rejsegalleri-07a8.restdb.io/image/";
const ikonurl = "https://rejsegalleri-07a8.restdb.io/icon/";
const options = {
  headers: {
    "x-apikey": "63f487e9478852088da6850c",
  },
};
// grab the data
async function hentData() {
  const responses = await fetch(url, options);
  const json = await responses.json();
  vis(json);
}
// loope
// for hver
console.log(by.icon);
function vis(json) {
  console.log(json);
  json.forEach((by) => {
    // 1. fange template
    // 2. clone
    const klon = template.cloneNode(true);
    // 3. skifte data
    klon.querySelector(".stedfoto").src = "billeder/" + by.image;
    klon.querySelector(".ikon").src = "grafik/" + by.icon;
    klon.querySelector(".navn").textContent = by.titel;
    klon.querySelector("a").href += by._id;
    // 4. appende
    main.appendChild(klon);
  });
}
hentData();
