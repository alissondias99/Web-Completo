//Referente as aulas 200 a 205
var definindoList1 = Array();
definindoList1[1] = 'maça'
definindoList1[2] = 'banana'
definindoList1[3] = 100
definindoList1['x'] = true

var definindoList2 = []
definindoList2[1] = 'maça'
definindoList2[2] = 'banana'
definindoList2[3] = 100
definindoList2['x'] = true

var definindoList3 = ['maca', 'banana', 100, true]


console.log(definindoList1['x'])
console.log(definindoList2)
console.log(definindoList3)

// Arrays multidimensionais são arrays que contêm outros arrays dentro deles.

var coisas = []
coisas['frutas'] = []
console.log(coisas)
coisas['frutas'] = ['maça', 'banana', 'laranja']
coisas['pessoas'] = ['Joao', 'Carlos', 'Ana']
console.log(coisas['frutas'])
console.log(coisas['pessoas'])
console.log(coisas)

// Modificado itens em um array
 var frutas2 = ['maca', 'laranja']

 //incluir itens no final da array
 frutas2.push("uva")

 //incluir itens no inicio da array
 frutas2.unshift("melão")

 //excluir itens no final da array

 //frutas2.pop()

 //excluir itens no inicio da array

//frutas2.shift()

 console.log(frutas2)

 // Pesquisando em arrays

 var index = frutas2.indexOf("melao")
 if (index == -1){ //Se o elemento não existir no arrays, ele recebe o index de -1
    console.log('não existe')
 } else{
    console.log(index)
 }

 console.log(frutas2.sort())//ordena a lista alfabeticamente

 var nuns = [19, 23, 49, 75, 43, 143, 6]

 console.log(nuns.sort())//não funciona com números
 console.log(nuns.sort(ordenaNumeros))
 

 function ordenaNumeros(a, b){
    return a - b
 }

 /*A função acima recebe dois parâmetros que são definidos pela iteração do método .sort(). 
 A cada dois parâmetros recebidos, é feito o cálculo de a - b. 
 Se o resultado for menor que 0, significa que "a" é menor que "b". 
 Nesse caso, "a" será posicionado antes de "b". Caso contrário, "a" será posicionado depois de "b".*/