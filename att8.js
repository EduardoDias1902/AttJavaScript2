const { parse } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua idade:',function(idade){
            var id=parseInt(idade);

            if(id<16){
                console.log('Não-eleitor')
            }else if(id>=18 && id<65){
                console.log('Eleitor obrigatório')
            }else if((id>=16 && id<18)||(id>=65)){
                console.log('Eleitor facultativo')
            }
            rl.close()
    })
