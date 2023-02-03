var formarea = document.querySelector(".area")
var formau = document.querySelector(".alteraunidade")
var bannerusuario = document.getElementById("usuario")
var usuario =
  JSON.parse(localStorage.getItem("imersaodev@guedesert")) || "Viajante"
bannerusuario.innerHTML = "Bem-vindo, " + usuario + "!"
var tela = window.matchMedia("(max-width: 815px)")
ajustamenu(tela)
tela.addEventListener("change", ajustamenu)
window.onload = carregadados

formarea.addEventListener("change", calculaarea)
formau.addEventListener("click", trocaunidade)

function carregadados() {
  calculaarea()
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
    vfarea.innerHTML = resultado
  } else {
    vfarea.innerHTML = ""
  }
}

function trocaunidade() {
  var uiarea = document.getElementById("uiarea").value
  var ufarea = document.getElementById("ufarea").value
  if (uiarea != ufarea) {
    document.getElementById("uiarea").value = ufarea
    document.getElementById("ufarea").value = uiarea
    calculaarea()
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
