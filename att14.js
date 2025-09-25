const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function gerarSenha(tamanho) {
  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    senha += Math.floor(Math.random() * 10); // só números de 0 a 9
  }
  return senha;
}

rl.question("Digite o tamanho da senha: ", (resposta) => {
  const tamanho = parseInt(resposta);
  console.log("Senha gerada:", gerarSenha(tamanho));
  rl.close();
});
