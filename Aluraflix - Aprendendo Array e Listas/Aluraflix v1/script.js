var listaFilmes = [
  "https://www.cafecomfilme.com.br/media/k2/items/cache/99a55ddf297fe1c0e5cd25b32402e97a_XL.jpg?t=20200716_212331",
  "https://images-na.ssl-images-amazon.com/images/I/815O+GkYYDL.jpg",
  "https://ae01.alicdn.com/kf/HTB1Md3nXizxK1RkSnaVq6xn9VXaA/Filme-mural-de-parede-em-tela-personalizado-p-ster-warcraft-durotan-adesivos-de-parede-mural-de.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}