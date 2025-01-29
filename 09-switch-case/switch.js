const resultado = prompt("Escolha uma alternativa: \ny)\nx)\nz)")

const resultadoNumero = parseFloat(resultado)

switch (resultadoNumero) {
    case 1:
        alert("O resultado é 'Y'")
        break
    case 2:
        alert("O resultado é 'X'")
        break
    case 3:
        alert("O resultado é 'Z'")
        break
    default:
        alert("Finalizando...")
}