class Despesa{
    constructor (ano, mes, dia, tipo, desc, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.desc = desc
        this.valor = valor
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
    recuperarTdsRegistros(){
    let despesas = Array()
    let id = localStorage.getItem('id')
    for( let i = 1 ; i<=id ; i++){
        let despesa = JSON.parse(localStorage.getItem(i));
        if (despesa === null){
            continue
        }
        despesas.push(despesa)
    }
    return despesas
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
        $('#modalErro').modal('show')
    }else if(diaValor <=0 || diaValor > 31 || mes == "02" && diaValor > 28){
        $('#modalErroDays').modal('show')
    } else{
        $('#modalSuccess').modal('show')
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

function carregaListaDespesas(){

    let despesas = Array()
    despesas = bd.recuperarTdsRegistros()
    var listaDespesas = document.getElementById("listaDespesas")

    despesas.forEach(function(d){
        let linha = listaDespesas.insertRow()
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
        linha.insertCell(1).innerHTML = `${d.tipo}`
        linha.insertCell(2).innerHTML = `${d.desc}`
        linha.insertCell(3).innerHTML = `R$ ${d.valor}`
    })
}

function pesquisaDespesa(){
    
}