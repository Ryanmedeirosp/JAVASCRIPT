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
        click.textContent = information[index].toUpperCase()
        click.id = 'categoryName'
        click.addEventListener("click", (e) => {
            products.innerHTML = ''
            buscarProdutos(information[index])
        })
    }

    let row = document.createElement('div')
    let click = document.createElement('button')
    categories.appendChild(row)
    row.appendChild(click)
    click.textContent = "SEE ALL"
    click.id = 'categoryName'
    click.addEventListener("click", (e) => {
        products.innerHTML = ''
        products.style.height = "1300px"
        listaProdutos()
        
    })
    let car = document.createElement('div')
    let carrinhoFoto = document.createElement('img')
    categories.appendChild(car)
    car.appendChild(carrinhoFoto)
    carrinhoFoto.src = "./fotos/34562.png"
    carrinhoFoto.id = "imgcart"
    carrinhoFoto.addEventListener("click",(e)=>{
        if(cartModal.style.display === "flex"){
            cartModal.style.display = "none"
        }else{
            cartModal.style.display = "flex"
        }
           
    })
}