let diaSemana = prompt("Qual dia da semana?");

if(diaSemana == "Sábado" || diaSemana == "Domingo"){
    alert("Bom fim de Semana!");
} else {
    alert("Boa semana!");
}

let numero = prompt("Digite um numero");

if(numero < 0){
    alert("O número é negativo!");
} else {
    alert("O número é positivo!");
}

let pontos = prompt("Quantos pontos você fez?");
if(pontos >= 100){
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.")
}

let valor = prompt("Digite o saldo da conta:");
alert(`O saldo da sua conta é R$ ${valor}`);

let nome = prompt("Qual é o seu nome?");
alert(`Boas-vindas ${nome}`);