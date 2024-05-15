function exibirFilmesGenero(divExibicao,listaFilmesPopulares) {
    for (let index = 0; index < listaFilmesPopulares.length; index++) {
        let divImagensPopular = document.createElement('div');
        let imagensPopular = document.createElement('img');
        let descricao = document.createElement('p');
        let botaoVerMais = document.createElement('button');
     
        divExibicao.appendChild(divImagensPopular);
        divImagensPopular.appendChild(descricao);
        divImagensPopular.appendChild(botaoVerMais);
        divImagensPopular.appendChild(imagensPopular);
    
        imagensPopular.src ="https://image.tmdb.org/t/p/original/" + listaFilmesPopulares[index].poster_path;
        divImagensPopular.id = "divImagensPopular";
        imagensPopular.id = "imagensPopular";
        descricao.id = "descricao";
        botaoVerMais.textContent = "Ver Mais";
        botaoVerMais.id = "botaoVerMais";
        if (listaFilmesPopulares[index].overview.length > 200) {
          descricao.innerHTML = listaFilmesPopulares[index].overview.slice(0,200) + " ..."
        }
        else if(listaFilmesPopulares[index].overview.length == 0) {
          descricao.innerHTML = "Esta Série ainda não possui descrição traduzida..."
        }else{
          descricao.innerHTML = listaFilmesPopulares[index].overview
        }
       
        divImagensPopular.addEventListener('mouseover',(e)=>{
          imagensPopular.src = "../imagens/preto.png";
    
        })
        divImagensPopular.addEventListener('mouseout',(e)=>{
          imagensPopular.src ="https://image.tmdb.org/t/p/original/" + listaFilmesPopulares[index].poster_path;
  
        })
        botaoVerMais.addEventListener("click",(e)=>{
          let id = listaFilmesPopulares[index].id
    
          fetch('https://api.themoviedb.org/3/tv/'+ id +'/videos?language=en-US', options)
          .then(response => response.json())
          .then(response => {
            let listaVideo = response.results
            console.log(listaVideo)
           
            let iframe = document.createElement('iframe')
            
            if (listaVideo.length > 0) {
              let url = "http://www.youtube.com/embed/" + listaVideo[0].key
              console.log(url)
              iframe.src = url
           
            }
            
           
            
            
          modal.style.display = "flex"
          body.style.overflow = "hidden"
    
          let divModal = document.createElement('div')
          modal.appendChild(divModal)
          divModal.id = "divModal"
    
          let divImagemModal = document.createElement('div');
          divModal.appendChild(divImagemModal);
          divImagemModal.id="divImagemModal"
    
          let divTrailer = document.createElement('div');
          divModal.appendChild(divTrailer);
          divTrailer.id = "divTrailer"
    
          let tituloModal = document.createElement('p');
          divTrailer.appendChild(tituloModal);
          tituloModal.textContent = listaFilmesPopulares[index].name;
          tituloModal.id = "tituloModal"
    
          let descricaoModal = document.createElement('p');
          divTrailer.appendChild(descricaoModal);
          descricaoModal.textContent = descricao.textContent = listaFilmesPopulares[index].overview;
          descricaoModal.id= "descricaoModal"
          
          divTrailer.appendChild(iframe)
          
    
          let imagemModal = document.createElement('img');
          divImagemModal.appendChild(imagemModal);
          imagemModal.src ="https://image.tmdb.org/t/p/original/" + listaFilmesPopulares[index].poster_path;
          imagemModal.id = "imagemModal"
    
          let avaliacaoModal = document.createElement('p');
          divImagemModal.appendChild(avaliacaoModal);
          avaliacaoModal.id = "avaliacaoModal"
          var nota = 0
          nota = listaFilmesPopulares[index].vote_average * 10;
          
          avaliacaoModal.textContent = "Aprovação:" + nota.toFixed(0) + "%";
          
    
        })
            
          })
          
        
        modal.addEventListener("click",(e)=>{
          modal.innerHTML = "";
          modal.style.display = "none";
          body.style.overflow = "auto";
    
          if (listaFilmesPopulares[index].overview.length > 200) {
            descricao.textContent = listaFilmesPopulares[index].overview.slice(0,200) + " ..."
          }
          else if(listaFilmesPopulares[index].overview.length == 0) {
            descricao.textContent = "Este filme ainda não possui descrição..."
          }else{
            descricao.textContent = listaFilmesPopulares[index].overview
          }
        })
        
        
        
        
   
    }
}