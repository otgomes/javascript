const idade = prompt("Digite sua idade abaixo")

if (idade >= 18) {
    alert("Você é maior de idade.")
} else if (idade >=12) {
    alert("Você é menor de idade.")
} else if (idade >=5) {
    alert("Você é apenas uma criança.")
} else if (idade <=4) {
    alert("Você é um bebê")
} else {
    alert("")
}

const resultado = 10 === "10" ? "Verdadeiro" : "Falso"
console.log(resultado)