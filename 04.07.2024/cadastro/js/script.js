let form = document.querySelector("#cadastroForm");
let CadastroList = document.querySelector('#cadastroList');
//obem os valores dos campos de entrada
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let cidade = document.querySelector("#cidade");

//adiciona um evento de formulario
form.addEventListener("submit", function (event){
    event.preventDefault();
  
    //cria um novo item de lista com os valores
   let listItem = document.createElement("li");
   listItem.innerHTML = `<strong>Nome:</strong> ${nome.value}<br> <strong> Email: </strong> ${email.value} <br> <strong>Cidade: </strong> ${cidade.value}`;

   //adicionando novo item na lista
  CadastroList.appendChild(listItem);

 nome.value = "";
 email.value ="";
 cidade.value ="";





})