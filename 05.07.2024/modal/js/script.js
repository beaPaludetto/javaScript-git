const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

const classListArray = ["teste", "oi"];
console.log(classListArray.includes("teste"));

button.addEventListener("click", function(){
    popup.classList.add("d-block");
});
popup.addEventListener("click", function(event){
   const classListClick = event.target.classList[0]
   const classNameArray = ["popup-close", "popup-link", "popup-wrapper"];

    console.log(classNameArray)

     if (classNameArray.includes(classListClick)){
          popup.classList.remove('d-block');
     }





});