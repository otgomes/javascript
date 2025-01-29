/* Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes.
O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica,
a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser 
exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. 
Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está 
sendo encerrado deve ser exibida na tela e então o programa é finalizado.*/

let option = ""

do {
    option = prompt(
        "Seja bem-vindo(a)!\n" +
        "\n Choose an option below" +
        "\n1 - Option one" +
        "\n2 - Option two" +
        "\n3 - Option three" +
        "\n4 - Opção four" +
        "\n5 - Close"
    )

    switch (option) {
        case "1":
            alert("You choosed option 1.")
            break
        case "2":
            alert("You choosed option 2.")
            break
        case "3":
            alert("You choosed option 3.")
            break
        case "4":
            alert("You choosed option 4.")
            break
        case "5":
            alert("Closing the program...")
            break
        default:
            alert("Invalid option! Please choose from 1 to 5.")
    }
} while (option !== 5);