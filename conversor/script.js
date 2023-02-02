var formarea = document.querySelector(".area")
var formau = document.querySelector(".alteraunidade")

formarea.addEventListener("input", calculaarea)
formau.addEventListener("click", trocaunidade)

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
        resultado = resultado * 1000 + " mm²"
      } else if (ufarea == "cm2") {
        resultado = resultado * 100 + " cm²"
      } else if (ufarea == "dm2") {
        resultado = resultado * 10 + " dm²"
      } else if (ufarea == "a") {
        resultado = resultado / 10 + " a"
      } else if (ufarea == "ha") {
        resultado = resultado / 100 + " ha"
      } else if (ufarea == "km2") {
        resultado = resultado / 100 + " km²"
      }
    } else {
      resultado += " m²"
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
