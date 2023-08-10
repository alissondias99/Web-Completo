//Referente as aulas 257 260

class Produto {
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao (){
        console.log(`${this.descricao} por apenas R$${this.preco}`)
    }
}

let produto = new Produto('Notebook', 2500)
produto.verDescricao()
//Esse é um objeto baseado em uma classe

preco = 2300
let produtoLiteral = {
    descricao: 'Geladeira',
    preco, //Referenciando o valor da variável do objeto com uma variável do mesmo nome fora do objeto.
    verDescricao: function(){ console.log(`${this.descricao} por apenas R$${this.preco}`)}
         
}
//Esse é um objeto literal. Objetos literais normalmente são únicos na aplicação.

produtoLiteral.verDescricao()

produtoLiteral.preco = 1999 // Mudando valores
produtoLiteral.verDescricao()

produtoLiteral.cor = 'Branca' //Criando valores dinamicamente
console.log(produtoLiteral.cor)

var p = produtoLiteral//Não cria uma cópia do objeto, mas sim uma novo ponto de acesso para modificar ou acessar o objeto
p.verDescricao()
p.descricao = 'Celular' // Muda a descrição de ambas as referencias
p.verDescricao()
produtoLiteral.verDescricao()
