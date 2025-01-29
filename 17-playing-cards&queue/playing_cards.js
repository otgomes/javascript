// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

const playingCard = []
let option = ""

do {
    let cards = ""
    for (let i = 0; i < playingCard.length; i++) {
        cards += (i + 1) + "- " + playingCard[i] + "\n"
    }

    option = prompt(
        "Current card stack: " + playingCard.length + "\n" +
        cards + "\n" +
        "\nChoose an option below:" +
        "\n1 - Add a card" +
        "\n2 - Pull a card" +
        "\n3 - Close"
    )

    switch (option) {
        case "1":
            const newCard = prompt("Card name?")
            playingCard.push(newCard)
            alert("The added card is: " + newCard)
            break
        case "2":
            const pulledCard = playingCard.pop()
            if (pulledCard) {
                alert(pulledCard + " was pulled from the deck")
            } else {
                alert("There is no more cards to pull!")
            }
            break
        case "3":
            alert("Closing...")
            break
        default:
            alert("Invalid Option!")
            break
    }
} while (option !== "3")