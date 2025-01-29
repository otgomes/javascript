const nomeVeiculo1 = prompt("Digite o nome do primeiro veículo:");
const velocidadeVeiculo1 = parseFloat(prompt("Digite a velocidade do primeiro veículo"));

const nomeVeiculo2 = prompt("Digite o nome do segundo veículo:");
const velocidadeVeiculo2 = parseFloat(prompt("Digite a velocidade do segundo veículo:"));

if (velocidadeVeiculo1 > velocidadeVeiculo2) {
    alert("O veículo " + nomeVeiculo1 + " é mais rápido")
} else if (velocidadeVeiculo1 < velocidadeVeiculo2) {
    alert("O veículo " + nomeVeiculo2 + " é mais rápido")
} else if (velocidadeVeiculo1 = velocidadeVeiculo2) {
    alert("Os veículos " + nomeVeiculo1 + " e " + nomeVeiculo2 + " tem a mesma velocidade!")
}