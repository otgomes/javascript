// Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número   dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.

const number = parseFloat(prompt("Which number do you want to calculate the times table for?"))
let result = ""

for (let factor = 1; factor <= 20; factor++) {
    result += " -> " + number + " x " + factor + " = " + (number * factor) + "\n"
}

alert("Times table result of " + number + ":\n\n" + result)