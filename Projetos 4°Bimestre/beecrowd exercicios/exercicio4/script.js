/* let A = parseInt(prompt( ));
let B = parseInt(prompt());

var SOMA = A + B;
*/
function Mostrar(){
var A = parseFloat(document.querySelector('.valor-a').value)
var B = parseFloat (document.querySelector('.valor-b').value)
var SOMA = A + B;
document.querySelector('.valor-').innerHTML = "O resultado é: "+ SOMA


console.log("SOMA = "+ SOMA);

}