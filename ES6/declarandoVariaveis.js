//Referente as aulas 242 a 245

var serie = 'friends' // o var cria uma variável padrão

{
    let serie = 'Arrow' //O let cria uma variável que mantém o escopo em que foi declarada, nesse caso, a variável mantém o escopo de bloco e não poderá ser acessada no escopo global. console.log(`Bloco: ${serie}`)
}

console.log(`Global: ${serie}`)

const serie2 = 'Flash' //O const cria uma variável que não pode ser alterada, caso tente alterá-la irá retornar um erro.

// serie2 = 'Game of thrones'

console.log(serie2)