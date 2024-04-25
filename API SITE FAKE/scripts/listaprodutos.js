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
        let containerGeral = document.createElement('div')
        products.appendChild(containerGeral)
        containerGeral.appendChild(image)
        containerGeral.appendChild(container)
        container.appendChild(name)
        container.appendChild(price)
        image.src = information[index].image;

        if (information[index].title.length > 25) {
            name.innerHTML = information[index].title.substring(0,25) + "..."
       
        }
        else{
            name.innerHTML = information[index].title + " for man";
            
        }
        
        price.innerHTML =  "R$ " + information[index].price.toFixed(2) 
        containerGeral.id = "containergeral"
        container.id = "containerProduct"
        price.id = "priceProduct"
        image.id = "imageProduct"
        name.id = "nameProduct"

        containerGeral.addEventListener("click", (e) => {
            cartModal.style.display = "none"
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
            priceModal.textContent = "R$" + information[index].price.toFixed(2)
            imageModal.id = 'imageModal'
            carrinho.innerHTML = "ADICIONAR NO CARRINHO"
            carrinho.id = "botaoCompra"
            detalhes.textContent = information[index].description;
            priceModal.id = "priceInModal"
            detalhes.id = "pInModal";

            close.addEventListener("click",(e)=>{
                modal.style.display = "none"
            })

            carrinho.addEventListener("click",(e)=>{
                carrinho.textContent = "PRODUTO ADICIONADO"
                carrinho.disabled = true
                const xy = setTimeout(() => {
                    modal.style.display = "none";
                }, 2000);

                close.addEventListener("click",(e)=>{
                    clearTimeout(xy)
                    modal.style.display = "none"
                })
    
                contador ++
                contadorCarrinho.innerHTML = contador
                let container = document.createElement('div');
                let image = document.createElement('img');
                let divDescPrice = document.createElement('div');
                let excluir = document.createElement('button');
                let x = document.createElement('p');
                let y = document.createElement('p');
                cart.appendChild(container);
                container.appendChild(image);
                container.appendChild(divDescPrice);
                container.appendChild(excluir);
                divDescPrice.appendChild(y);
                divDescPrice.appendChild(x);
                image.src = information[index].image;
                x.textContent =  "R$ " + information[index].price.toFixed(2);
                if (information[index].title.length > 30) {
                    y.innerHTML = information[index].title.substring(0,30) + "..."
                }
                else{
                    y.innerHTML = information[index].title
                }
                
                container.id = "cartContainer"
                image.id = "productInCart"
                excluir.textContent = "EXCLUIR"
                excluir.id = "botaoExcluir"
                container.id = "cartContainer"
                divDescPrice.id = "divPrice"
                y.id = "cartProductName"
                x.id = "x"
                valorCarrinho += information[index].price;
                valorTotal.textContent = "TOTAL: " +  valorCarrinho.toFixed(2)
                
                let js = {
                    "imagem": information[index].image,
                    "preco" : information[index].price,
                    "nome" : information[index].title
                }
                listaRedirecionar.push(js)
    

                excluir.addEventListener("click",(e)=>{

                    let indice = listaRedirecionar.indexOf(js)
                    listaRedirecionar.splice(indice , 1)

                    contador --
                    contadorCarrinho.innerHTML = contador
                    cart.removeChild(container)
                    valorCarrinho -= information[index].price;
                    valorTotal.textContent = "TOTAL: " + valorCarrinho.toFixed(2)
                })

            })
        })
       
    }
}

