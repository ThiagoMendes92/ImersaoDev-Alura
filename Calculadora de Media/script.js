function gerar() {
  var primeiroB = document.getElementById('abim')
  var segundoB = document.getElementById('bbim')
  var terceiroB = document.getElementById('cbim')
  var quartoB = document.getElementById('dbim')
  var n1 = Number(primeiroB.value)
  var n2 = Number(segundoB.value)
  var n3 = Number(terceiroB.value)
  var n4 = Number(quartoB.value)
  var res = (n1 + n2 + n3 + n4) / 4
  var media = document.getElementById('media')
  
  media.innerHTML = `<p>${res}</p>`
}