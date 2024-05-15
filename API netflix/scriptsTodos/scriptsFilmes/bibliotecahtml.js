const main = document.querySelector("#main");
const body = document.querySelector("#body");
const divFilmes = document.querySelector("#divFilmes");
const buttonComedia = document.querySelector("#buttonComedia");
const buttonAventura = document.querySelector("#buttonAventura");
const buttonAcao = document.querySelector("#buttonAcao");
const buttonRomance = document.querySelector("#buttonRomance");
const navContador = document.querySelector("#navContador")
var num = 0 

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTcyYTRkOGE4ZDIxYzc2NmZjY2RjYmIxMjM2Nzc5NSIsInN1YiI6IjY2Mzk1YjZlMmZhZjRkMDEyN2M2OTcwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xX0faRcrdR9wa2dkqLio5qCbi4QFWGYX0ixkI00JGNs'
}
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=pt-br&page=1', options)
  .then(response => response.json())
  .then(response => { 
    let listaFilmesPopulares = response.results;
    abrir(divFilmes,listaFilmesPopulares)
})
  .catch(err => console.error(err));


buttonComedia.addEventListener("click",(e)=>{
  buttonComedia.style.color = "red"
  buttonAventura.style.color = "white"
  buttonAcao.style.color = "white"
  buttonRomance.style.color = "white"
  divFilmes.innerHTML = ""
  navContador.innerHTML = ""
  num = 35
  exibirGenero()
})

buttonAventura.addEventListener("click",(e)=>{
  buttonComedia.style.color = "white"
  buttonAventura.style.color = "red"
  buttonAcao.style.color = "white"
  buttonRomance.style.color = "white"
  divFilmes.innerHTML = ""
  navContador.innerHTML = ""
  num = 12
  exibirGenero()
})
buttonAcao.addEventListener("click",(e)=>{
  buttonComedia.style.color = "white"
  buttonAventura.style.color = "white"
  buttonAcao.style.color = "red"
  buttonRomance.style.color = "white"
  divFilmes.innerHTML = ""
  navContador.innerHTML = ""
  num = 28
  exibirGenero()
})
buttonRomance.addEventListener("click",(e)=>{
  buttonComedia.style.color = "white"
  buttonAventura.style.color = "white"
  buttonAcao.style.color = "white"
  buttonRomance.style.color = "red"
  divFilmes.innerHTML = ""
  navContador.innerHTML = ""
  num = 10749
  exibirGenero()
})