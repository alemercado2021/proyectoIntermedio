let cartas = [
    "./img/fondo.png","./img/basto1.png", "./img/basto2.png", "./img/basto3.png", "./img/basto4.png", "./img/basto5.png",  "./img/basto6.png","./img/basto7.png","./img/basto8.png","./img/basto9.png","./img/basto10.png","./img/basto11.png","./img/basto12.png",
    "./img/oro1.png", "./img/oro2.png", "./img/oro3.png", "./img/oro4.png", "./img/oro5.png",  "./img/oro6.png","./img/oro7.png","./img/oro8.png","./img/oro9.png","./img/oro10.png","./img/oro11.png","./img/oro12.png",
    "./img/espada1.png", "./img/espada2.png", "./img/espada3.png", "./img/espada4.png", "./img/espada5.png",  "./img/espada6.png","./img/espada7.png","./img/espada8.png","./img/espada9.png","./img/espada10.png","./img/espada11.png","./img/espada12.png",
    "./img/copa1.png", "./img/copa2.png", "./img/copa3.png", "./img/copa4.png", "./img/copa5.png",  "./img/copa6.png","./img/copa7.png","./img/copa8.png","./img/copa9.png","./img/copa10.png","./img/copa11.png","./img/copa12.png",
]

let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
]


var index = 0
var index2 = 0
var index3 = 0
let randomNumber = (Math.round(Math.random() * 48))
let valorCarta1 = 0
let valorCarta3 = 0
let valorCarta2 = 0

function makeImage() {
    var img = document.createElement('img')
    img.src = cartas[index];
    document.getElementById('cartaIntermedia').appendChild(img);

    var img2 = document.createElement('img')
    img2.src = cartas[index2];
    document.getElementById('cartaJugador1').appendChild(img2);

    var img3 = document.createElement('img')
    img3.src = cartas[index3];
    document.getElementById('cartaJugador2').appendChild(img3);
 }

 function nextImage2(){
    var img = document.getElementById('cartaJugador1').getElementsByTagName('img')[0]
    randomNumber = randomNumber % cartas.length; 
    img.src = cartas[randomNumber];
valorCarta1 = valores[randomNumber]

    randomNumber = (Math.round(Math.random() * 48))
    var img2 = document.getElementById('cartaJugador2').getElementsByTagName('img')[0]
    randomNumber = randomNumber % cartas.length; 
    img2.src = cartas[randomNumber];
    valorCarta2 = valores[randomNumber]

    randomNumber = (Math.round(Math.random() * 48))
 }

 function nextImage(){
    var img = document.getElementById('cartaIntermedia').getElementsByTagName('img')[0]
    randomNumber = randomNumber % cartas.length; 
    img.src = cartas[randomNumber];
    valorCarta3 = valores[randomNumber]
    randomNumber = (Math.round(Math.random() * 48))
    if(valorCarta3 === valorCarta1 && valorCarta3 === valorCarta2){
        document.getElementById("SpanID").textContent="GANASTE";
    }
    else if(valorCarta3 >= valorCarta1 && valorCarta3 >= valorCarta2 || valorCarta3 <= valorCarta1 && valorCarta3 <= valorCarta2){
        document.getElementById("SpanID").textContent="PERDISTE";
    }
    else{
        document.getElementById("SpanID").textContent="GANASTE";
    }
 }
