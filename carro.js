//Código do carro

let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318]
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3]
let comprimentoCarros = 50
let alturaCarros = 40

//carro 1
//let xCarro = 600
//let yCarro = 40
//let velocidadeCarro = 2

//carro 2
//let xCarro2 = 600
//let yCarro2 = 96
//let velocidadeCarro2 = 2.5

//carro 3
//let xCarro3 = 600
//let yCarro3 = 150
//let velocidadeCarro3 = 3.2

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros)
  }
  
 
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i]
  }
  
  
}

function posicaoInicialCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
    xCarros[i] = 600
  }
  }
  
}

function passouTodaATela(xCarro){
  return xCarro < - 50
}



