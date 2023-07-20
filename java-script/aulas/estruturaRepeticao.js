//Referente as aulas 207 a 214

var n = 1
//while, faça isso enquanto for verdade
 while(n <=10){
    console.log(n)
    n++
 }


 //for, faça isso para cada vez que for verdade

 for (var i = 10; i>=1; i--){
   console.log(i)
 }

 // exemplos

 var lista = ['cadeira', 'cama', 'geladeira'];
 
 for (var i = 0; i<lista.length; i++){
  console.log(lista[i])//"O valor de 'i' começa com 0, que é o valor padrão do primeiro item do array. A cada iteração, o valor de 'i' é incrementado, permitindo que ele represente o índice do próximo item do array. Dessa forma, podemos iterar por um array usando 'i' para acessar e manipular os seus elementos."
 }

 var ini = 1; 
 while (ini <= 10) { 
   var tab = 0; 
   while (tab <= 10) { 
     console.log(`${ini} x ${tab} = ${tab * ini}`); 
     tab++; 
   } 
   console.log('----------'); 
   ini++; 
 }