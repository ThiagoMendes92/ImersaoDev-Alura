var listaFilmes = ['Filme01', 'Filme02', 'Filme03']
// elemento            1          2          3
// indice              0          1          2



//adicionando novos elementos
listaFilmes.push('Filme04')

/*
document.write('<p>' + listaFilmes[0] + '</p>')
document.write('<p>' + listaFilmes[1] + '</p>')
document.write('<p>' + listaFilmes[2] + '</p>')
document.write('<p>' + listaFilmes[3] + '</p>')
*/

//   valor inicial.  -      condição.       -       expressão final: aqui pode ser indice++
for (var indice = 0; indice < listaFilmes.length; indice = indice + 1) {
  document.write('<p>' + listaFilmes[indice] + '</p>')
}