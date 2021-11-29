let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let maiorNumero = 0;
let numeroPrimo = 0;
let menorNumero = 1000;
let arrayNumbers = [];


// Exercício 1

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// Exercício 2

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
console.log(sum);

// Exercício 3

let mediaAritmetica = sum / numbers.length;
console.log(mediaAritmetica);

// Exercício 4

if (mediaAritmetica > 20) {
  console.log('Valor maior que 20');
}
else {
  console.log('Valor menor ou igual a 20');
}

// Exercício 5

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
} console.log(maiorNumero);


// Exercício 6

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 3 === 0) {
    numeroPrimo += 1;    
  }
} 
if (numeroPrimo > 0) {
  console.log('total de valores ímpares:', numeroPrimo);
} else {
  console.log('nenhum valor ímpar encontrado');
}


// Exercício 7

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menorNumero) {
    menorNumero = numbers[i];
  }
} console.log(menorNumero);


// Exercício 8

for (let i = 1; i <=25; i += 1) {
  arrayNumbers.push(i);
} console.log(arrayNumbers);

// Exercício 9

for (let index = 0; index < arrayNumbers.length; index += 1){
  console.log(arrayNumbers[index] * 2);
}
