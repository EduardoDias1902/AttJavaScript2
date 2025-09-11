const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Digite o Tempo:',function(tempo){
rl.question('Digite a Velocidade Média:',function(vm){
    const t=parseFloat(tempo)
    const v=parseFloat(vm)
    console.log("A Distância é:",(t*v))
    rl.close()
    })
})