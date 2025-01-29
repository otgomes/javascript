/* Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre 
na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de 
adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e 
então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, 
porém subtraindo o valor. A opção de sair deve encerrar o programa.*/

let balance = parseFloat(prompt("Insert inicial avaliable cash amount:"))
/* balance = parseFloat(balance)*/
let option = ""

do {
    option = prompt(
        "Balance avaliable: $ " + balance +
        "\n1 - Add cash" +
        "\n2 - Remove cash" +
        "\n3 - Leave"
    )

    switch (option) {
        case "1":
            balance += parseFloat(prompt("Enter a value to add:"))
            break
        case "2":
            balance -= parseFloat(prompt("Enter a value to remove:"))
            break
        case "3":
            alert("Closing program...")
            break
        default:
            alert("Invalid Option!")
    }
} while (option !== "3")