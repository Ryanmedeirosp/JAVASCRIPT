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
            spanFinalizar.textContent =""
          }
          else if( req.status === 404){
            spanFinalizar.textContent ="SEU CEP ESTÁ INVÁLIDO"
          }
           else{
             spanFinalizar.textContent = "erro"
           }
          let endereco = JSON.parse(req.response);
          console.log(`${input[0].value},${input[1].value},${input[2].value},${endereco.city},${endereco.street},${endereco.neighborhood}`) 
        }
    }
  }
  window.addEventListener("click", (e)=>{
    buscarCep();
  }) 