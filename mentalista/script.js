var niveis = document.getElementById("niveis")
var nivel = ["Fácil", "Normal", "Difícil"]
var tentativas = 0
for (var i = 0; i < nivel.length; i++) {
  niveis.innerHTML += `<div class = "nivel" onclick = "definedificuldade('${nivel[i]}')">${nivel[i]}</div>`
}

var numeroSecreto = parseInt(Math.random() * 1000)

function definedificuldade(nivel) {
  if (nivel == "Fácil") {
    tentativas = 1000
  } else if (nivel == "Normal") {
    tentativas = 10
  } else if (nivel == "Difícil") {
    tentativas = 3
  }
  jogo(tentativas)
}
function jogo(tentativas) {
  while (tentativas != 0) {
    alert(tentativas)
    tentativas--
  }
}

/* while (chute != numeroSecreto) {
  var chute = prompt("Digite um número entre 0 e 1000")
  //se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
    alert("Acertou!")
  } else if (chute > numeroSecreto) {
    alert("Errou... o número secreto é menor")
  } else if (chute < numeroSecreto) {
    alert("Errou... o número secreto é maior")
  }
}
 */
