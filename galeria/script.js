const resultado = document.querySelector("#resultado")
const buttonvoltar = document.querySelector("#b1")
const buttonir = document.querySelector("#b2")
const passar = document.querySelectorAll(".img")
var contador = 0;

for (let index = 0; index < passar.length; index++) {
    passar[index].addEventListener("click", (event)=>{
        resultado.src = passar[index].src
        contador = index
    }) 
}
buttonvoltar.addEventListener("click", (event)=>{
    if (contador > 0){
        contador--;
        resultado.src = passar[contador].src;
    }
})
buttonir.addEventListener("click", (event)=>{
    if (contador < passar.length - 1 ){
        contador++;
        resultado.src = passar[contador].src;
    } 
})