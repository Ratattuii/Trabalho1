const palavra = prompt("Digite uma palavra para verificar se é um palíndromo:");

const palavraLowerCase = palavra.toLowerCase();

const palavraInvertida = palavraLowerCase.split("").reverse().join("");

if (palavraLowerCase === palavraInvertida) {
  alert(palavra + " é um palíndromo");
} 

else {
  alert(palavra + " não é um palíndromo");
}
