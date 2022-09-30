const form = document.getElementById("cadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cpf = document.getElementById("cpf");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validarInputs();
});

function validarInputs() {
  const nomeValor = nome.value;
  const emailValor = email.value;
  const telefoneValor = telefone.value;
  const cpfValor = cpf.value;

  if (nomeValor === "") {
    setErro(nome, "Nome obrigatório.");
  } else if (typeof nomeValor === "int") {
    setErro(nome, "Insira apenas letras.");
  } else setSucesso(nome);

  if (emailValor === "") {
    setErro(email, "E-mail obrigatório");
  } else if (!checkEmail(emailValor)) {
    setErro(email, "Insira um e-mail válido");
  } else {
    setSucesso(email);
  }

  if (telefoneValor === "") {
    setErro(telefone, "Insira um número de telefone");
  } else if (telefoneValor.length < 10) {
    setErro(telefone, "Exemplo: (00)00000-0000");
  } else {
    setSucesso(telefone);
  }

  if (cpfValor === "") {
    setErro(cpf, "Insira um número de CPF");
  } else if (cpfValor.length < 11) {
    setErro(cpf, "Exemplo: 000.000.000-00");
  } else {
    setSucesso(cpf);
  }
}

function setErro(input, message) {
  const controleFormulário = input.parentElement;
  const small = controleFormulário.querySelector("small");

  small.innerText = message;
  controleFormulário.className = "controle-form erro";
}

function setSucesso(input, message) {
  const controleFormulário = input.parentElement;

  controleFormulário.className = "controle-form sucesso";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Mascaras

new Cleave("#cpf", {
  delimiters: [".", ".", "-"],
  blocks: [3, 3, 3, 2],
  numericOnly: true,
});

new Cleave("#telefone", {
  delimiters: ["(", ")", "-"],
  blocks: [0, 2, 5, 4],
  numericOnly: true,
});
