const btnavancar1 = document.querySelector("#proximoPessoal");
const finalizar = document.querySelector("#proximoTransporte");
const input = document.querySelectorAll(".enabled");
const span = document.querySelector("#span");
const finilizarInput = document.querySelectorAll(".disabled");
const spanFinalizar = document.querySelector("#spanFinalizar");
const titulo = document.querySelector("#titulo");
const btnProduto = document.querySelector("#btnProduto");
const divProduto = document.querySelector("#produto")

btnavancar1.addEventListener("click", (e)=>{
    if (input[0].name === "NOME" && input[0].value === ""){
        span.textContent = "PREENCHA SEU NOME"
  
    }else if(input[1].name === "EMAIL" && input[1].value === "" ){
        span.textContent = "PREENCHA SEU EMAIL"
  
    }else if(input[2].name === "TELEFONE" && input[2].value === "" ){
      span.textContent = "PREENCHA SEU TELEFONE"
    }else{
        span.textContent = ""
        infoPessoal.style.pointerEvents = "none";
        infoPessoal.style.opacity = "0.4"
        transporte.style.pointerEvents = "All"
        transporte.style.opacity = "1"
    }
    
})


finalizar.addEventListener("click", (e)=>{
    if (finilizarInput[0].name === "CEP" && finilizarInput[0].value === ""){
        spanFinalizar.textContent = "PREENCHA SEU CEP"
  
    }else if(finilizarInput[1].name === "CIDADE" && finilizarInput[1].value === "" ){
        spanFinalizar.textContent = "PREENCHA SUA CIDADE"
  
    }else if(finilizarInput[2].name === "BAIRRO" && finilizarInput[2].value === "" ){
        spanFinalizar.textContent = "PREENCHA SEU BAIRRO"

    }else if(finilizarInput[3].name === "RUA" && finilizarInput[3].value === "" ){
        spanFinalizar.textContent = "PREENCHA SUA RUA"
    }else{
        titulo.textContent = "OBRIGADO PELA SUA COMPRA"
        span.textContent = ""
        spanFinalizar.textContent = ""
        transporte.style.pointerEvents = "none"
        transporte.style.opacity = "0.4"
        setTimeout(()=>{
            window.location.href = "../index.html"
        },3000)
    }
})
btnProduto.addEventListener("click",(e)=>{
        infoPessoal.style.pointerEvents = "All";
        infoPessoal.style.opacity = "1"
        divProduto.style.pointerEvents = "none";
        divProduto.style.opacity = "0.4"
})