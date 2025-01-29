const primeiroNome = prompt("Digite o primeiro nome:")
const sobrenome = prompt("Digite o sobrenome:")
const campoEstudo = prompt("Qual o campo de estudo?")
const anoNascimento = prompt("Qual o ano de nascimento?")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\n Nome completo: " + primeiroNome + " " + sobrenome +
    "\n Campo de estudo: " + campoEstudo +
    "\n Idade: " + (2025 - anoNascimento)
)