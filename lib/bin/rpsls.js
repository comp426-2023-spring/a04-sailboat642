export const rpsls = (opMove) => {
    const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const randomMove = moves[Math.floor(Math.random() * moves.length)]
    if (!opMove) {
        return JSON.stringify({ "player": randomMove })
    } else {
        switch (randomMove) {
            case 'rock':
                if (opMove === 'paper') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "lose" })
                }
                if (opMove === 'scissors') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "win" })
                }
                if (opMove === 'rock') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "tie" })
                }
                if (opMove === 'lizard') {
                    return JSON.stringifyg({ "player": randomMove, "opponent": opMove, "result": "win" })
                }
                if (opMove === 'spock') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "lose" })
                }
            case 'paper':
                if (opMove === 'scissors') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "lose" })
                }
                if (opMove === 'rock') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "win" })
                }
                if (opMove === 'paper') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "tie" })
                }
                if (opMove === 'lizard') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "lose" })
                }
                if (opMove === 'spock') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "win" })
                }
            case 'scissors':
                if (opMove === 'rock') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "lose" })
                }
                if (opMove === 'paper') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "win" })
                }
                if (opMove === 'scissors') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "tie" })
                }
                if (opMove === 'lizard') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "win" })
                }
                if (opMove === 'spock') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "lose" })
                }
            case 'lizard':
                if (opMove === 'rock') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "lose" })
                }
                if (opMove === 'paper') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "win" })
                }
                if (opMove === 'scissors') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "lose" })
                }
                if (opMove === 'lizard') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "tie" })
                }
                if (opMove === 'spock') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "win" })
                }
            case 'spock':
                if (opMove === 'rock') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "win" })
                }
                if (opMove === 'paper') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "lose" })
                }
                if (opMove === 'scissors') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "win" })
                }
                if (opMove === 'lizard') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "lose" })
                }
                if (opMove === 'spock') {
                    return JSON.stringify({ "player": randomMove, "opponent": opMove, "result": "tie" })
                }
            default:
                console.error(`${opMove} is out of range.`)
                console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

                - Scissors CUTS Paper
                - Paper COVERS Rock
                - Rock SMOOSHES Lizard
                - Lizard POISONS Spock
                - Spock SMASHES Scissors
                - Scissors DECAPITATES Lizard
                - Lizard EATS Paper
                - Paper DISPROVES Spock
                - Spock VAPORIZES Rock
                - Rock CRUSHES Scissors`)
                break;
        }
    }
}