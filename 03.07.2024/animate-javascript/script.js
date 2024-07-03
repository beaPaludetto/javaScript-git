const btnMoverImagem = document.getElementById("btnMoverImagem");
let imagem = document.getElementById("imagem");

let isMoved = false;

btnMoverImagem.addEventListener("click", function(){
    if (isMoved) {
   imagem.style.left ="0"; //move a imagem para a posição original
    }else{
        imagem.style.left = "500px";
    }
    isMoved = isMoved
});