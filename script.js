let tela = document.getElementById("tela");

function adicionar(valor) {
  if (tela.innerText === "0") {
    tela.innerText = valor;
  } else {
    tela.innerText += valor;
  }
}

function limpar() {
  tela.innerText = "0";
}

function calcular() {
  try {
    tela.innerText = eval(tela.innerText);
  } catch {
    tela.innerText = "Erro";
  }
}