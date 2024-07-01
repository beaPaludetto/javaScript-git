const numbers  = ['91', '5', '30', '97', '83', '31'];
let numnumber = 0;

for (let i = 0; i < numbers.length; i++) {
 numnumber += Number(numbers[i])
}

console.log(numnumber === 337);