function addDespesa(){
    let ano = document.getElementById("ano").value;
    let mes = document.getElementById("mes").value;
    let dia = Number(document.getElementById("dia").value);
    let tipo = document.getElementById("tipo").value;
    let descricao = document.getElementById("descricao").value;
    let valor = document.getElementById("valor").value;

    if(ano == 'ano' || mes == 'mes' || dia == 'dia' || tipo == 'tipo'){
        alert('Preencha todos os dados')
    } else if(dia<1 || dia > 31 || mes == '2' && dia<=29){
        alert('Quantidade de dias invalidos')
    } else {
        console.log(ano, mes, dia, tipo, descricao, valor)
    }
   
}