const getHours = () => {
    const clock = document.querySelector('#relogio')
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.textContent = `${hour}:${minute}:${second}`
    
  }
  
  setInterval(getHours,1000)

const img = document.querySelectorAll(".imgProduto")
const div = document.querySelector("#divOculta")
const p = document.querySelector("#pOculto")
const x = document.querySelector("#close")
const nome = document.querySelectorAll(".nomeProduto")
const titulo = document.querySelector("#tituloProduto")
const lista =["1","2","3","4","5","6","7","8","9"]

for (let index = 0; index < img.length; index++) {
    img[index].addEventListener("click",(e)=>{
    
    p.innerHTML = lista[index]
    titulo.textContent = nome[index].textContent
    titulo.style.textAlign = "center"
    div.style.display = "block"
    })
    x.addEventListener("click",(e)=>{
      div.style.display ="none"
    })
  
}

const input = document.querySelectorAll(".inputForm")
const span = document.querySelector("#erro")
const button = document.querySelector("#btnForm")
const form = document.querySelector("#formContato")


form.addEventListener("submit",(e)=>{
  e.preventDefault()

  if (input[0].name === "NOME" && input[0].value === ""){
      span.textContent = "PREENCHA SEU NOME"

  }else if(input[1].name === "EMAIL" && input[1].value === "" ){
      span.textContent = "PREENCHA SEU EMAIL"

  }else if(input[2].name === "TELEFONE" && input[2].value === "" ){
    span.textContent = "PREENCHA SEU TELEFONE"
  }else{
    form.submit()
  }  
    
  
    span.style.visibility = "visible"
    setTimeout(()=>{span.style.visibility = "hidden"},2000)
    
})

function buscarCep(){
  let cep = document.getElementById("cep").value;
  if(cep !== ""){
    let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();

      req.onload = function(){
        if(req.status === 200){
          let endereco = JSON.parse(req.response);
          document.getElementById("cidade").value = endereco.city;
          document.getElementById("rua").value = endereco.street;
          document.getElementById("bairro").value = endereco.neighborhood;
        }
        else if( req.status === 404){
          span.textContent ="SEU CEP ESTÁ INVÁLIDO"
        }
         else{
           span.textContent = "erro"
         }
      }
  }
}
window.addEventListener("click", (e)=>{
  buscarCep();
}) 


  
