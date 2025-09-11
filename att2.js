const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Digite um número:',function(numero){{
    let n1=parseInt(numero)
    let porcento=parseFloat((n1/100)*15)
    console.log('reajuste:'+(n1+porcento));
}
rl.close();
}
)
