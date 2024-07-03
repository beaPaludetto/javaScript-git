//obtem o elemento do DOM com o id 'idNome'
let nome = document.getElementById("idNome");
let cidade = document.getElementById("idCidade");

function mudar(event){
    //previne o comportamento padrao do evento, como o envio de um formulario
   event.preventDefault();

  
   document.getElementById("titulo").innerHTML = nome.value;
   event.preventDefault();


   document.getElementById("cidade").innerHTML = cidade.value;
   nome.value = '';

}



