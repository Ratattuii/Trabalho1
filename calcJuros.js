valor = parseFloat(prompt("Qual é o valor principal?"))

taxaJuros = parseFloat(prompt("Qual é o valor da taxa de juros"))

tempo = parseFloat(prompt("Qual o tempo que você tem pra pagar (em anos)"))

juros = valor * taxaJuros * tempo

valorComJuros = valor + juros

alert("O valor com juros é: " + valorComJuros)