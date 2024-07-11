const campo = document.querySelector("#campo");
const salvarBtn= document.querySelector("#salvar");

const pMensagem = document.createElement('p');


salvarBtn.addEventListener("click", function() {
     const valor = campo.value;

  if (valor.trim() === '') {
        pMensagem.textContent = "Campo Obrigatório*";
        campo.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        return
    }
    const chave  = `valorSalvo_${Date.now()};`
    localStorage.setItem(chave, valor);

    campo.value = "";

    carregarValoresSalvos();
})