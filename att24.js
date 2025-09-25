const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("digite o maior numero: ",function(max){
    rl.question("digite o menor numero: ",function(min){
        const maxNum = parseInt(max);
        const minNum = parseInt(min);

        console.log(getRandomIntInclusive(minNum,maxNum));
        rl.close();
})})
function getRandomIntInclusive(minNum, maxNum) {
  min = Math.ceil(minNum); 
  max = Math.floor(maxNum); 
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
