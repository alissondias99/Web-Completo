let ano = document.getElementById("ano");
let mes = document.getElementById("mes");
let dia = document.getElementById("dia");
let tipo = document.getElementById("tipo");

class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
}

class Bd {

	constructor() {
		let id = localStorage.getItem('id')

		if(id === null) {
			localStorage.setItem('id', 0)
		}
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

	gravar(d) {
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(d))

		localStorage.setItem('id', id)
	}
}

let bd = new Bd()
function addDespesa(){
        let anoTexto = ano.options[ano.selectedIndex].text;
        let mesTexto = mes.options[mes.selectedIndex].text;
        let diaValor = Number(dia.value)
        let tipoTexto = tipo.options[tipo.selectedIndex].text;
        let desc = document.getElementById("descricao").value;
        let valor = document.getElementById("valor").value;

        let despesa = new Despesa(
                anoTexto,
                mesTexto,
                diaValor,
                tipoTexto,
                desc,
                valor
            )
        

        if (anoTexto == 'Ano' || mesTexto == "Mês" || tipoTexto == "Tipo"){
            alert("Preencha todas as caixas para continuar")
        }else if(diaValor<=0 || diaValor > 31 || mesTexto == "Fevereiro" && diaValor >28){
            alert("Numero de dia do mês invalido")
        } else{
            bd.gravar(despesa)
        }

}
