const categories = document.querySelector("#categories")
const products = document.querySelector("#products")
const modal = document.querySelector("#modal")

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
        let name = document.createElement('h1')
        products.appendChild(image)
        products.appendChild(name)
        products.style.height = "100%"
        name.innerHTML = information[index].title
        image.src = information[index].image
        image.id = "imageProduct"
        name.id = "nameProduct"
        image.addEventListener("click", (e) => {
            modal.style.display = "flex"
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
}

function listaProdutos() {
    var url = "https://fakestoreapi.com/products"
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send()
    let information = JSON.parse(request.response)
    for (let index = 0; index < information.length; index++) {
        let image = document.createElement('img')
        let name = document.createElement('h1')
        products.appendChild(image)
        products.appendChild(name)
        image.src = information[index].image
        name.innerHTML = information[index].title
        image.id = "imageProduct"
        name.id = "nameProduct"
        image.addEventListener("click", (e) => {
            modal.style.display = "flex"
        })
    }
}