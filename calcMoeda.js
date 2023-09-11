var quantiaEmDolares = parseFloat(prompt("Digite a quantia em dólares:"));
var moedaDesejada = prompt("Digite a moeda desejada para conversão (EUR ou BRL):");

var taxaDolarParaEuro = 0.85;
var taxaDolarParaReal = 4.93;

var taxaDeCambio;

if (moedaDesejada === "EUR") {
    taxaDeCambio = taxaDolarParaEuro;
}

else if (moedaDesejada === "BRL") {
    taxaDeCambio = taxaDolarParaReal;
} 

else {
    alert("Moeda não suportada. Por favor, escolha EUR ou BRL.");
}

if (taxaDeCambio !== undefined) {
    var quantiaConvertida = quantiaEmDolares * taxaDeCambio;

    alert(quantiaEmDolares + " dólares equivalem a " + quantiaConvertida.toFixed(2) + " " + moedaDesejada);
}