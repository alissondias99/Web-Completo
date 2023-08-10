//Referente a aula 264

//Funções Factory são usadas como "fábricas" que constroem objetos em momentos específicos da aplicação.

let bicicleta = {
    cor: 'Amarela',
    marcha: 'unica',
    aro: 12,
    pedelar(){
        console.log('Pedalou')
    }
}

bicicleta.pedelar()
//Objeto literal criado uma vez só

let bicicletaFactory = function(cor, marcha, aro){
    return{
        cor: cor,
        marcha: marcha,
        aro: aro,
        pedelar(){console.log('Metodo pedalar executado')}
    }
}

let bicicleta2 = bicicletaFactory("Azul", '18', 16)
//Objetos criados por uma função factory podem ser criados quantas vezes a aplicação necessitar, com poucas linhas de código.
bicicleta2.pedelar()
