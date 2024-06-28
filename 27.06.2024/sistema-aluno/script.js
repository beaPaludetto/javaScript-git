console.log("bem vindo!");
const button = document.querySelector("button");
const inputNota= document.querySelector("#nota");
// criando uma função para limpar o campo
function clearForm() {
    inputNota.value = "";
}

// criando uma função
button.addEventListener("click", function(event) {
    event.preventDefault();
    const inputNotaValue = inputNota.value 
    
   //validação de formulário
   if(inputNotaValue == ''){
    alert("Campo obrigatório!");
    return false;
   }
   if(inputNotaValue){

   }
   
    // logica
    if(inputNotaValue <= 6) {
        alert("reprovado");
    }else{
        alert("aprovadissimo");
    }
  //chamando função de limpar campo
  clearForm();

});