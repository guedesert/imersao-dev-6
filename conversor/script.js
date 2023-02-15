var formarea = document.querySelector("#area")
var formcomprimento = document.querySelector("#comprimento")
var formmassa = document.querySelector("#massa")
var formmoeda = document.querySelector("#moeda")
var formtemperatura = document.querySelector("#temperatura")
var formvelocidade = document.querySelector("#velocidade")
var formvolume = document.querySelector("#volume")
var bannerusuario = document.getElementById("usuario")
var usuario =
  JSON.parse(localStorage.getItem("imersaodev@guedesert")) || "Viajante"
bannerusuario.innerHTML = "Bem-vindo, " + usuario + "!"
var tela = window.matchMedia("(max-width: 815px)")
ajustamenu(tela)
tela.addEventListener("change", ajustamenu)
window.onload = carregadados

formarea.addEventListener("change", calculaarea)
formcomprimento.addEventListener("change", calculacomprimento)
formmassa.addEventListener("change", calculamassa)
formmoeda.addEventListener("change", calculamoeda)
formtemperatura.addEventListener("change", calculatemperatura)
formvelocidade.addEventListener("change", calculavelocidade)
formvolume.addEventListener("change", calculavolume)

function carregadados() {
  calculaarea()
  calculacomprimento()
  calculamassa()
  calculatemperatura()
  calculavelocidade()
  calculavolume()
  definediv(0)
}

