const categories = document.querySelector("#categories")
const products = document.querySelector("#products")
const modal = document.querySelector("#modal")
const detalhesProdutos = document.querySelector("#detailsProduct")
const close = document.querySelector("#close")
const cart = document.querySelector("#productsInCart")
const cartModal = document.querySelector("#cart")
const valorTotal = document.querySelector("#somaValor")
const contadorCarrinho = document.querySelector("#contadorCarrinho")
const redirecionar = document.querySelector("#redirecionar")
var listaRedirecionar = []
var contador = 0
var valorCarrinho = 0

window.onload = () => {
    listarCategoria()
    listaProdutos()

}

close.addEventListener("click",(e)=>{
    modal.style.display = "none"
})

