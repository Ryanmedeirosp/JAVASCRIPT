const main = document.querySelector("#main");
const body = document.querySelector("#body");
const divSeries = document.querySelector("#divSeries");
const buttonComedia = document.querySelector("#buttonComedia");
const buttonDrama = document.querySelector("#buttonDrama");
const buttonFantasia = document.querySelector("#buttonFantasia");
const buttonFaroeste = document.querySelector("#buttonFaroeste");
const navContador = document.querySelector("#navContador");
var num = 0
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTcyYTRkOGE4ZDIxYzc2NmZjY2RjYmIxMjM2Nzc5NSIsInN1YiI6IjY2Mzk1YjZlMmZhZjRkMDEyN2M2OTcwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xX0faRcrdR9wa2dkqLio5qCbi4QFWGYX0ixkI00JGNs'
}
};

fetch('https://api.themoviedb.org/3/tv/airing_today?language=pt-br&page=1', options)
.then(response => response.json())
.then(response => { 
  let listaFilmesPopulares = response.results;
  exibicao(divSeries,listaFilmesPopulares)
})
.catch(err => console.error(err)); 

buttonComedia.addEventListener("click",(e)=>{
  buttonComedia.style.color = "red"
  buttonDrama.style.color = "white"
  buttonFaroeste.style.color = "white"
  buttonFantasia.style.color = "white"
  divSeries.innerHTML = ""
  navContador.innerHTML = ""
  num = 35
  exibirGenero()
})

buttonDrama.addEventListener("click",(e)=>{
  buttonComedia.style.color = "white"
  buttonDrama.style.color = "red"
  buttonFaroeste.style.color = "white"
  buttonFantasia.style.color = "white"
  divSeries.innerHTML = ""
  navContador.innerHTML = ""
  num = 18
  exibirGenero()
})
buttonFaroeste.addEventListener("click",(e)=>{
  buttonComedia.style.color = "white"
  buttonDrama.style.color = "white"
  buttonFaroeste.style.color = "red"
  buttonFantasia.style.color = "white"
  divSeries.innerHTML = ""
  navContador.innerHTML = ""
  num = 37
  exibirGenero()
})
buttonFantasia.addEventListener("click",(e)=>{
  buttonComedia.style.color = "white"
  buttonDrama.style.color = "white"
  buttonFaroeste.style.color = "white"
  buttonFantasia.style.color = "red"
  divSeries.innerHTML = ""
  navContador.innerHTML = ""
  num = 10765
  exibirGenero()
})