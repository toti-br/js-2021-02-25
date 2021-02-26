class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = Number(idade)
    }

    apresentar() {
        return `${this.nome} com ${this.idade} anos`
    }
}

class Pessoas {
    constructor() {
        this.pessoas = []
    }

    adicionarPessoa(pessoa) {
        this.pessoas.push(pessoa)
    }

    maisVelhas() {
        let maisVelhasAtuais = [this.pessoas[0]];
      
        for (let pessoa of this.pessoas.slice(1)) {
          if (maisVelhasAtuais[0].idade < pessoa.idade) {
            maisVelhasAtuais = [pessoa];
          } else if (maisVelhasAtuais[0].idade === pessoa.idade) {
            maisVelhasAtuais.push(pessoa);
          }
        }
      
        return maisVelhasAtuais;
      }
    
}

let nomeEl = document.querySelector("#nome");
let idadeEl = document.querySelector("#idade");
let formEl = document.querySelector("form");
let resultadoEl = document.querySelector("#resultado");
let btnExibirMaisVelhos = document.querySelector("#exibirMaisVelhos");

let pessoas = new Pessoas();

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  let pessoa = new Pessoa(nomeEl.value, idadeEl.value);

  pessoas.adicionarPessoa(pessoa);

  nomeEl.value = "";
  idadeEl.value = "";

  resultadoEl.textContent = pessoa.apresentar();
});

btnExibirMaisVelhos.addEventListener("click", function exibirMaisVelhos() {
  let lista = document.createElement("ul");

  for (let pessoaMaisVelha of pessoas.maisVelhas()) {
    let item = document.createElement("li");
    item.textContent = pessoaMaisVelha.apresentar();
    lista.appendChild(item);
  }

  resultadoEl.innerHTML = "";
  resultadoEl.appendChild(lista);
});