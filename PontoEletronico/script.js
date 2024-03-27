const btn = document.querySelector("#btn")
const entradaTable = document.querySelector("#entradaTable")
const matricula = document.querySelector("#matricula")


btn.addEventListener("click", (e)=>{
    if(matricula.value.length == 6)
        {let linha = document.createElement('tr')
        entradaTable.appendChild(linha)

        let tableitem = document.createElement('td')
        tableitem.textContent = matricula.value
        linha.appendChild(tableitem)

        let tableitem2 = document.createElement('td')
        let hoje = new Date()
        if(hoje.getMonth()<10){
            tableitem2.textContent = hoje.getDate() + "/0" + hoje.getMonth() + "/" + hoje.getFullYear();
        }else{
            tableitem2.textContent = hoje.getDate() + "/" + hoje.getMonth() + "/" + hoje.getFullYear();
        }

        linha.appendChild(tableitem2)

        let tableitem3 = document.createElement('td')
        if(hoje.getMinutes() < 10){
            tableitem3.textContent = hoje.getHours() + ":0" + hoje.getMinutes();

        }else{
            tableitem3.textContent = hoje.getHours() + ":" + hoje.getMinutes();
        }
        linha.appendChild(tableitem3)

        matricula.value = ""}
    else{
        btn.innerHTML = "MATRÍCULA ERRADA"
        setTimeout(()=>{
            btn.innerHTML = "REGISTRAR";
        },2000)

    }    
    
})

matricula.addEventListener("input", (event)=>{
    matricula.value = matricula.value.slice(0,6);
})