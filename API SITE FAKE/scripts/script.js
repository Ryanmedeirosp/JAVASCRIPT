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


redirecionar.addEventListener("click",(e)=>{
    if (cart.children.length === 0) {
        redirecionar.href = "index.html"
    }
    else{
        redirecionar.href = "fnalizarCompra/finish.html"
    }
})
