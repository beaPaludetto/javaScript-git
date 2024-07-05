let range = document.querySelector("#range");
let rangeValue = document.querySelector("#rangevalue");

range.addEventListener("input", function(){
    rangeValue.textContent = range.value;
});
