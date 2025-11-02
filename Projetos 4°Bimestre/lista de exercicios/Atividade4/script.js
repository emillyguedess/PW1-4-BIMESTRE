function Mostrar(){
let T1 = parseFloat(document.querySelector('.t1').value);
let T2 = parseFloat(document.querySelector('.t2').value);
let T3 = parseFloat(document.querySelector('.t3').value);

if (isNaN(T1)){
   alert("insira todos os numeros!");
    return;
}

if (isNaN(T2)){
   alert("insira todos os numeros!");
    return;
}

if (isNaN(T3)){
   alert("insira todos os numeros!");
    return;
}
    
if(T1 > T2 && T1 > T3){
  document.querySelector('.ouro'). innerHTML = ("3° nadador")
    } else if(T2 > T1 && T1 > T3){
        document.querySelector('.ouro'). innerHTML = ("2° nadador")
    } else if(T3 > T1 && T1 > T2){
        document.querySelector('.ouro'). innerHTML = ("2° nadador")
    } else{
        document.querySelector('.ouro'). innerHTML = ("1° nadador")
    }

if(T2 > T1 && T2 > T3){
   document.querySelector('.prata'). innerHTML = ("3° nadador")
     } else if(T1 > T2 && T2 > T3){
         document.querySelector('.prata'). innerHTML = ("2° nadador")  
     } else if(T3 > T2 && T2 > T1){
         document.querySelector('.prata'). innerHTML = ("2° nadador")
     } else{
         document.querySelector('.prata'). innerHTML = ("1° nadador")
     }

if(T3 > T1 && T3 > T2){
   document.querySelector('.bronze'). innerHTML = ("3° nadador")
     } else if(T2 > T3 && T3 > T1){
         document.querySelector('.bronze'). innerHTML = ("2° nadador")
     } else if(T1> T3 && T3 > T2){
         document.querySelector('.bronze'). innerHTML = ("2° nadador")
    } else{
         document.querySelector('.bronze'). innerHTML = ("1° nadador")
    }
    }