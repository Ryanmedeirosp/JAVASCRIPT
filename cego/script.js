const listaImg = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'];

const imgEntrada = document.querySelector("#imgEntrada");
const imgSaida = document.querySelector("#imgSaida");
const imgSaidaCreate = document.createElement("img")
let contador = 0
imgSaida.appendChild(imgSaidaCreate);
imgSaidaCreate.src = listaImg[0];

for (let index = 0; index <listaImg.length; index++) {
    let img = document.createElement("img");
    img.src = listaImg[index];
    imgEntrada.appendChild(img);
    img.addEventListener("click",(event)=>{
        imgSaidaCreate.style.opacity = 0;
        setTimeout(()=>{
        imgSaidaCreate.src = listaImg[index];
        contador = index
        imgSaidaCreate.style.opacity = 1;
        },500)
    })
}

const botaoProximo = document.createElement("button");
const botaoVoltar = document.createElement("button");
botaoProximo.textContent = "PRÓXIMO"
botaoVoltar.textContent = "ANTERIOR"
botaoProximo.id = "Prox"
botaoVoltar.id = "Voltar"
imgSaida.appendChild(botaoVoltar);
imgSaida.appendChild(botaoProximo);

botaoProximo.addEventListener("click", (event)=>{
    if (contador < listaImg.length - 1) {
        imgSaidaCreate.style.opacity = 0;
        setTimeout(()=>{
            contador ++
            imgSaidaCreate.src = listaImg[contador];
            imgSaidaCreate.style.opacity = 1;
        },500)
       
    }
})
botaoVoltar.addEventListener("click", (event)=>{
    if (contador > 0){
        imgSaidaCreate.style.opacity = 0;
        setTimeout(()=>{
        contador --
        imgSaidaCreate.src = listaImg[contador];
        imgSaidaCreate.style.opacity = 1;},500)
    }
})
