const botao = document.getElementById("btnTema");
const cabecalho = document.getElementById("cabecalho");
const rodape = document.getElementById("rodape");

let rosa = false;

botao.addEventListener("click", function() {
  if (rosa) {
    cabecalho.style.backgroundColor = "#0059b3"; 
    rodape.style.backgroundColor = "#0059b3";
    button.style.backgroundColor = "#0059b3"
  } else {
    cabecalho.style.backgroundColor = "pink"; 
    rodape.style.backgroundColor = "pink";
  }
  rosa = !rosa;
});
