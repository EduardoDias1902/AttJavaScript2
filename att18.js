numeros = [1,2,3,4,5,6,7,8,9]
nomes = ["Akiane B.","Eduardo D.","Vitor A.","Pedro O.","Gustavo S.","André L.","Matheus A."]
console.log(nomes)
console.log(numeros)
console.log(numeros.join())
console.log(numeros.reverse())
console.log(numeros.slice())
console.log(nomes.sort())
console.log(numeros.filter(num => num % 2 === 0))
console.log(numeros.map(num => num * num))
console.log((acumulador, valorAtual) => acumulador + valorAtual, 0)
nomes.forEach(nome => {
  console.log(nome);
})