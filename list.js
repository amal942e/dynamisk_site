const urlParams = new URLSearchParams(window.location.search);
const by = urlParams.get("by");

const main = document.querySelector("main");
const template = document.querySelector("template").content;
document.querySelector("h2").textContent = by;

const url = `https://rejsegalleri-07a8.restdb.io/rest/kontinenter?q={"by":"${by}"}`;
console.log(url);
const medieurl = "https://rejsegalleri-07a8.restdb.io/image/";
const ikonurl = "https://rejsegalleri-07a8.restdb.io/icon/";
const options = {
  headers: {
    "x-apikey": "63f487e9478852088da6850c",
  },
};

async function hentData() {
  const responses = await fetch(url, options);
  const json = await responses.json();
  vis(json);
}

function vis(json) {
  console.log(json);
  json.forEach((by) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".stedfoto").src = medieurl;
    klon.querySelector(".ikon").src = ikonurl;
    klon.querySelector(".navn").textContent = by.titel;
    main.appendChild(klon);
  });
}
hentData();
