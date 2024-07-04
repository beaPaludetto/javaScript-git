//obtem os elementos do DOM
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

//Botoes
let btnSomar = document.getElementById("btnSomar");

//Botao resultado
const resultado = document.getElementById("resultado");

//adiciona um evento de clique no botao
btnSomar.addEventListener("click", function(){
 // Converte os valores dos inputs para numeros e soma
  let soma = Number(valor1.value) + Number(valor2.value);
  //exibe o resultado na tela
  resultado.textContent = soma;

  valor1.value="";
  valor2.value="";

  setTimeout(function (){
      resultado.innerHTML = 0;
   }, 2000);
});

let btnMult = document.getElementById("btnMult");

btnMult.addEventListener("click", function(){
    let mult = valor1.value * valor2.value;
    resultado.textContent = mult;

    valor1.value="";
    valor2.value="";
   
    setTimeout(function (){
        resultado.innerHTML = 0;
     }, 2000);
})

let btnSub = document.getElementById("btnSub");

btnSub.addEventListener("click", function (){
    let Sub = valor1.value - valor2.value;
    resultado.textContent = Sub;

    valor1.value="";
    valor2.value="";
    
    setTimeout(function (){
        resultado.innerHTML = 0;
     }, 2000);
})

let btnDiv = document.getElementById("btnDiv");

btnDiv.addEventListener("click", function(){
    let div = valor1.value / valor2.value;
    resultado.textContent = div;

    valor1.value="";
    valor2.value="";
    
    setTimeout(function (){
        resultado.innerHTML = 0;
     }, 2000);
})