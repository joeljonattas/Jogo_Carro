//carrega imagens
let imagemDaEstrada
let imagemDoAtor
let imagemDoCarro
let imagemDoCarro2
let imagemDoCarro3

//sons do jogo
let somDaColisao
let somDaTrilha
let somDosPontos

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/ator-1.png")
  imagemDoCarro = loadImage("imagens/carro-1.png")
  imagemDoCarro2 = loadImage("imagens/carro-2.png")
  imagemDoCarro3 = loadImage("imagens/carro-3.png")
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3]
  
  somDaColisao = loadSound("Sons/colidiu.mp3")
  somDaTrilha = loadSound("Sons/trilha.mp3")
  somDosPontos = loadSound("Sons/pontos.wav")
}