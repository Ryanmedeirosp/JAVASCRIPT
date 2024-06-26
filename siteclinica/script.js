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
const lista =["A Luva Cirúrgica de Látex Estéril Sem Pó é uma barreira de proteção essencial para profissionais de saúde durante procedimentos cirúrgicos. Feita de látex de alta qualidade, esta luva é projetada para proporcionar conforto e segurança, evitando o contato direto da pele com agentes químicos e biológicos.","A agulha hipodérmica é uma haste metálica ou plástica com um orifício que vai de uma extremidade a outra, para passagem de fluído, utilizada para o uso médico clínico. A espessura (calibre) é consoante a viscosidade do fluído e o calibre da veia/artéria que se quer alcançar.","Possui clipe nasal constituído de material maleável que permite o ajuste adequado do nariz e das bochechas. A máscara é fabricada com Não Tecido hidrofóbico, hipoalergênica, atóxica, não inflamável, não estéril, isenta de fibras de vidro, permeável ao ar e resistente ao rasgo.","O Cateter Intravenoso Descarpack é um dispositivo essencial para a terapia intravenosa periférica em hospitais, clínicas e laboratórios. Com uma variedade de aplicações, ele é usado para infusões de fármacos, soluções, hemoderivados, nutrição parenteral, manutenção da hidratação e reidratação de curto prazo.","Uma seringa é um equipamento de bombeamento, provido de uma agulha, usado por profissionais da área da saúde (ou eventualmente por usuários de drogas) para: inserir substâncias líquidas por via intravenosa, intramuscular, intracardíaca, subcutânea, intradérmica, intra-articular, retirar sangue.","Fralda é um produto de higiene íntima usado por bebês, crianças e adultos que não têm (ou perderam) o controle de suas necessidades fisiológicas e que, se não a usarem, podem se sujar com sua urina ou fezes."]
const listaProduto = ["luva.png","agulha.png","mascara.png","cateter.png","seringa.png","fralda.png"]
const imgOculta = document.querySelector("#imgOculta")
const listaPreco = ["R$ 35,00","R$ 10,00","R$ 25,00","R$ 50,00","R$ 70,00","R$ 40,00"]
const preco = document.querySelector("#preco")
const compra = document.querySelector("#compre")
const qdtPdt = ["100 Und", "100Und","100 Und","30 Und","100 Und", "40 Und"]

var listaVazia = []

if (sessionStorage.listasessao) {
  carrinho = JSON.parse(sessionStorage.getItem('listasessao'))
}

for (let index = 0; index< carrinho.length; index++) {
  let linha = document.createElement('tr')
  let linhaImg = document.createElement('td')
  let imgPdt = document.createElement('img')
  let precoPdt = document.createElement('td')
  let qtd = document.createElement('td')
  let produto1 = carrinho[index]

  imgPdt.src = produto1.foto
  precoPdt.textContent = produto1.preco
  qtd.textContent = qdtPdt[index]

  imgPdt.style.width = "120px";

  entradaCompra.appendChild(linha)
  linha.appendChild(linhaImg)
  linhaImg.appendChild(imgPdt)
  linha.appendChild(precoPdt)
  linha.appendChild(qtd)

  let conteudo4 = document.createElement('td')
  let btn = document.createElement('button')
  btn.id = "excluir"
  linha.appendChild(conteudo4)
  conteudo4.appendChild(btn)
  btn.textContent = 'EXCLUIR'
  btn.addEventListener("click", (e)=>{
    entradaCompra.removeChild(linha)
    carrinho.splice(index,10)
    sessionStorage.listasessao = JSON.stringify(carrinho)
})

}

for (let index = 0; index < img.length; index++) {
    img[index].addEventListener("click",(e)=>{
    preco.innerHTML = listaPreco[index]
    p.innerHTML = lista[index]
    titulo.textContent = nome[index].textContent.toUpperCase()
    imgOculta.src= listaProduto[index]
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
          let endereco = JSON.parse(req.response);
        }
    }
  }
window.addEventListener("click", (e)=>{
  buscarCep();
}) 

