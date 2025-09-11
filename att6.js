const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu salário:',function(dinheiro){
    rl.question('Digite o valor da solicitação da prestação:',function(prestacao){
            var sl=parseFloat(dinheiro);
            var porcentagemSl=parseFloat((dinheiro/100)*20);
            var pre=parseFloat(prestacao);
            var soma=parseFloat();

            if(pre>porcentagemSl){
                console.log('Empréstimo não pode ser concedido')
            }else{
                console.log('Empréstimo pode ser concedido.')
            }
            rl.close()
    })
})