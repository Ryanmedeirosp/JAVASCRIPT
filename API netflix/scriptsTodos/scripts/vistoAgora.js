fetch('https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1', options)
  .then(response => response.json())
  .then(response => { 
    let listaFilmesPopulares = response.results;
    exibicao(divMaisVistos, listaFilmesPopulares)
    
  })
  .catch(err => console.error(err));
