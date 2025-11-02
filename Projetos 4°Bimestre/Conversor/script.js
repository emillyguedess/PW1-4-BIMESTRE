function converterTemperatura(event){
 event.preventDefault();
  
 let valorTemperatura = parseFloat(document.querySelector('#temperatura').value)
 let valorOrigem = document.querySelector('#origem').value;
 let valorDestino = document.querySelector('#destino').value;
 let valorResultado = valorTemperatura;

 if(valorOrigem == "fah" && valorDestino == "cel" ){
 valorResultado = (valorTemperatura - 32) * 5 / 9;
 }
if(valorOrigem == "cel" && valorDestino == "fah" ){
 valorResultado = (valorTemperatura * 9 / 5) + 32;
 }
if(valorOrigem == "cel" && valorDestino == "kel" ){
 valorResultado = (valorTemperatura + 273.15);
 }
if(valorOrigem == "kel" && valorDestino == "cel" ){
 valorResultado = (valorTemperatura - 273.15);
 }
if(valorOrigem == "kel" && valorDestino == "fah" ){
 valorResultado = (valorTemperatura - 273.15 )* 9 / 5 + 32;
 }
if(valorOrigem == "fah" && valorDestino == "kel" ){
 valorResultado = (valorTemperatura - 32) * 5 / 9 + 273.15;
 }

let uniResultado;
if(valorDestino == "cel") uniResultado = "°C";
else if(valorDestino == "fah") uniResultado = "°F";
else if(valorDestino == "kel") uniResultado = "K";

 document.querySelector('#resultado').value = valorResultado.toFixed(2) + " " + uniResultado;
 console.log(valorResultado); 
}

