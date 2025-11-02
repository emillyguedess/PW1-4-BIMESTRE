function Mostrar(){
let N1 = parseInt(document.querySelector('#BO').value);
let resultado = '';


if (isNaN(N1)){
   alert("insira um numero");
    return;
}

if(N1 <= 1){
let resultado = "Este numero não é primo";
} else {
let ehPrimo = true;
for(let i = 2; i < N1; i++){ 
        if( N1 % i == 0) {
        ehPrimo = false; 
    break;
    }
  }
  resultado = ehPrimo ? "Este numero é primo" : "Este numero nao é primo";
 }
 document.querySelector('.burbl').innerHTML = resultado;
}