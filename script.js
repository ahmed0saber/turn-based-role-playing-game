let playerOneStats = {
    playerOneHealth: 200,
    playerOneAttack: 20,
    playerOneArmor: 10,
    playerOneHeal: 5
}
let {playerOneHealth, playerOneAttack, playerOneArmor, playerOneHeal} = playerOneStats
let playerOneCurrentHealth = playerOneHealth

let playerTwoStats = {
    playerTwoHealth: 160,
    playerTwoAttack: 26,
    playerTwoArmor: 5,
    playerTwoHeal: 10
}
let {playerTwoHealth, playerTwoAttack, playerTwoArmor, playerTwoHeal} = playerTwoStats
let playerTwoCurrentHealth = playerTwoHealth

document.getElementById("playerOneHealth").textContent = playerOneHealth
document.getElementById("playerOneAttack").textContent = playerOneAttack
document.getElementById("playerOneArmor").textContent = playerOneArmor
document.getElementById("playerOneHeal").textContent = playerOneHeal
document.getElementById("playerOneCurrentHealth").textContent = playerOneCurrentHealth

document.getElementById("playerTwoHealth").textContent = playerTwoHealth
document.getElementById("playerTwoAttack").textContent = playerTwoAttack
document.getElementById("playerTwoArmor").textContent = playerTwoArmor
document.getElementById("playerTwoHeal").textContent = playerTwoHeal
document.getElementById("playerTwoCurrentHealth").textContent = playerTwoCurrentHealth

var playerOneTurn = true, gameOver = false

const attack = (player) => {
    if(gameOver){
        return
    }
    if(player == 1){
        if(!playerOneTurn){
            return
        }
        if(playerOneAttack >= playerTwoArmor && playerTwoCurrentHealth > 0){
            playerTwoCurrentHealth -= playerOneAttack - playerTwoArmor
            if(playerTwoCurrentHealth <= 0){
                document.getElementById("playerTwoCurrentHealth").textContent = 0
                playerTwoCurrentHealth = 0
                gameOver = true
            }
            document.getElementById("playerTwoCurrentHealth").textContent = playerTwoCurrentHealth
            document.getElementById("playerTwoGreenHealth").style.width = `${(playerTwoCurrentHealth / playerTwoHealth) * 100}%`
        }
    }else{
        if(playerOneTurn){
            return
        }
        if(playerTwoAttack >= playerOneArmor && playerOneCurrentHealth > 0){
            playerOneCurrentHealth -= playerTwoAttack - playerOneArmor
            if(playerOneCurrentHealth <= 0){
                document.getElementById("playerOneCurrentHealth").textContent = 0
                playerOneCurrentHealth = 0
                gameOver = true
            }
            document.getElementById("playerOneCurrentHealth").textContent = playerOneCurrentHealth
            document.getElementById("playerOneGreenHealth").style.width = `${(playerOneCurrentHealth / playerOneHealth) * 100}%`
        }
    }
    playerOneTurn = !playerOneTurn
    whichTurn()
}

const heal = (player) => {
    if(gameOver){
        return
    }
    if(player == 1){
        if(!playerOneTurn){
            return
        }
        if(playerOneCurrentHealth < playerOneHealth){
            if(playerOneCurrentHealth + playerOneHeal > playerOneHealth){
                playerOneCurrentHealth = playerOneHealth
            }else{
                playerOneCurrentHealth += playerOneHeal
            }
            document.getElementById("playerOneCurrentHealth").textContent = playerOneCurrentHealth
            document.getElementById("playerOneGreenHealth").style.width = `${(playerOneCurrentHealth / playerOneHealth) * 100}%`
        }
    }else{
        if(playerOneTurn){
            return
        }
        if(playerTwoCurrentHealth < playerTwoHealth){
            if(playerTwoCurrentHealth + playerTwoHeal > playerTwoHealth){
                playerTwoCurrentHealth = playerTwoHealth
            }else{
                playerTwoCurrentHealth += playerTwoHeal
            }
            document.getElementById("playerTwoCurrentHealth").textContent = playerTwoCurrentHealth
            document.getElementById("playerTwoGreenHealth").style.width = `${(playerTwoCurrentHealth / playerTwoHealth) * 100}%`
        }
    }
    playerOneTurn = !playerOneTurn
    whichTurn()
}

const whichTurn = () => {
    if(gameOver){
        if(playerOneCurrentHealth <= 0){
            document.getElementById("playerTurn").textContent = "Player two win"
        }else{
            document.getElementById("playerTurn").textContent = "Player one win"
        }
    }else{
        if(playerOneTurn){
            document.getElementById("playerTurn").textContent = "Player one's turn"
        }else{
            document.getElementById("playerTurn").textContent = "Player two's turn"
        }
    }
}