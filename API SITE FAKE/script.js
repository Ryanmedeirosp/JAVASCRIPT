const categories = document.querySelector("#categories")
const products = document.querySelector("#products")
const modal = document.querySelector("#modal")
const detalhesProdutos = document.querySelector("#detailsProduct")
const close = document.querySelector("#close")
const cart = document.querySelector("#productsInCart")
const cartModal = document.querySelector("#cart")

window.onload = () => {
    listarCategoria()
    listaProdutos()

}

function buscarProdutos(categoria) {

    var url = "https://fakestoreapi.com/products/category/" + categoria
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send()
    let information = JSON.parse(request.response)

    for (let index = 0; index < information.length; index++) {

        let image = document.createElement('img')
        let container = document.createElement('div')
        let name = document.createElement('h1')
        let price = document.createElement('h3')
        products.appendChild(image)
        products.appendChild(container)
        container.appendChild(name)
        container.appendChild(price)
        image.src = information[index].image
        name.innerHTML = information[index].title
        price.innerHTML =  "R$ " + information[index].price 
        products.style.height = "300px"
        image.id = "imageProduct"
        name.id = "nameProduct"

        image.addEventListener("click", (e) => {

            modal.style.display = "flex";
            detalhesProdutos.innerHTML = ''
            let imageModal = document.createElement('img')
            let detalhes = document.createElement('p');
            let carrinho = document.createElement('button')
            let priceModal = document.createElement('h1')
            detalhesProdutos.appendChild(detalhes);
            detalhesProdutos.appendChild(imageModal);
            detalhesProdutos.appendChild(priceModal)
            detalhesProdutos.appendChild(carrinho);
            imageModal.src = information[index].image;
            priceModal.textContent = "R$" + information[index].price
            imageModal.id = 'imageModal'
            carrinho.innerHTML = "ADICIONAR NO CARRINHO"
            carrinho.id = "botaoCompra"
            detalhes.textContent = information[index].description;
            detalhes.id = "pInModal";

            carrinho.addEventListener("click",(e)=>{

                cartModal.style.display = "flex"
                let container = document.createElement('div');
                let image = document.createElement('img');
                let divDescPrice = document.createElement('div');
                let excluir = document.createElement('button');
                let x = document.createElement('p')
                let y = document.createElement('p')
                cart.appendChild(container)
                container.appendChild(image)
                container.appendChild(divDescPrice)
                container.appendChild(excluir)
                divDescPrice.appendChild(y)
                divDescPrice.appendChild(x)
                image.src = information[index].image
                y.textContent = information[index].title
                x.textContent =  "R$ " + information[index].price;
                image.id = "productInCart"
                excluir.textContent = "EXCLUIR"
                excluir.id = "botaoExcluir"
                container.id = "cartContainer"
                divDescPrice.id = "divPrice"

                excluir.addEventListener("click",(e)=>{
                    cart.removeChild(container)
                })

            })
            
        })
        
    }
}

function listarCategoria() {
    var url = "https://fakestoreapi.com/products/categories"
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send()
    let information = JSON.parse(request.response)
    for (let index = 0; index < information.length; index++) {
        let row = document.createElement('div')
        let click = document.createElement('button')
        categories.appendChild(row)
        row.appendChild(click)
        click.textContent = information[index]
        click.id = 'categoryName'
        click.addEventListener("click", (e) => {
            products.innerHTML = ''
            buscarProdutos(click.textContent)
        })
    }
    let row = document.createElement('div')
    let click = document.createElement('button')
    categories.appendChild(row)
    row.appendChild(click)
    click.textContent = "see all"
    click.id = 'categoryName'
    click.addEventListener("click", (e) => {
        products.innerHTML = ''
        products.style.height = "600px"
        products.style.overflow = "auto"
        listaProdutos()
        
    })

}

function listaProdutos() {
    var url = "https://fakestoreapi.com/products"
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send()
    let information = JSON.parse(request.response)

    for (let index = 0; index < information.length; index++) {

        let image = document.createElement('img')
        let container = document.createElement('div')
        let name = document.createElement('h1')
        let price = document.createElement('h3')
        products.appendChild(image)
        products.appendChild(container)
        container.appendChild(name)
        container.appendChild(price)
        image.src = information[index].image
        name.innerHTML = information[index].title
        price.innerHTML =  "R$ " + information[index].price 
        image.id = "imageProduct"
        name.id = "nameProduct"

        image.addEventListener("click", (e) => {

            modal.style.display = "flex";
            detalhesProdutos.innerHTML = ''
            let detalhes = document.createElement('p');
            let carrinho = document.createElement('button')
            let imageModal = document.createElement('img')
            let priceModal = document.createElement('h1')
            detalhesProdutos.appendChild(detalhes);
            detalhesProdutos.appendChild(imageModal)
            detalhesProdutos.appendChild(priceModal)
            detalhesProdutos.appendChild(carrinho)
            imageModal.src = information[index].image;
            priceModal.textContent = "R$" + information[index].price
            imageModal.id = 'imageModal'
            carrinho.innerHTML = "ADICIONAR NO CARRINHO"
            carrinho.id = "botaoCompra"
            detalhes.textContent = information[index].description;
            detalhes.id = "pInModal";

            carrinho.addEventListener("click",(e)=>{

                cartModal.style.display = "flex"
                let container = document.createElement('div');
                let image = document.createElement('img');
                let divDescPrice = document.createElement('div');
                let excluir = document.createElement('button');
                let x = document.createElement('p')
                let y = document.createElement('p')
                cart.appendChild(container)
                container.appendChild(image)
                container.appendChild(divDescPrice)
                container.appendChild(excluir)
                divDescPrice.appendChild(y)
                divDescPrice.appendChild(x)
                image.src = information[index].image
                x.textContent =  "R$ " + information[index].price;
                y.textContent = information[index].title
                container.id = "cartContainer"
                image.id = "productInCart"
                excluir.textContent = "EXCLUIR"
                excluir.id = "botaoExcluir"
                container.id = "cartContainer"
                divDescPrice.id = "divPrice"
                y.id = "cartProductName"
                excluir.addEventListener("click",(e)=>{
                    cart.removeChild(container)
                })

            })
        })
    }
}

close.addEventListener("click",(e)=>{
    modal.style.display = "none"
})

