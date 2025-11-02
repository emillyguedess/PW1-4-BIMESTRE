function Mostrar(){
let N = (document.querySelector('.N').value)

if (N === ""){
     alert("insira um numero");
        return;
}

N = parseFloat(N);
let resultado = '';

if(N === 0) {
resultado = "nulo";

} else if(N > 0) {
resultado = "positivo";

}else{
resultado = "negativo";
}

document.querySelector('.R').innerHTML = resultado;
} 