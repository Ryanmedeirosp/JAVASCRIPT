fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', options)
  .then(response => response.json())
  .then(response => { 
    let listaFilmesPopulares = response.results;
    exibicao(divAvaliacao, listaFilmesPopulares)
  })
