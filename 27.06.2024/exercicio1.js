let hours = 18;
let isBomDia = hours >= 6 && hours <= 11;
let isBoaTarde = hours >= 12 && hours <= 17;

if (isBomDia){
  console.log("bom diaaaa");
}else if(isBoaTarde){
    console.log("boa tardeeeeeee");
}else{ 
    console.log("baoa noiteeeee");
}