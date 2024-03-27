const passar = document.querySelectorAll(".img")
const divoculta = document.querySelector("#divoculta")
const img = document.querySelector("#img-oculta")
var contador = 0;

for (let index = 0; index < passar.length; index++) {
    passar[index].addEventListener("click", (event)=>{
        img.src = passar[index].src
        divoculta.style.visibility = "visible"
    })
}

divoculta.addEventListener("click", (event)=>{
    divoculta.style.visibility = "hidden"

    } )
    
