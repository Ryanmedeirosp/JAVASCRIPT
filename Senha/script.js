const btnRegular = document.querySelector("#btnRegular")
const btnPrioriade = document.querySelector("#btnPrioridade")
const mostraSenha = document.querySelector("#mostraSenha")
const htmlSenhas = document.querySelector("#htmlSenhas")
const divOculta = document.querySelector("#divOculta")
const senhaOculta = document.querySelector("#senhaOculta")
const chamarCliente = document.querySelector("#btnAdm")
const senhaAdm = document.querySelector("#proximo")
const mudanca = document.querySelector("#invisivel")
const btnMudanca = document.querySelector("#btnMd")
const mundancaAdm = document.querySelector("#adminDiv")
const btnVoltar = document.querySelector("#btnVoltar")

let listaPrioriadade=[]
let listaRegular = []
let lista = []
let contador = 0
let contadorPrioridade = 0
let contadorLista = -1
let contadorAdm = 0
let contadorGeral = 0
let contadorRegular = 0
let contadorBtn = 0



btnMudanca.addEventListener("click",(e)=>{
    mudanca.style.visibility = "hidden"
    mundancaAdm.style.visibility = "visible"
})
btnVoltar.addEventListener("click",(e)=>{
    mudanca.style.visibility = "visible"
    mundancaAdm.style.visibility = "hidden"
})

btnRegular.addEventListener("click",(event)=>{ 

    contadorLista ++
    contador++
    mostraSenha.innerHTML = "SUA SENHA É :"+ "<br>" + "REGULAR " + [contador];
    senhaOculta.innerHTML = "REGULAR " + [contador];
    lista[contadorLista] = "REGULAR " + [contador];
    listaRegular[contadorLista] = "REGULAR " + [contador];

    let text = 'Regular' + [contador];
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(utterance);

    let listItem = document.createElement('li')
    listItem.textContent = lista [contadorLista]
    htmlSenhas.appendChild(listItem)
    htmlSenhas.insertBefore(listItem,htmlSenhas.children[0])

    btnRegular.disabled = true
    divOculta.style.visibility = "visible"

    setTimeout(()=>{
        btnRegular.disabled = false
        divOculta.style.visibility = "hidden"
    },3000)

    setTimeout(()=>{
        mostraSenha.innerHTML="SUA SENHA É:"
    },5000)
})



btnPrioriade.addEventListener("click",(event)=>{

    contadorLista++
    contadorPrioridade++
    mostraSenha.innerHTML = "SUA SENHA É :"+ "<br>" + "PRIORIDADE " + [contadorPrioridade];
    senhaOculta.innerHTML = "PRIORIDADE " + [contadorPrioridade];
    lista[contadorLista] = "PRIORIDADE " + [contadorPrioridade];
    listaPrioriadade[contadorLista] = "PRIORIDADE " + [contadorPrioridade]

    let text = 'Prioridade' + [contadorPrioridade];
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(utterance);

    let listItem = document.createElement('li')
    listItem.textContent = lista[contadorLista]
    htmlSenhas.appendChild(listItem)
    htmlSenhas.insertBefore(listItem,htmlSenhas.children[0])

    divOculta.style.visibility = "visible"
    btnPrioriade.disabled = true

    setTimeout(()=>{
        divOculta.style.visibility = "hidden"
        btnPrioriade.disabled = false
    },3000)

    setTimeout(()=>{
        mostraSenha.innerHTML="SUA SENHA É:"
    },5000)
})

chamarCliente.addEventListener("click", (e)=>{
    if (contadorAdm < lista.length){
        if (contadorGeral == 0) {
            contadorRegular++
            senhaAdm.innerHTML = listaRegular 
            contadorGeral++
        }else{
            contadorBtn++
            senhaAdm.innerHTML = listaPrioriadade 
            contadorGeral = 0
        }
    contadorAdm++
    }else{
        senhaAdm.innerHTML = "TODA LISTA FOI CHAMADA"
    }
})