const btnavancar1 = document.querySelector("#proximoPessoal");
const finalizar = document.querySelector("#proximoTransporte")

btnavancar1.addEventListener("click", (e)=>{
    infoPessoal.style.pointerEvents = "none";
    infoPessoal.style.opacity = "0.4"
    transporte.style.pointerEvents = "All"
    transporte.style.opacity = "1"
})

// finalizar.addEventListener("click", (e)=>{
//     transporte.style.pointerEvents = "none"
//     transporte.style.opacity = "0.4"
//     totalCompra.innerHTML = "PARABÉNS, VOCÊ COMPROU SEU PRODUTO"
// })