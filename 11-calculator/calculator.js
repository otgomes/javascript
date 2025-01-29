const entrada1 = prompt("Digite o primeiro número:")
const entrada2 = prompt("Digite o segundo número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const divisao = x / y
const multiplicacao = x * y

alert(
    "Resultado:\n" +
    "\n Soma: " + soma +
    "\n Subtração: " + subtracao +
    "\n Divisão: " + divisao +
    "\n Multiplicação: " + multiplicacao
)