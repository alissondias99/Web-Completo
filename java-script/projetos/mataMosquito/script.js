var x = 0
var y = 0
function alteraTamanho(){
    x = window.innerWidth;
    y = window.innerHeight;
}

alteraTamanho()

function posicaoRandom(){
   var posX = Math.floor(Math.random() *x) - 50; 
   var posY = Math.floor(Math.random() *y) - 50;
    console.log(posX)
    console.log(posY)


var img =document.createElement('img');
img.src = 'imagens/mosca.png';
img.className= "mosquito"
img.style.left = posX + 'px'
img.style.top = posY + 'px'
img.style.position = 'absolute'

document.body.appendChild(img)
}
