var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  var resultado = document.getElementById("resultado");
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Acertou!";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Você deve digitar um numero de 0 a 10!";
  } else {
    resultado.innerHTML = "Errou! O número secreto era " + numeroSecreto + "!";
  }
}