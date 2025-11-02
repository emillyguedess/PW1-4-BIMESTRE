/*var A = parseInt(prompt());
let B = parseInt(prompt());

var X = A + B; 

 

console.log("X = "+ X);
*/




 function Mostrar(){

    var valorA = parseInt (document.querySelector('.valor-a').value) 
    var valorB = parseInt(document.querySelector('.valor-b').value)
    var X = valorA + valorB;
    document.querySelector('.valor').innerHTML = "O resultado é: " + X
    console.log(valorA+valorB);
    

 }
