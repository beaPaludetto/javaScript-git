console.log("bem vindo!");
const button = document.querySelector("button");
const inputNota= document.querySelector("#nota");

// criando uma função
button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(inputNota.value);
    
    if(inputNota.value <= 6) {
        alert("reprovado");
    }else{
        alert("aprovadissimo")
    };

});