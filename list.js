const url = "https://rejsegalleri-07a8.restdb.io/rest/kontinenter";

const option = {
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
}
hentData();
