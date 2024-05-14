const divPopular = document.querySelector("#divPopular");
const divMaisVistos = document.querySelector("#divMaisVistos");
const divAvaliacao = document.querySelector("#divAvaliacao");
const divEmBreve = document.querySelector("#divEmBreve");
const modal = document.querySelector("#modal");
const body = document.querySelector("#body");
const main = document.querySelector("#main");

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTcyYTRkOGE4ZDIxYzc2NmZjY2RjYmIxMjM2Nzc5NSIsInN1YiI6IjY2Mzk1YjZlMmZhZjRkMDEyN2M2OTcwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xX0faRcrdR9wa2dkqLio5qCbi4QFWGYX0ixkI00JGNs'
    }
  };