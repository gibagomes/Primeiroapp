const btn = document.getElementById("btn");
const saida = document.getElementById("saida");

btn.addEventListener("click", function () {
  saida.textContent = "Funcionou! Você acabou de rodar JavaScript no celular.";
});
