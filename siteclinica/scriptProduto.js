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
const entradaCompra = document.querySelector("#entradaCompra")

for (let index = 0; index < img.length; index++) {
  compra.addEventListener("click",(e)=>{
    let linha = document.createElement('tr')
    entradaCompra.appendChild(linha)
    let linhaImg = document.createElement('td')
    linha.appendChild(linhaImg)
    let imgPdt = document.createElement('img')
    linhaImg.appendChild(imgPdt)
    imgPdt.src = listaProduto[index]
    let precoPdt = document.createElement('td')
    linha.appendChild(precoPdt)
    precoPdt.textContent = listaPreco[index]
    let quantidade = document.createElement('td')


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