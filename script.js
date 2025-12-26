const input = document.getElementById("tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

mostrarTarefas();

botaoAdicionar.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
  const texto = input.value;

  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  tarefas.push(texto);
  salvarTarefas();
  mostrarTarefas();

  input.value = "";
}

function mostrarTarefas() {
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const item = document.createElement("li");
    item.textContent = tarefa;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";

    botaoRemover.addEventListener("click", function () {
      tarefas.splice(index, 1);
      salvarTarefas();
      mostrarTarefas();
    });

    item.appendChild(botaoRemover);
    lista.appendChild(item);
  });
}

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}