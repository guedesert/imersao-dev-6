var niveis = document.getElementById("niveis")
var nivel = [1, 2, 3]
var alt = ["Fácil", "Normal", "Difícil"]
var imgid = ["facilimg", "normalimg", "dificilimg"]
var divid = ["facilnome", "normalnome", "dificilnome"]
var labeldificuldade = document.getElementById("dificuldade")
var tentativas = 0
var labeltentativas = document.getElementById("tentativas")
var resultado = document.getElementById("resultado")
var numerostentados = []
var labelnumerostentados = document.getElementById("numerostentados")
var numerosecreto = parseInt(Math.random() * 1000)
for (var i = 0; i < 3; i++) {
  niveis.innerHTML += `<div class = "nivel" onclick = "definedificuldade(${nivel[i]})" onmouseover = "mostranivel(${nivel[i]})" onmouseout = "mostranivel(0)">
        <img id = "${imgid[i]}" src="./assets/nivel.svg" alt="${alt[i]}">
        <div id = "${divid[i]}">${alt[i]}</div>
      </div>`
}

mostranivel(0)
definedificuldade(0)

function mostranivel(nivel) {
  if (nivel != 0) {
    document.getElementById(imgid[nivel - 1]).hidden = true
    document.getElementById(divid[nivel - 1]).style.display = "flex"
  } else {
    for (var i = 0; i < 3; i++) {
      document.getElementById(imgid[i]).hidden = false
      document.getElementById(divid[i]).style.display = "none"
    }
  }
}

function definedificuldade(nivel) {
  if (nivel == 1) {
    labeldificuldade.innerHTML = alt[0]
    document.getElementById("jogo").style.display = "flex"
    document.getElementById("niveis").style.display = "none"
    labeltentativas.hidden = true
    tentativas = 1000
  } else if (nivel == 2) {
    labeldificuldade.innerHTML = alt[1]
    document.getElementById("jogo").style.display = "flex"
    document.getElementById("niveis").style.display = "none"
    tentativas = 10
    labeltentativas.hidden = false
    labeltentativas.innerHTML = `Você tem ${tentativas} tentativas`
  } else if (nivel == 3) {
    labeldificuldade.innerHTML = alt[1]
    document.getElementById("jogo").style.display = "flex"
    document.getElementById("niveis").style.display = "none"
    tentativas = 3
    labeltentativas.hidden = false
    labeltentativas.innerHTML = `Você tem ${tentativas} tentativas`
  } else {
    document.getElementById("jogo").style.display = "none"
  }
  document.getElementById("fimdejogo").style.display = "none"
}

function jogo() {
  var numerotentado = document.getElementById("numero").value
  if (
    numerotentado == null ||
    numerotentado == "" ||
    numerotentado < 0 ||
    numerotentado > 1000
  ) {
    alert("Digite um número entre 0 e 1.000")
  } else {
    tentativas--
    if (numerotentado == numerosecreto) {
      fimdejogo(true)
    } else {
      document.getElementById("numero").value = ""
      if (tentativas == 0) {
        fimdejogo(false)
      } else if (tentativas == 1) {
        labeltentativas.innerHTML = `<span id = "ultimatentativa">Você tem só mais ${tentativas} tentativa!</span>`
      } else if (tentativas > 1) {
        labeltentativas.innerHTML = `Você ainda tem ${tentativas} tentativas`
      }
      if (numerotentado > numerosecreto) {
        resultado.innerHTML = `O número secreto é menor do que ${numerotentado}`
      } else {
        resultado.innerHTML = `O número secreto é maior do que ${numerotentado}`
      }
      numerostentados.push(numerotentado)
      numerostentados.sort()
      labelnumerostentados.innerHTML = `Números que você já tentou: ${numerostentados}`
    }
  }
}

function fimdejogo(status) {
  if (status) {
    alert("Parabéns!")
  } else {
    alert(0)
  }
}
