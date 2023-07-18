//Referenta a aula 180
//Funções de call Back servem de parametros para outra funções, como um metodo para tratamentos de erros

function exibirArtigo (callbackSucesso, callbackErro){
    if (true){
        callbackSucesso("Os dados foram recuperados com sucesso")

    } else{
        callbackErro("Os dados não puderam ser recupraods")
    }
}


//As funções de callback podem ser declaradas dentro da chamada da função
//exibirArtigo(1, function(){...}, function(){...})
//Mas o mais correto é definilas em variaveis ou metodos antes da chamada

let callbackSucesso = function(dados){//Funções de callback também podem receber parâmetros. Nesse caso, os parâmetros foram declarados dentro da função principal, mas poderiam ser declarados fora dela sem problemas.
    console.log(dados)
}

let callbackErro = function(erroDados){
    console.log(erroDados)
}

exibirArtigo(callbackSucesso, callbackErro)