var peso = parseFloat(prompt("Insira seu peso em quilos (kg)"));

var altura = parseFloat(prompt("Insira sua altura em metros (m)"));

var IMC = peso / (altura * altura);

if (IMC < 18.5) {
    alert("Você está abaixo do peso");
} 

else if (IMC >= 18.6 && IMC <= 24.9) {
    alert("Você está no peso ideal");
} 

else if (IMC >= 25 && IMC <= 29.9) {
    alert("Você está levemente acima do peso");
} 

else if (IMC >= 30 && IMC <= 34.9) {
    alert("Você está com obesidade de grau 1");
} 

else if (IMC >= 35 && IMC <= 39.9) {
    alert("Você está com obesidade de grau 2 (severa)");
} 

else if (IMC >= 40)
    alert("Você está com obesidade de grau 3 (mórbida)")

else {
    alert("Não foi possivel calcular seu IMC");
}
