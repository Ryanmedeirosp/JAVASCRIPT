const contador = document.querySelector("#texto");
const resposta = document.querySelector("#crt")

contador.addEventListener("input", (event)=>{
    let caracteres = contador.value.length;
    resposta.innerHTML = 10 - caracteres;

    if (resposta.innerHTML <= 0){
       return resposta.innerHTML= "Você atingiu seu limite";
    }
});




