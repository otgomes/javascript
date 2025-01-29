// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Otavio, 2º Othon, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let queue = []
let option = ""

do {
    let pacients = ""
    for (let i = 0; i < queue.length; i++) {
        pacients += (i + 1) + "º - " + queue[i] + "\n"
    }
        
    option = prompt(
        "Pacients:\n" + pacients +
        "\nChoose an option below" +
        "\n1 - New pacient" +
        "\n2 - Consult pacient" +
        "\n3 - Close"
    )

    switch (option) {
        case "1":
            const newPacient = prompt("Name of the new pacient:")
            queue.push(newPacient)
            break
        case "2":
            const consultedPacient = queue.shift()
            if (consultedPacient) {
                alert(consultedPacient + " was removed from queue.")
            } else {
                alert("There's no pacients in queue!")
            }
            break
        case "3":
            alert("Closing the program...")
            break
        default:
            alert("Invalid Option!")
    }
} while (option !== 3);