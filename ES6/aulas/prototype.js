//Referente as aulas 265 e 266

let n1 = { valor1: 1}
let n2 = {__proto__: n1, valor2: 2}// O atributo __proto__ permite ligar um objeto a outro, para assim poder vincular os atributos necessários.

console.log(n1.valor1)
console.log(n2.valor1, n2.valor2)