const lista = ['1.jpg','2.jpg','3.jpg','4.jpg'];
const galeria = document.querySelector("#imgentrada");
const exibicao = document.querySelector("#imgsaida");
const imgExibicao = document.createElement("img");
imgExibicao.src = lista[0];
imgExibicao.id ="imgExibicao";
exibicao.appendChild(imgExibicao);


for (let index = 0; index < lista.length; index++) {
    let img = document.createElement("img");
    img.src = lista[index];
    img.addEventListener("click",(event) => {
        imgExibicao.src = img.src;
    });
    galeria.appendChild(img);
}

    