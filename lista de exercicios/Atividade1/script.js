function calcular(){
var valorTabuada = parseInt(document.querySelector("#tabuada").value);
var multi = "";
var resultado = '';



for(let i = 1; i <11; i++){
multi = i * valorTabuada
resultado += `${valorTabuada} * ${i} = ${multi} <br>`;
}
document.querySelector('.valor').innerHTML = resultado;

}