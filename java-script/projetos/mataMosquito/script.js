var x = 0
var y = 0
var vidas = 1
var tempo = 10

var criaMosca = 2000
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'medio'){
    criaMosca = 1000
    tempo = 50
} else if (nivel === 'dificil'){
    criaMosca = 750
    tempo = 100
}

function verificaTamanho(){
    x = window.innerWidth;
    y = window.innerHeight;
}
verificaTamanho()

var cronometro = setInterval(function(){
    tempo -=  1
     if(tempo < 0){
        clearInterval(cronometro)
        window.location.href = 'vitoria.html'
     } else {
        document.getElementById('cronometro').innerHTML = tempo+1
     }
    
},1000) 

function posicaoRandom(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas > 3){
            window.location.href = 'gameOver.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++
        } 
    }

    

   var posX = Math.floor(Math.random() *x) - 90; 
   var posY = Math.floor(Math.random() *y) - 90;

   posX = posX  < 0 ? 0 : posX
   posY = posY  < 0 ? 0 : posY

var img =document.createElement('img');
img.src = 'imagens/mosca.png';
img.id = 'mosquito'
img.className = tamanhoRandom()
img.style.left = posX + 'px'
img.style.top = posY + 'px'
img.style.position = 'absolute'
img.style.transform = ladoRandom()
img.onclick = function(){
    this.remove()
}

document.body.appendChild(img)

}
posicaoRandom()

function tamanhoRandom(){
    var classe = Math.floor(Math.random() * 3) + 1
     if( classe == 1){
    return "mosquito"
    } else if (classe == 2){
    return "mosquito1"
    } else if( classe == 3){
    return "mosquito2"
    }
}

function ladoRandom(){
    var lado = Math.floor(Math.random() * 2) + 1;
     switch(lado){
        case 1:
        return 'scaleX(-1)'
        
        case 2: 
        return 'scaleX(1)'
     }
}

setInterval(posicaoRandom, criaMosca)