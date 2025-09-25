const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculadora(expressao) {
  try {
    return eval(expressao); // avalia a expressão matemática
  } catch (e) {
    return "Expressão inválida!";
  }
}

rl.question("Digite a expressão matemática: ", (resposta) => {
  console.log("Resultado:", calculadora(resposta));
  rl.close();
});