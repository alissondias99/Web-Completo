//Referente as aulas 267 e 268

// O operador rest é usado para juntar já o sprea é usado para espalhar,  ambos são declarados por 3 pontos (...)

//Exemplo de spread

let textoAleatorio = 'Só um texto aleatoria mesmo'

console.log(textoAleatorio)
console.log(...textoAleatorio + ', so que espalhado')

//Spread com arrays

let listaFrutas1 = ['Maça', 'Banana', 'Uva']
let listaFrutas2 = ['Cereja', 'Laranja', 'Melancia']

let listaCompletaFrutas = [...listaFrutas1, 'tomate', 'morango', ...listaFrutas2, 'Caju']
//Espalha um array dentro de outro array
console.log(listaCompletaFrutas)
console.log(listaCompletaFrutas.indexOf("tomate"))

//Spread com objetos

let pessoa = {nome: 'Joao', idade: 27}
let clone = {endereco: 'Rua abc', ...pessoa} //Espalha um objeto dentro de outro objeto
console.log(clone)


//Exemplo de rest

function soma (...param)//Pega todos os parametros e junta tudo em um array
{
    let resultado = 0
    
    console.log(param)

    param.forEach(v => resultado += v)

    return resultado
}

console.log(soma(3,45,67,253,1152))