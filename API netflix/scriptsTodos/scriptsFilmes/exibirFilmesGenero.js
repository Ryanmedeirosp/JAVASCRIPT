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
        imagensPopular.alt = "Este título não possui imagem de apresentação"
        divImagensPopular.id = "divImagensPopular";
        imagensPopular.id = "imagensPopular";
        descricao.id = "descricao";
        botaoVerMais.textContent = "Ver Mais";
        botaoVerMais.id = "botaoVerMais";
        if (listaFilmesPopulares[index].overview.length > 200) {
          descricao.innerHTML = listaFilmesPopulares[index].overview.slice(0,200) + " ..."
        }
        else if(listaFilmesPopulares[index].overview.length == 0) {
          descricao.innerHTML = "Este filme ainda não possui descrição..."
        }else{
          descricao.innerHTML = listaFilmesPopulares[index].overview
        }
       
        divImagensPopular.addEventListener('mouseover',(e)=>{
          imagensPopular.src = "../imagens/preto.png";
    
        })
        divImagensPopular.addEventListener('mouseout',(e)=>{
          imagensPopular.src ="https://image.tmdb.org/t/p/original/" + listaFilmesPopulares[index].poster_path;
          imagensPopular.alt = "Este título não possui imagem de apresentação"
  
        })
        botaoVerMais.addEventListener("click",(e)=>{
          let id = listaFilmesPopulares[index].id
    
          fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?language=en-us', options)
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
          tituloModal.textContent = listaFilmesPopulares[index].title;
          tituloModal.id = "tituloModal"
    
          let descricaoModal = document.createElement('p');
          divTrailer.appendChild(descricaoModal);
          descricaoModal.textContent = descricao.textContent = listaFilmesPopulares[index].overview;
          descricaoModal.id= "descricaoModal"
          if(listaFilmesPopulares[index].overview.length == 0) {
            descricaoModal.innerHTML = "Este Filme ainda não possui descrição traduzida..."
          }
          
          divTrailer.appendChild(iframe)
          
    
          let imagemModal = document.createElement('img');
          divImagemModal.appendChild(imagemModal);
          imagemModal.src ="https://image.tmdb.org/t/p/original/" + listaFilmesPopulares[index].poster_path;
          imagemModal.id = "imagemModal"
          imagemModal.alt = "Este título não possui imagem de apresentação"
    
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