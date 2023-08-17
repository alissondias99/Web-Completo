//Referente as aulas 269 a 272
console.log('----------------------------------------------------------------------------')
console.log('Parte 1')
let frutas = ['abacaxi', 'maça', 'laranja', 'Banana'];

console.log(frutas);
console.log(frutas[0]);

// Um destructuring assignment é a ação de desestruturar um elemento, ou seja, retirar uma parte daquele elemento.

let [a, m] = frutas // Está atribuindo os 2 primeiros valores de frutas às variáveis "a" e "m", mas sem removê-los do array original.
console.log(a, m) 
console.log(a)

let [a1, m1, ,b] = frutas//O espaço em branco indica que não é preciso recuperar o item na mesma posição, nesse caso o item "laranja"

console.log(a1, m1, b) 

//Também é possivel declarar um valor padrão no momento da desestruturação

let [a2, m3 , , b1, l = 'limão'] = frutas

console.log(a1, m1, b1, l) 

//destructuring assignment em arrays bidimensionais

let coisas = [['Carro', 'Moto'], ['Joao', 'Maria']]

let [, [, x]] = coisas
// Pula o primeiro array, depois pula o primeiro valor do segundo array, e recupera "Maria" com valor de x.

console.log(x)

console.log('----------------------------------------------------------------------------')
console.log('Parte 2')

// Destructuring assignment com objetos

let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'abc',
        modelo: 123
    }
}

let = {descricao, preco} = produto
//    ↑ Uso de chaves obrigatorio quando se tratar de objetos
console.log(descricao, preco)

let = {descricao:d, preco:p} = produto// atribui os valores a novas varivaies
console.log(d, p)

let = {detalhes: {fabricante, modelo}} = produto
console.log(fabricante, modelo)

console.log('----------------------------------------------------------------------------')
console.log('Parte 3')
// Destructuring assignment com funções

let listaNun = [1,2,3,4]

function teste ([a, b, , c, d=100]){
    console.log(a, b, c, d)
}

teste(listaNun)

let obj = {
    a: 10,
    b: 20,
    c: 15
}

function testeObj({a, b, c}){
    console.log(a, b, c)
}

testeObj(obj)