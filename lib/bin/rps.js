export const rps = (opMove) => {
    const moves = ["rock", "paper", "scissors"]
    const randomMove = moves[Math.floor(Math.random() * moves.length)]
    if (!opMove) {
        return JSON.stringify({ 'player': randomMove })
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
            default:
                console.error(`${opMove} is out of range.`)
                console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`)
                break;
        }
    }
}