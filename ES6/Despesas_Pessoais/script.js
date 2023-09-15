class Despesa{
    constructor (ano, mes, dia, tipo, desc, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.desc = desc
        this.valo = valor
    }
}

class Bd{

    constructor(){
        let id = localStorage.getItem('id')

        if (id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id', )//getItem é usado para recuperar um valor
         return parseInt(proximoId) + 1
        
    }
    gravar(d){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
     }
}

let bd = new Bd()

function addDespesa(){
    let ano = document.getElementById("ano").value;
    let mes = document.getElementById("mes").value;
    let dia = document.getElementById("dia");
    let diaValor = Number(dia.value)
    let tipo = document.getElementById("tipo").value;
    let desc = document.getElementById("descricao").value;
    let valor = document.getElementById("valor").value;

    if (ano == 'ano' || mes== "mes" || tipo == "tipo"){
        alert("Preencha todas as caixas para continuar")
    }else if(diaValor <=0 || diaValor > 31 || mes == "2" && diaValor > 28){
        alert("Numero de dia do mês invalido")
    } else{
        let despesa = new Despesa(
            ano, 
            mes, 
            diaValor,
            tipo,
            desc,
            valor)
        bd.gravar(despesa)
    }
}