const input = document.getElementById("tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista");

botaoAdicionar.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
  const texto = input.value;

  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const item = document.createElement("li");
  item.textContent = texto;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";

  botaoRemover.addEventListener("click", function () {
    lista.removeChild(item);
  });

  item.appendChild(botaoRemover);
  lista.appendChild(item);

  input.value = "";
}