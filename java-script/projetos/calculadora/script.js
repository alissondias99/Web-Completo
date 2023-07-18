 var visor = document.getElementById("visor")
function calc(tipo, valor){

    if (tipo === 'acao'){

        if (valor === 'c'){
            visor.value = ''
        } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' ){
            visor.value +=  valor;
        } else if (valor ==='='){
            var valorCampo = visor.value;
           visor.value = eval(valorCampo)// eval() é uma função no JavaScript que executa o cálculo de uma expressão como se fosse inserida diretamente no interpretador do JS, como se você estivesse digitando o código diretamente no console do navegador.
        }

    } else if (tipo === 'valor'){
        visor.value += valor;
    }
}