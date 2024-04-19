redirecionar.addEventListener("click",(e)=>{
   

     // if (sessionStorage.listasessao) {
       // carrinho = JSON.parse(sessionStorage.getItem('listasessao'))
      //}
     // carrinho.push(js)

    sessionStorage.listasessao = JSON.stringify(listaRedirecionar)
})

