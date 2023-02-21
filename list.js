const url = `https://rejsegalleri-07a8.restdb.io/rest/kontinenter?q={%22by%22:%22Paris%22}`;
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

const main = document.querySelector("main");
const template = document.querySelector("template").content;

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
