const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function gerarSenhaNum(tamanho) {
  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    senha += Math.floor(Math.random() * 10); // 0-9
  }
  return senha;
}

rl.question("Digite o tamanho da senha: ", (resposta) => {
  const tamanho = parseInt(resposta, 10); // -> corrige o parseDouble
  if (isNaN(tamanho) || tamanho <= 0) {
    console.log("Por favor, digite um número inteiro maior que 0.");
  } else {
    console.log("Senha gerada:", gerarSenhaNum(tamanho));
  }
  rl.close();
});
