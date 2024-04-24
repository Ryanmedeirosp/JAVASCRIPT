const produto = document.querySelector("#produtoContainer");
const infoPessoal = document.querySelector("#infoPessoal");
const transporte = document.querySelector("#transporte");
const totalCompra = document.querySelector("#totalCompra");

var valorFinalizacao = 0
var finalizacao = []
if (sessionStorage.listasessao) {
    finalizacao = JSON.parse(sessionStorage.getItem('listasessao'))
    console.log(finalizacao)

    for (let index = 0; index < finalizacao.length; index++) {
        let divProduto = document.createElement('div');
        let imgProduto = document.createElement('img');
        let precoProduto = document.createElement('p');
        let nomeProduto = document.createElement('p');

        produto.appendChild(divProduto);
        divProduto.appendChild(imgProduto);
        divProduto.appendChild(nomeProduto);
        divProduto.appendChild(precoProduto);
        

        precoProduto.textContent = "R$" + finalizacao[index].preco.toFixed(2);
        imgProduto.src = finalizacao[index].imagem;
        nomeProduto.textContent = finalizacao[index].nome
        if (finalizacao[index].nome.length > 30) {
            nomeProduto.textContent = finalizacao[index].nome.substring(0,30) + "..."
        }
        else{
            nomeProduto.textContent = finalizacao[index].nome
        }
        
        
        precoProduto.id = "precoProduto"
        imgProduto.id = "imgProduto"
        divProduto.id = "divProduto"
        nomeProduto.id = "nomeProduto"

        valorFinalizacao += finalizacao[index].preco;
        totalCompra.innerHTML = "TOTAL: " +  valorFinalizacao.toFixed(2)
        
    }
}




