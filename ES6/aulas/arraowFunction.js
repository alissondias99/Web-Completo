//Referente a aula 248

//Arrow functions funcionam de maneira semelhante as funções anônimas, só que deixam o codigo menor

let soma = function (x){
    return x+x
}

console.log(soma(4))

let soma2 = x =>{ //Também é possivel abrir o bloco de função
    return x+x
    //É obrigatório abrir o bloco da função, caso seja necessário declarar outros blocos de comandos, por exemplo, o if/else.
} //x+x

console.log(soma2(5))

let parImpar = num => num % 2 == 0 ?  'Par' : 'Ímpar' 

console.log(parImpar(43))

