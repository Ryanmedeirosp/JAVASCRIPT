fetch('https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1', options)
  .then(response => response.json())
    .then(response => { 
      let listaFilmesPopulares = response.results;
      exibicao(divEmBreve, listaFilmesPopulares)
  
  })
  .catch(err => console.error(err));

