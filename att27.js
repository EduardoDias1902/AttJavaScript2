const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function criarMatriz(linhas, colunas) {
  let matriz = [];
  for (let i = 0; i < linhas; i++) {
    let linha = [];
    for (let j = 0; j < colunas; j++) {
      linha.push(Math.floor(Math.random() * 10)); // números aleatórios de 0 a 9
    }
    matriz.push(linha);
  }
  return matriz;
}

// Perguntar linhas e colunas ao usuário
rl.question("Digite o número de linhas: ", (linhasInput) => {
  rl.question("Digite o número de colunas: ", (colunasInput) => {
    const linhas = parseInt(linhasInput);
    const colunas = parseInt(colunasInput);

    if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
      console.log("Por favor, insira valores válidos maiores que 0.");
    } else {
      const matriz = criarMatriz(linhas, colunas);
      console.log("Matriz gerada:");
      matriz.forEach(linha => console.log(linha));
    }

    rl.close();
  });
});
