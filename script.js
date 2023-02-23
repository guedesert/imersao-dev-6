function mudaimagem(item) {
  if (item == 0) {
    document.getElementById("conversor").src = "./conversor/assets/favicon.svg"
    document.getElementById("mentalista").src =
      "./mentalista/assets/favicon.svg"
    document.getElementById("aluraflix").src = "./aluraflix/assets/favicon.svg"
    document.getElementById("tabela-de-pontos").src =
      "./tabela-de-pontos/assets/favicon.svg"
  } else if (item == 1) {
    document.getElementById("conversor").src = "./assets/conversor.svg"
  } else if (item == 2) {
    document.getElementById("mentalista").src = "./assets/mentalista.svg"
  } else if (item == 3) {
    document.getElementById("aluraflix").src = "./assets/aluraflix.svg"
  } else if (item == 4) {
    document.getElementById("tabela-de-pontos").src =
      "./assets/tabela-de-pontos.svg"
  }
}
