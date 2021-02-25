let nomeEl = document.querySelector("#nome");
let idadeEl = document.querySelector("#idade");
let formEl = document.querySelector("form");
let resultadoEl = document.querySelector("#resultado");
let btnExibirMaisVelhos = document.querySelector("#exibirMaisVelhos");

let pessoas = [];

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  let pessoa = {
    nome: nomeEl.value,
    idade: Number(idadeEl.value)
  };

  pessoas.push(pessoa);

  nomeEl.value = "";
  idadeEl.value = "";

  resultadoEl.textContent = `${pessoa.nome} tem ${pessoa.idade} anos`;
});

btnExibirMaisVelhos.addEventListener("click", function exibirMaisVelhos() {
  let lista = document.createElement("ul");

  for (let pessoaMaisVelha of pessoasMaisVelhas(pessoas)) {
    let item = document.createElement("li");
    item.textContent = `${pessoaMaisVelha.nome} com ${pessoaMaisVelha.idade} anos`;
    lista.appendChild(item);
  }

  resultadoEl.innerHTML = "";
  resultadoEl.appendChild(lista);
});

function pessoasMaisVelhas(pessoas) {
  let maisVelhasAtuais = [pessoas[0]];

  for (let pessoa of pessoas.slice(1)) {
    if (maisVelhasAtuais[0].idade < pessoa.idade) {
      maisVelhasAtuais = [pessoa];
    } else if (maisVelhasAtuais[0].idade === pessoa.idade) {
      maisVelhasAtuais.push(pessoa);
    }
  }

  return maisVelhasAtuais;
}
