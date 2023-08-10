//Referente as aulas 251 a 256

//Orientação a objetos é baseda em pilares.
// São eles: Pilar da abstração; Pilar o encapsulamento e Pilar do Polimorfismo

//O pilar da abstração consiste em entender como um objeto é na vida real e transcrever isso em código."

//Esse pilar tem 4 pontos básicos: entidade, identidade, características (ou atributos) e ações (ou métodos).

class contaBancaria { // Esse bloco cria o modelo do objeto
    constructor(){ // O metodo constructor ira "construir"  os atributos do objeto
        this.agencia = 1458
        this.numConsta = 4456412457
        this.saldo = 569.87
        this.limite = 1500
    } 

    //Os blocos a seguir são usado para declarar os métodos do objeto

    sacar(saque) {
        return this.saldo -= saque
    }

    depositar(deposito) {
         return this.saldo += deposito
    }

    consultarSaldo() {
        return this.saldo
    }
} 

let x = new contaBancaria() // Cria o objeto de fato

console.log(x.sacar(500))

//O pilar do encapsulamento consiste em 'encapsular' um objeto, tentando deixá-lo mais seguro. Um objeto encapulado pode 'dizer' ao sistema quais componentes dele estão disponíveis para serem acessados.

class TV{
    constructor(){
        this._relacaoCanais = [2, 4, 5, 7]// Colocando um underline em um atributo, outro programador que acesse o código, saberá que os elementos com underline não devem ser acessados diretamente, mas sim usando o método 'get' para acessar o valor do atributo ou o método 'set' para modificá-lo.
        this.canalAtivo = 5
        this.volume = 5
    }
}

let tv = new TV

// O pilar da herança consiste em compartilhar atributos comuns entre objetos diferentes.

class animal{
    constructor(){
        this.cor = ''
        this.tamanho = null
        //Atributos compartilhados entre os outros objetos
    }

    dormir(){
        console.log('dormir')
    }
    //Metodos compartilhados entre os outros objetos
}

class cachorro extends animal{ 
    constructor(){
    super() // O metodo super liga a classe filho (nesse caso cachorro) ao construtor da classe pai (constructor de animal)

        this.orelhas = "Medias e caidas"
    }

    latir(){
        console.log('latiu')
    }

    rosnar(){
        console.log('rosnou')
    }
}


class passaro extends animal{
    constructor(){
    super()

        this.bico = 'curto'
        this.cor = ''
        this.tamanho = null
    }

    voar(){
        console.log('voando')
    }
}

//O extends é usado para que os objetos cachorro e pássaro herdem os atributos e métodos que ambos compartilham da classe animal.

class papagaio extends passaro{
    
    constructor(){
        super('Verde', 70) // O super também pode ser usado para passar valores para os atributos herdados do objeto pai
        this.fala = true
    }
}
//Nesse caso, o papagaio está herdando de "pássaro", que por sua vez herdou de "animal". Assim, é melhor, já que ambos compartilham o atributo "bico".
let cachorro1 = new cachorro()
let passaro1 = new passaro()
let papagaio1 = new papagaio()

cachorro1.latir()
passaro1.voar()
papagaio1.dormir()


//O pilar do polimorfismo é usado junto com o pilar da herança. Ele é usado para sobrescrever os métodos específicos do elemento filho.

class avestruz extends passaro {
    constructor(){
        super('Grande', 'Marrom', 2500)
    }

    voar(){
        console.log("avestruz não voa")
    } // Mudar um método ou atributo específico que o objeto filho não compartilhe com o objeto pai.
}

let avestruz1 = new avestruz()

avestruz1.voar()