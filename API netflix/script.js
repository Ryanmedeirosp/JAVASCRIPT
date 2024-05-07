const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTcyYTRkOGE4ZDIxYzc2NmZjY2RjYmIxMjM2Nzc5NSIsInN1YiI6IjY2Mzk1YjZlMmZhZjRkMDEyN2M2OTcwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xX0faRcrdR9wa2dkqLio5qCbi4QFWGYX0ixkI00JGNs'
    }
  };
  
fetch('https://api.themoviedb.org/3/movie/popular?language=pt-br&page=1', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

