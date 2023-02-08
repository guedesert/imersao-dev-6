var formarea = document.querySelector("#area")
var bannerusuario = document.getElementById("usuario")
var usuario =
  JSON.parse(localStorage.getItem("imersaodev@guedesert")) || "Viajante"
bannerusuario.innerHTML = "Bem-vindo, " + usuario + "!"
var tela = window.matchMedia("(max-width: 815px)")
ajustamenu(tela)
tela.addEventListener("change", ajustamenu)
window.onload = carregadados

formarea.addEventListener("input", calculaarea)

function carregadados() {
  calculaarea()
  definediv(1)
}

function defineusuario() {
  if (usuario == "Viajante") {
    usuario = prompt("Qual o seu nome?")
    if (usuario == "" || usuario == null) {
      usuario = "Viajante"
    }
  } else {
    usuario = prompt("Qual o seu novo nome?")
    if (usuario == "" || usuario == null) {
      usuario = "Viajante"
    }
  }
  localStorage.setItem("imersaodev@guedesert", JSON.stringify(usuario))
  bannerusuario.innerHTML = "Bem-vindo, " + usuario + "!"
}

function definediv(div) {
  area = document.getElementById("area").style
  comprimento = document.getElementById("comprimento").style
  massa = document.getElementById("massa").style
  moeda = document.getElementById("moeda").style
  temperatura = document.getElementById("temperatura").style
  velocidade = document.getElementById("velocidade").style
  volume = document.getElementById("volume").style
  sobre = document.getElementById("sobre").style
  if (div == 1) {
    area.display = "flex"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 2) {
    area.display = "none"
    comprimento.display = "flex"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 3) {
    area.display = "none"
    comprimento.display = "none"
    massa.display = "flex"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 4) {
    area.display = "none"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "flex"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 5) {
    area.display = "none"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "flex"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 6) {
    area.display = "none"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "flex"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 7) {
    area.display = "none"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "flex"
    sobre.display = "none"
  } else if (div == 8) {
    area.display = "none"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "flex"
  }
}

function trocaunidade(grandeza) {
  if (grandeza == 1) {
    uiID = "uiarea"
    ufID = "ufarea"
  } else if (grandeza == 5) {
    uiID = "uitemperatura"
    ufID = "uftemperatura"
  }
  var ui = document.getElementById(uiID).value
  var uf = document.getElementById(ufID).value
  if (ui != uf) {
    document.getElementById(uiID).value = uf
    document.getElementById(ufID).value = ui
    if (grandeza == 1) {
      calculaarea()
    } else if (grandeza == 5) {
      calculatemperatura()
    }
  }
}

function calculaarea() {
  var viarea = document.getElementById("viarea").value
  var uiarea = document.getElementById("uiarea").value
  var ufarea = document.getElementById("ufarea").value
  var vfarea = document.getElementById("vfarea")
  if (viarea != "") {
    viarea = parseFloat(viarea)
    if (uiarea != "m2") {
      if (uiarea == "mm2") {
        var resultado = viarea / 1000
      } else if (uiarea == "cm2") {
        var resultado = viarea / 100
      } else if (uiarea == "dm2") {
        var resultado = viarea / 10
      } else if (uiarea == "a") {
        var resultado = viarea * 10
      } else if (uiarea == "ha") {
        var resultado = viarea * 100
      } else if (uiarea == "km2") {
        var resultado = viarea * 1000
      }
    } else {
      var resultado = viarea
    }
    if (ufarea != "m2") {
      if (ufarea == "mm2") {
        resultado *= 1000
      } else if (ufarea == "cm2") {
        resultado *= 100
      } else if (ufarea == "dm2") {
        resultado *= 10
      } else if (ufarea == "a") {
        resultado /= 10
      } else if (ufarea == "ha") {
        resultado /= 100
      } else if (ufarea == "km2") {
        resultado /= 1000
      }
    }
    vfarea.innerHTML = resultado.toLocaleString("pt-BR")
  } else {
    vfarea.innerHTML = ""
  }
}

function exibemenu() {
  var div = document.getElementById("menuextendido").style.display
  if (div == "none") {
    document.getElementById("menuextendido").style.display = "flex"
  } else {
    document.getElementById("menuextendido").style.display = "none"
  }
}

function ajustamenu(tela) {
  if (tela.matches) {
    document.getElementById("menuextendido").style.display = "none"
  } else {
    document.getElementById("menuextendido").style.display = "flex"
  }
}


