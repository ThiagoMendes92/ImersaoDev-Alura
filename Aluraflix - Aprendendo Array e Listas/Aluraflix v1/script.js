var listaFilmes = [
  "https://www.cafecomfilme.com.br/media/k2/items/cache/99a55ddf297fe1c0e5cd25b32402e97a_XL.jpg?t=20200716_212331",
  "https://images-na.ssl-images-amazon.com/images/I/815O+GkYYDL.jpg",
  "https://www.maceioshopping.com/wp-content/uploads/2021/12/homemaranha-720x1000.jpg",
  "https://i.pinimg.com/originals/8f/da/20/8fda2009723d38f15b5692a4370f62c7.jpg",
  "https://br.web.img3.acsta.net/pictures/19/04/03/18/23/2539612.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}