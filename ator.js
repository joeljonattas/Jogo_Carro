//Código Ator
let xAtor = 85
let yAtor = 366
let colisao = false
let meusPontos = 0

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
    if(colisao){
      voltaAtorParaPosicaoInicial()
      somDaColisao.play()
      if(meusPontosMaiorQueZero()){
        meusPontos -= 1
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366
}


function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 0))
  text(meusPontos, width / 5, 26)
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1
    somDosPontos.play()
    voltaAtorParaPosicaoInicial()
  }
}

function meusPontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366
}



