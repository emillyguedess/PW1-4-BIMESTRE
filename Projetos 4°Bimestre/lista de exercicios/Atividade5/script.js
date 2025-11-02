function Mostrar(){
let M = parseInt(document.querySelector('.mae').value);  
let F1 = parseInt(document.querySelector('.filho1').value);
let F2 = parseInt(document.querySelector('.filho2').value);
let F3 = M - (F1 + F2);
let maisVelho;

if (isNaN(M)){
   alert("Prencha as caixas com numeros!");
    return;
}

if (isNaN(F1)){
   alert("Prencha as caixas com numeros!");
    return;
}

if (isNaN(F2,)){
   alert("Prencha as caixas com numeros!");
    return;
}

if (F1 >= F2 && F1 >= F3){
maisVelho = "Filho n° 1"
} else if (F2 >= F1 && F2 >= F3){
   maisVelho = "Filho n° 2";
} else {
   maisVelho = "Filho n° 3";
}
document.querySelector('.filho3').innerHTML = F3 + " anos";
document.querySelector('.result').innerHTML =  maisVelho;
}