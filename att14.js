const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Frase para ser analisada: ', function(frase) {
  rl.question('Letra para ser contada: ', function(letra) {
    let n = 0;
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] === letra) {
        n++;
      }
    }
    console.log(`A letra '${letra}' aparece ${n} vezes.`);
    rl.close();
  });
});




