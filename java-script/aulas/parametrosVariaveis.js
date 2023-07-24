//Referente a aula 216

function soma (){
    var resul = 0
    console.log(arguments)/* O objeto arguments é exclusivo do escopo de uma função em JavaScript. Ele serve para recuperar 
    os parâmetros passados para a função, mesmo que eles não tenham sido declarados explicitamente nos parâmetros da função. 
    O arguments é uma espécie de array-like, que contém todos os argumentos passados para a função, permitindo que você 
    acesse e manipule esses valores dentro da função.*/

    for (let i in arguments){
        console.log(arguments[i])
       resul += arguments[i]
       
    }
    console.log(resul)
}

console.log(soma(7,5,3.2))