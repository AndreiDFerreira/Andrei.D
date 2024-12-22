// Seleciona os elementos
const inicio = document.getElementById("inicio")
const tabuleiro = document.getElementById("tabuleiro")
const btnJogar = document.getElementById("btn-jogar")
const btnVoltar = document.getElementById("btn-voltar")

// Mostra o tabuleiro ao clicar em "Jogar"
btnJogar.addEventListener("click", () => {
  inicio.style.display = "none"
  tabuleiro.style.display = "block"
})

// Volta para a tela inicial ao clicar em "Voltar"
btnVoltar.addEventListener("click", () => {
  tabuleiro.style.display = "none"
  inicio.style.display = "block"
})
