const categories = document.querySelector("#categories")
const products = document.querySelector("#products")
const modal = document.querySelector("#modal")
const detalhesProdutos = document.querySelector("#detailsProduct")

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
    console.log(information)
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
        products.style.height = "100%"
        image.id = "imageProduct"
        name.id = "nameProduct"
        image.addEventListener("click", (e) => {
            modal.style.display = "flex";
            let detalhes = document.createElement('p');
            detalhesProdutos.appendChild(detalhes);
            detalhes.textContent = information[index].description
            detalhes.id = "pInModal"
            
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
        click.addEventListener("click", (e) => {
            products.innerHTML = ''
            buscarProdutos(click.textContent)
        })
    }
    let row = document.createElement('div')
    let click = document.createElement('button')
    categories.appendChild(row)
    row.appendChild(click)
    click.textContent = "See All"
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
            let detalhes = document.createElement('p');
            detalhesProdutos.appendChild(detalhes);
            detalhes.textContent = information[index].description
            detalhes.id = "pInModal"
        })
    }
}