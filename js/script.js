/*let nota = document.getElementById("nota");

function verificarNota() {
    if (nota.value >= 6){
        alert("Aluno aprovado")
}   else{
        alert("Aluno reprovado");
}
}

for (let i = 1; i <= 10; i++){
    document.write("Essa é a ", i, "º vez que aparece na tela<br>")
}

const numbers = [5,10,20,30];
sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    
}

console.log(sum);


const peso = 80;
const altura = 1.78;

const imc = peso /(altura * altura);

console.log(imc);
*/
const mostrar = function(frase){
    document.write("<br>" + frase + "<br>");
}
let Anoinicial = 1930;

while(Anoinicial <= 2022){
    mostrar (Anoinicial + " tem copa do mundo")
        Anoinicial += 4;
}