function defineusuario() {
  if (usuario == "Viajante") {
    usuario = prompt("Qual o seu nome?")
    if (usuario == "" || usuario == " " || usuario == null) {
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
  inicio = document.getElementById("inicio").style
  area = document.getElementById("area").style
  comprimento = document.getElementById("comprimento").style
  massa = document.getElementById("massa").style
  moeda = document.getElementById("moeda").style
  temperatura = document.getElementById("temperatura").style
  velocidade = document.getElementById("velocidade").style
  volume = document.getElementById("volume").style
  sobre = document.getElementById("sobre").style
  if (div == 0) {
    inicio.display = "flex"
    area.display = "none"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 1) {
    inicio.display = "none"
    area.display = "flex"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 2) {
    inicio.display = "none"
    area.display = "none"
    comprimento.display = "flex"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 3) {
    inicio.display = "none"
    area.display = "none"
    comprimento.display = "none"
    massa.display = "flex"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 4) {
    inicio.display = "none"
    area.display = "none"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "flex"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 5) {
    inicio.display = "none"
    area.display = "none"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "flex"
    velocidade.display = "none"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 6) {
    inicio.display = "none"
    area.display = "none"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "flex"
    volume.display = "none"
    sobre.display = "none"
  } else if (div == 7) {
    inicio.display = "none"
    area.display = "none"
    comprimento.display = "none"
    massa.display = "none"
    moeda.display = "none"
    temperatura.display = "none"
    velocidade.display = "none"
    volume.display = "flex"
    sobre.display = "none"
  } else if (div == 8) {
    inicio.display = "none"
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
    var uiID = "uiarea"
    var ufID = "ufarea"
  } else if (grandeza == 2) {
    var uiID = "uicomprimento"
    var ufID = "ufcomprimento"
  } else if (grandeza == 3) {
    var uiID = "uimassa"
    var ufID = "ufmassa"
  } else if (grandeza == 4) {
    var uiID = "uimoeda"
    var ufID = "ufmoeda"
  } else if (grandeza == 5) {
    var uiID = "uitemperatura"
    var ufID = "uftemperatura"
  } else if (grandeza == 6) {
    var uiID = "uivelocidade"
    var ufID = "ufvelocidade"
  } else if (grandeza == 7) {
    var uiID = "uivolume"
    var ufID = "ufvolume"
  }
  var ui = document.getElementById(uiID).value
  var uf = document.getElementById(ufID).value
  if (ui != uf) {
    document.getElementById(uiID).value = uf
    document.getElementById(ufID).value = ui
    if (grandeza == 1) {
      calculaarea()
    } else if (grandeza == 2) {
      calculacomprimento()
    } else if (grandeza == 3) {
      calculamassa()
    } else if (grandeza == 4) {
      calculamoeda()
    } else if (grandeza == 5) {
      calculatemperatura()
    } else if (grandeza == 6) {
      calculavelocidade()
    } else if (grandeza == 7) {
      calculavolume()
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
    vfarea.innerHTML = "0"
  }
}

function calculacomprimento() {
  var vicomprimento = document.getElementById("vicomprimento").value
  var uicomprimento = document.getElementById("uicomprimento").value
  var ufcomprimento = document.getElementById("ufcomprimento").value
  var vfcomprimento = document.getElementById("vfcomprimento")
  if (vicomprimento != "") {
    vicomprimento = parseFloat(vicomprimento)
    if (uicomprimento != "m") {
      if (uicomprimento == "mm") {
        var resultado = vicomprimento / 1000
      } else if (uicomprimento == "cm") {
        var resultado = vicomprimento / 100
      } else if (uicomprimento == "dm") {
        var resultado = vicomprimento / 10
      } else if (uicomprimento == "dam") {
        var resultado = vicomprimento * 10
      } else if (uicomprimento == "hm") {
        var resultado = vicomprimento * 100
      } else if (uicomprimento == "km") {
        var resultado = vicomprimento * 1000
      }
    } else {
      var resultado = vicomprimento
    }
    if (ufcomprimento != "m") {
      if (ufcomprimento == "mm") {
        resultado *= 1000
      } else if (ufcomprimento == "cm") {
        resultado *= 100
      } else if (ufcomprimento == "dm") {
        resultado *= 10
      } else if (ufcomprimento == "dam") {
        resultado /= 10
      } else if (ufcomprimento == "hm") {
        resultado /= 100
      } else if (ufcomprimento == "km") {
        resultado /= 1000
      }
    }
    vfcomprimento.innerHTML = resultado.toLocaleString("pt-BR")
  } else {
    vfcomprimento.innerHTML = "0"
  }
}

function calculamassa() {
  var vimassa = document.getElementById("vimassa").value
  var uimassa = document.getElementById("uimassa").value
  var ufmassa = document.getElementById("ufmassa").value
  var vfmassa = document.getElementById("vfmassa")
  if (vimassa != "") {
    vimassa = parseFloat(vimassa)
    if (uimassa != "g") {
      if (uimassa == "mg") {
        var resultado = vimassa / 1000
      } else if (uimassa == "cg") {
        var resultado = vimassa / 100
      } else if (uimassa == "dg") {
        var resultado = vimassa / 10
      } else if (uimassa == "dag") {
        var resultado = vimassa * 10
      } else if (uimassa == "hg") {
        var resultado = vimassa * 100
      } else if (uimassa == "kg") {
        var resultado = vimassa * 1000
      } else if (uimassa == "t") {
        var resultado = vimassa * 1000000
      }
    } else {
      var resultado = vimassa
    }
    if (ufmassa != "g") {
      if (ufmassa == "mg") {
        resultado *= 1000
      } else if (ufmassa == "cg") {
        resultado *= 100
      } else if (ufmassa == "dg") {
        resultado *= 10
      } else if (ufmassa == "dag") {
        resultado /= 10
      } else if (ufmassa == "hg") {
        resultado /= 100
      } else if (ufmassa == "kg") {
        resultado /= 1000
      } else if (ufmassa == "t") {
        resultado /= 1000000
      }
    }
    vfmassa.innerHTML = resultado.toLocaleString("pt-BR")
  } else {
    vfmassa.innerHTML = "0"
  }
}

function calculamoeda() {
  var vimoeda = document.getElementById("vimoeda").value
  var uimoeda = document.getElementById("uimoeda").value
  var ufmoeda = document.getElementById("ufmoeda").value
  var vfmoeda = document.getElementById("vfmoeda")
  var url = `https://api.exchangerate-api.com/v4/latest/${vfmoeda}`
}

function calculatemperatura() {
  var vitemperatura = document.getElementById("vitemperatura").value
  var uitemperatura = document.getElementById("uitemperatura").value
  var uftemperatura = document.getElementById("uftemperatura").value
  var vftemperatura = document.getElementById("vftemperatura")
  if (vitemperatura != "") {
    vitemperatura = parseFloat(vitemperatura)
    if (uitemperatura != "c") {
      if (uitemperatura == "f") {
        var resultado = ((vitemperatura - 32) * 5) / 9
      } else if (uitemperatura == "k") {
        var resultado = vitemperatura - 273.15
      }
    } else {
      var resultado = vitemperatura
    }
    if (uftemperatura != "c") {
      if (uftemperatura == "f") {
        resultado = (resultado * 9) / 5 + 32
      } else if (uftemperatura == "k") {
        resultado += 273.15
      }
    }
    vftemperatura.innerHTML = resultado.toLocaleString("pt-BR")
  } else {
    vftemperatura.innerHTML = "0"
  }
}

function calculavelocidade() {
  var vivelocidade = document.getElementById("vivelocidade").value
  var uivelocidade = document.getElementById("uivelocidade").value
  var ufvelocidade = document.getElementById("ufvelocidade").value
  var vfvelocidade = document.getElementById("vfvelocidade")
  if (vivelocidade != "") {
    vivelocidade = parseFloat(vivelocidade)
    if (uivelocidade != "ms") {
      if (uivelocidade == "kmh") {
        var resultado = vivelocidade / 3.6
      } else if (uivelocidade == "mph") {
        var resultado = vivelocidade * 0.44704
      } else if (uivelocidade == "no") {
        var resultado = vivelocidade * 0.51444
      }
    } else {
      var resultado = vivelocidade
    }
    if (ufvelocidade != "ms") {
      if (ufvelocidade == "kmh") {
        resultado *= 3.6
      } else if (ufvelocidade == "mph") {
        resultado /= 0.44704
      } else if (ufvelocidade == "no") {
        resultado /= 0.51444
      }
    }
    vfvelocidade.innerHTML = resultado.toLocaleString("pt-BR")
  } else {
    vfvelocidade.innerHTML = "0"
  }
}

function calculavolume() {
  var vivolume = document.getElementById("vivolume").value
  var uivolume = document.getElementById("uivolume").value
  var ufvolume = document.getElementById("ufvolume").value
  var vfvolume = document.getElementById("vfvolume")
  if (vivolume != "") {
    vivolume = parseFloat(vivolume)
    if (uivolume != "l" && uivolume != "dm3") {
      if (uivolume == "ml") {
        var resultado = vivolume / 1000
      } else if (uivolume == "cl") {
        var resultado = vivolume / 100
      } else if (uivolume == "dl") {
        var resultado = vivolume / 10
      } else if (uivolume == "dal") {
        var resultado = vivolume * 10
      } else if (uivolume == "hl") {
        var resultado = vivolume * 100
      } else if (uivolume == "mm3") {
        var resultado = vivolume / 1000000
      } else if (uivolume == "cm3") {
        var resultado = vivolume / 1000
      } else if (uivolume == "m3") {
        var resultado = vivolume * 1000
      } else if (uivolume == "dam3") {
        var resultado = vivolume * 1000000
      } else if (uivolume == "hm3") {
        var resultado = vivolume * 1000000000
      } else if (uivolume == "km3") {
        var resultado = vivolume * 1000000000000
      }
    } else {
      var resultado = vivolume
    }
    if (ufvolume != "l" && ufvolume != "dm3") {
      if (ufvolume == "ml") {
        resultado *= 1000
      } else if (ufvolume == "cl") {
        resultado *= 100
      } else if (ufvolume == "dl") {
        resultado *= 10
      } else if (ufvolume == "dal") {
        resultado /= 10
      } else if (ufvolume == "hl") {
        resultado /= 100
      } else if (ufvolume == "mm3") {
        resultado *= 1000000
      } else if (ufvolume == "cm3") {
        resultado *= 1000
      } else if (ufvolume == "m3") {
        resultado /= 1000
      } else if (ufvolume == "dam3") {
        resultado /= 1000000
      } else if (ufvolume == "hm3") {
        resultado /= 1000000000
      } else if (ufvolume == "km3") {
        resultado /= 1000000000000
      }
    }
    vfvolume.innerHTML = resultado.toLocaleString("pt-BR")
  } else {
    vfvolume.innerHTML = "0"
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
