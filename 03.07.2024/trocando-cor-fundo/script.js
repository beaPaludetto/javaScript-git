//obtem os botoes do DOM
let btnMudarCor = document.getElementById("btnMudarCor");
let btnVoltarCor = document.getElementById("btnVoltarCor");

//add um evendo de clique ao botao 'mudar cor de fundo'
btnMudarCor.addEventListener("click", function(){
    document.body.style.background = "#BFEFFF";
    alert("Cor alterada com sucesso!");
})
 btnVoltarCor.addEventListener("click", function(){
    document.body.style.background = "white";
 })
