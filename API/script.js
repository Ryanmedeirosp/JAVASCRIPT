const btnTempo = document.querySelector("#btnTempo")
const a = document.querySelector("#cityName")

btnTempo.addEventListener("click",(e)=>{
  if (a.value === "") {
    alert("texto em branco")
  }else{
    tempo()
  }
})



function tempo() {
  let url = "https://api.openweathermap.org/data/2.5/weather?q=" + a.value + "&units=metric" +"&appid=f991c3047bba751f0b9816243abc5017";
  let req = new XMLHttpRequest();
  req.open("GET", url);
  req.send();

    req.onload = function(){
      
      if(req.status === 200){
        let dados = JSON.parse(req.response);
        document.querySelector("#tempAtual").innerHTML = dados.main.temp
        document.querySelector("#sensacaoTermica").innerHTML = dados.main.feels_like
        document.querySelector("#tempMax").innerHTML = dados.main.temp_max
        document.querySelector("#tempMin").innerHTML = dados.main.temp_min
        document.querySelector("#veloVento").innerHTML = dados.wind.speed
        document.querySelector("#umidadeAr").innerHTML = dados.main.humidity
  
      }
      else if( req.status === 404){
        document.querySelector("#tempAtual").innerHTML = "ERRO"
        document.querySelector("#sensacaoTermica").innerHTML = "ERRO"
        document.querySelector("#tempMax").innerHTML = "ERRO"
        document.querySelector("#tempMin").innerHTML = "ERRO"
        document.querySelector("#veloVento").innerHTML = "ERRO"
        document.querySelector("#umidadeAr").innerHTML = "ERRO"
      }
      else{
        span.textContent = a
      }
    }
}
  

