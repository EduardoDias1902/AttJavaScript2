const idades = [20, 25, 30, 19, 40];
const todasMaioresQue18 = idades.every(function(idade) {
  return idade > 18;
});
console.log(todasMaioresQue18);