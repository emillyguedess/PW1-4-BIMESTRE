/* let A = parseInt(prompt("Digite o valor de A: "));
let B = parseInt(prompt("Digite o valor de B: "));
let PROD = A * B; */


 
function Mostrar()

{
var A = parseInt(document.querySelector('.primeiro-numero').value)
var B = parseInt(document.querySelector('.segundo-numero').value)
var PROD = A * B;
document.querySelector('.valor').innerHTML= "O Resultado é: "+ PROD
console.log("PROD = "+ PROD);

}