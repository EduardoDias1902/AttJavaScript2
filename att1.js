const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Digite um número:',function(numero){{
    let n1=parseInt(numero)
    console.log("Antecessor:"+(n1-1));
    console.log("Sucessor:"+(n1+1));

}
rl.close();
}
)

