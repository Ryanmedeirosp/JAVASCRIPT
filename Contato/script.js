const novo = document.querySelector("#criarContato")
const id = document.querySelector("#contato")
const agenda = document.querySelector("#agenda")
const salvarContato = document.querySelector("#novoContatoSalvar")
const entrada = document.querySelector("#entradaLinha")
const nome = document.querySelector("#nome")
const email = document.querySelector("#Email")
const telefone = document.querySelector("#Telefone")
const voltar = document.querySelector("#back")
const img = document.querySelector("#Imagem")
var caminho;

voltar.addEventListener("click",(e)=>{
    id.style.display = "none"
})

novo.addEventListener("click", (e)=>{
    id.style.display = "flex"
})


const a = () =>{
    let b = img.files
    const filereader = new FileReader()
    filereader.onload = function(e) {
      caminho =  e.target.result
    }
    filereader.readAsDataURL(b[0])
}

img.addEventListener("change", a)

salvarContato.addEventListener("click",(e)=>{
    let linha = document.createElement('tr')
    entrada.appendChild(linha)
        
    let conteudo0 = document.createElement('td')
    linha.appendChild(conteudo0)
    let imagem = document.createElement('img')
    conteudo0.appendChild(imagem)
    const leitor = new FileReader()
    leitor.readAsDataURL(img.files[0])
    leitor.addEventListener("load",(e)=>{
        imagem.src= e.target.result;
    })
    


    let conteudo = document.createElement('td')
    conteudo.textContent = nome.value
    linha.appendChild(conteudo)

    let conteudo2 = document.createElement('td')
    conteudo2.textContent = email.value
    linha.appendChild(conteudo2)

    let conteudo3 = document.createElement('td')
    conteudo3.textContent = telefone.value
    linha.appendChild(conteudo3)

    let conteudo4 = document.createElement('td')
    let btn = document.createElement('button')
    linha.appendChild(conteudo4)
    conteudo4.appendChild(btn)
    btn.textContent = 'editar'

    btn.addEventListener("click", (e)=>{
        
        id.style.display = "flex"
        nome.value = conteudo.textContent
        email.value= conteudo2.textContent
        telefone.value = conteudo3.textContent
        entrada.removeChild(linha)
    })

    let conteudo5 = document.createElement('td')
    let btn2 = document.createElement('button')
    linha.appendChild(conteudo5)
    conteudo4.appendChild(btn2)
    btn2.textContent = 'excluir'
    btn2.addEventListener("click", (e)=>{
        entrada.removeChild(linha)
    })

    id.style.display = "none"
    
})


   