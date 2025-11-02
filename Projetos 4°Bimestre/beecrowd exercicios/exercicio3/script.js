/* let raio= parseFloat(prompt());
let area = Math.PI.toFixed(5)* Math.pow(raio,2);*/


function Mostrar(){

var raio = parseFloat (document.querySelector('.valor-r').value)
var area = Math.PI.toFixed(5)* Math.pow(raio,2);
document.querySelector('.valor').innerHTML = " O Resultado é: " +Math.PI.toFixed(5)*Math.pow(raio,2);
console.log(Math.PI.toFixed(5)*Math.pow(raio,2));

}
