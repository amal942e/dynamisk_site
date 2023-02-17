// 1: Vælg <template>'s content
const templateElement = document.querySelector("#minTemplate").content;

function visBil(bil) {
    const klon = skabelon.cloneNode(true);
    klon.querySelector("h1").textContent = bil.brand;
    klon.querySelector("h2").textContent = bil.model;
    document.querySelector("main").appendChild(klon);
}


