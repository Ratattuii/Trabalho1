const numeroInteiro = parseInt(prompt("Digite um número para gerar a tabuada:"))

tabuada = []

for (let i = 1; i <= 10; i++) {
    const resultado = numeroInteiro * i;

    tabuada.push(resultado)
  }

alert(tabuada)