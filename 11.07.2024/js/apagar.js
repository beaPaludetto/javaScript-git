const apagarBtn = document.querySelector("#apagar");

apagarBtn.addEventListener("click", () => {
    localStorage.clear();

    listaValores.innerHTML = "";
});