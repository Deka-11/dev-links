function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img

  if (html.classList.contains("light")) {
    //se estiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Photo of Deborah dos Santos wearing sunglasses in front of the computer",
    )
  } else {
    //se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/2avatar-light.png")
    img.setAttribute(
      "alt",
      '"Photo of Deborah dos Santos in front of the computer',
    )
  }
}
