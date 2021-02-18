
//<-------------AUDIO------------->// 
const audioClick = new Audio('./click.mp3')
const music = document.querySelector('audio')
const audioVictory = new Audio("./victory.mp3")

//<-------------SCORE BOARD SELECTORS------------->// 

const scoreBoard = document.querySelector('#score-board-container')
const player1Container = document.querySelector('#player1Name')
const player2Container = document.querySelector('#player2Name')
const player1ScoreContainer = document.querySelector('#player1Score')
const player2ScoreContainer = document.querySelector('#player2Score')
let scorePlayer1 = 0
let scorePlayer2 = 0

//<-------------GAME CONTAINERS SELECTORS------------->// 

const gameContainer3x3 = document.querySelector('#game-container-3x3')
const gameContainer5x5 = document.querySelector('#game-container-5x5')
const gameContainer7x7 = document.querySelector('#game-container-7x7')
const allGameContainers = document.querySelectorAll('#game-container')

//<-------------BUTTONS SELECTORS------------->// 

const volumeBtn = document.querySelector('.volume-btn')
const musicBtn = document.querySelector('.music-btn')
const btn3x3 = document.querySelector('.game-btn-1')
const btn5x5 = document.querySelector('.game-btn-2')
const btn7x7 = document.querySelector('.game-btn-3')
const btnRestartGame = document.querySelector('#restart-btn')
const btnBackHome = document.querySelector('#home-btn')

//<-------------CASES  SELECTORS------------->// 
const cases3x3 = document.querySelectorAll('.case-3x3')
const cases5x5 = document.querySelectorAll('.case-5x5')
const cases7x7 = document.querySelectorAll('.case-7x7')

//<-------------GLOBAL FUNCTIONS------------->// 

//<---HANDLE PLAYERS NAME--->// 

function askForPlayersNames() {
    let namePlayer1 = prompt('Let us who you are', 'Player 1')
    let namePlayer2 = prompt(`Hey ${namePlayer1}, who will be the other player ?`, 'Player 2')
    player1Container.innerHTML = `1- ${namePlayer1}`
    player2Container.innerHTML = `2- ${namePlayer2}`
}
//<---HANDLE SCORE COUNT--->//
function countScore() {


}

//<---HANDLE GAME CONTAINERS--->// 

function handleGameContainer3x3() {
    gameContainer3x3.classList.remove('hidden')
    btnRestartGame.classList.remove('hidden')
    btnBackHome.classList.remove('hidden')
    scoreBoard.classList.remove('hidden')
    btn3x3.classList.add('hidden')
    btn5x5.classList.add('hidden')
    btn7x7.classList.add('hidden')
    gameContainer5x5.classList.add('hidden')
    gameContainer7x7.classList.add('hidden')


}

function handleGameContainer5x5() {
    gameContainer5x5.classList.remove('hidden')
    btnRestartGame.classList.remove('hidden')
    btnBackHome.classList.remove('hidden')
    scoreBoard.classList.remove('hidden')
    btn3x3.classList.add('hidden')
    btn5x5.classList.add('hidden')
    btn7x7.classList.add('hidden')
    gameContainer3x3.classList.add('hidden')
    gameContainer7x7.classList.add('hidden')
}

function handleGameContainer7x7() {
    gameContainer7x7.classList.remove('hidden')
    btnRestartGame.classList.remove('hidden')
    btnBackHome.classList.remove('hidden')
    scoreBoard.classList.remove('hidden')
    btn3x3.classList.add('hidden')
    btn5x5.classList.add('hidden')
    btn7x7.classList.add('hidden')
    gameContainer3x3.classList.add('hidden')
    gameContainer5x5.classList.add('hidden')
}

// function cleanSheet() {
//     if (allGameContainers.className !== 'game-container game-container-hiden') {
//         window.confirm('Do you really want to change the grid ? This will end your current game !')
//         cases3x3.forEach(element => element.innerHTML = '')
//         cases3x3.forEach(element => element.classList.remove('caseBis'))
//         cases5x5.forEach(element => element.innerHTML = '')
//         cases5x5.forEach(element => element.classList.remove('caseBis'))
//         cases7x7.forEach(element => element.innerHTML = '')
//         cases7x7.forEach(element => element.classList.remove('caseBis'))
//         turn = 0
//     } else {
//         return
//     }
// }

//<---HANDLE WHO'S TURN--->// 

let turn = 0
function whoIsNext() {
    turn++
    return turn % 2 === 0 ? 'O' : 'X'
}

//<---HANDLE RESTART GAME--->// 

function handleRestartGame() {
    if (window.confirm('If you confirm, you will lose you current game and scores. Do you really want to ?')) {
        cases3x3.forEach(element => element.innerHTML = '')
        cases3x3.forEach(element => element.classList.remove('caseBis'))
        cases5x5.forEach(element => element.innerHTML = '')
        cases5x5.forEach(element => element.classList.remove('caseBis'))
        cases7x7.forEach(element => element.innerHTML = '')
        cases7x7.forEach(element => element.classList.remove('caseBis'))
        turn = 0
        scorePlayer1 = 0
        scorePlayer2 = 0
        player1ScoreContainer.innerHTML = scorePlayer1
        player2ScoreContainer.innerHTML = scorePlayer2
    } else return
}

function handleBackHome () {
    handleRestartGame()
    gameContainer3x3.classList.add('hidden')
    btnRestartGame.classList.add('hidden')
    scoreBoard.classList.add('hidden')
    btnBackHome.classList.add('hidden')
    btn3x3.classList.remove('hidden')
    btn5x5.classList.remove('hidden')
    btn7x7.classList.remove('hidden')
    gameContainer5x5.classList.add('hidden')
    gameContainer7x7.classList.add('hidden')
}

//<---HANDLE CLICK SOUND--->// 

function handleVolumeBtn() {
    audioClick.muted = true
}

function playClickSound() {
    audioClick.play()
}

function playVictorySound() {
    audioVictory.play()
}

//<---HANDLE MUSIC--->// 

// function handleMusicBtn() {
//     music.muted = true
// }

//<---HANDLE MOUSE EVENTS--->// 

function handleMouseEnter() {
    this.classList.add('caseEnter')
}

function handleMouseLeave() {
    this.classList.remove('caseEnter')
}

//<-------------EVENTS LISTENERS------------->// 

//<---HANDLE CLICKS--->// 


btn3x3.addEventListener('click', askForPlayersNames)
btn3x3.addEventListener('click', handleGameContainer3x3)
btn5x5.addEventListener('click', askForPlayersNames)
btn5x5.addEventListener('click', handleGameContainer5x5)
btn7x7.addEventListener('click', askForPlayersNames)
btn7x7.addEventListener('click', handleGameContainer7x7)
btnRestartGame.addEventListener('click', handleRestartGame)
btnBackHome.addEventListener('click', handleBackHome)
cases3x3.forEach(element => element.addEventListener('click', playClickSound))
cases5x5.forEach(element => element.addEventListener('click', playClickSound))
cases7x7.forEach(element => element.addEventListener('click', playClickSound))
volumeBtn.addEventListener('click', handleVolumeBtn);
// musicBtn.addEventListener('click', handleMusicBtn)


//<---HANDLE MOUSE--->// 


cases3x3.forEach(element => element.addEventListener('mouseenter', handleMouseEnter))
cases5x5.forEach(element => element.addEventListener('mouseenter', handleMouseEnter))
cases7x7.forEach(element => element.addEventListener('mouseenter', handleMouseEnter))
cases3x3.forEach(element => element.addEventListener('mouseleave', handleMouseLeave))
cases5x5.forEach(element => element.addEventListener('mouseleave', handleMouseLeave))
cases7x7.forEach(element => element.addEventListener('mouseleave', handleMouseLeave))


//<-------------3x3 GAME LOGIC & PROPER FUNCTIONS------------->// 


function play3x3() {
    this.classList.add("caseBis")
    if (!this.innerHTML) this.innerHTML = whoIsNext()
    weHaveAWinnerAlert = window.setTimeout(weHaveAWinner3x3, 200);
};


cases3x3.forEach(element => element.addEventListener('click', play3x3))

function weHaveAWinner3x3() {
    if (cases3x3[0].innerHTML !== '' && cases3x3[0].innerHTML === cases3x3[1].innerHTML && cases3x3[1].innerHTML === cases3x3[2].innerHTML) {
        whoIsTheWinner3x3(cases3x3[0].innerHTML)
    } else if (cases3x3[0].innerHTML !== '' && cases3x3[0].innerHTML === cases3x3[3].innerHTML && cases3x3[3].innerHTML === cases3x3[6].innerHTML) {
        whoIsTheWinner3x3(cases3x3[0].innerHTML)
    } else if (cases3x3[0].innerHTML !== '' && cases3x3[0].innerHTML === cases3x3[4].innerHTML && cases3x3[4].innerHTML === cases3x3[8].innerHTML) {
        whoIsTheWinner3x3(cases3x3[0].innerHTML)
    } else if (cases3x3[1].innerHTML !== '' && cases3x3[1].innerHTML === cases3x3[4].innerHTML && cases3x3[4].innerHTML === cases3x3[7].innerHTML) {
        whoIsTheWinner3x3(cases3x3[1].innerHTML)
    } else if (cases3x3[2].innerHTML !== '' && cases3x3[2].innerHTML === cases3x3[5].innerHTML && cases3x3[5].innerHTML === cases3x3[8].innerHTML) {
        whoIsTheWinner3x3(cases3x3[2].innerHTML)
    } else if (cases3x3[2].innerHTML !== '' && cases3x3[2].innerHTML === cases3x3[4].innerHTML && cases3x3[4].innerHTML === cases3x3[6].innerHTML) {
        whoIsTheWinner3x3(cases3x3[2].innerHTML)
    } else if (cases3x3[3].innerHTML !== '' && cases3x3[3].innerHTML === cases3x3[4].innerHTML && cases3x3[4].innerHTML === cases3x3[5].innerHTML) {
        whoIsTheWinner3x3(cases3x3[3].innerHTML)
    } else if (cases3x3[6].innerHTML !== '' && cases3x3[6].innerHTML === cases3x3[7].innerHTML && cases3x3[7].innerHTML === cases3x3[8].innerHTML) {
        whoIsTheWinner3x3(cases3x3[6].innerHTML)
    }
}

function whoIsTheWinner3x3(winner) {
    playVictorySound()
    if (turn % 2 === 0) {
        alert(`${player2Container.innerHTML} is the WINNNNNNNNER!`)
        cases3x3.forEach(element => element.innerHTML = '')
        cases3x3.forEach(element => element.classList.remove('caseBis'))
        player2ScoreContainer.innerHTML = scorePlayer2 += 1
        turn = 0
    } else {
        alert(`${player1Container.innerHTML} is the WINNNNNNNNER!`)
        cases3x3.forEach(element => element.innerHTML = '')
        cases3x3.forEach(element => element.classList.remove('caseBis'))
        player1ScoreContainer.innerHTML = scorePlayer1 += 1
        turn = 0
    }



}

//<-------------5x5 GAME LOGIC & PROPER FUNCTIONS------------->// 

function play5x5() {
    if (!this.innerHTML) this.innerHTML = whoIsNext()
    this.classList.add("caseBis")
    weHaveAWinnerAlert = window.setTimeout(weHaveAWinner5x5, 100)
}

cases5x5.forEach(element => element.addEventListener('click', play5x5))

function weHaveAWinner5x5() {
    if (cases5x5[0].innerHTML !== '' && cases5x5[0].innerHTML === cases5x5[1].innerHTML && cases5x5[1].innerHTML === cases5x5[2].innerHTML && cases5x5[2].innerHTML === cases5x5[3].innerHTML) {
        whoIsTheWinner5x5(cases5x5[0].innerHTML)
    } else if (cases5x5[0].innerHTML !== '' && cases5x5[0].innerHTML === cases5x5[5].innerHTML && cases5x5[5].innerHTML === cases5x5[10].innerHTML && cases5x5[10].innerHTML === cases5x5[15].innerHTML) {
        whoIsTheWinner5x5(cases5x5[0].innerHTML)
    } else if (cases5x5[0].innerHTML !== '' && cases5x5[0].innerHTML === cases5x5[6].innerHTML && cases5x5[6].innerHTML === cases5x5[12].innerHTML && cases5x5[12].innerHTML === cases5x5[18].innerHTML) {
        whoIsTheWinner5x5(cases5x5[0].innerHTML)
    } else if (cases5x5[1].innerHTML !== '' && cases5x5[1].innerHTML === cases5x5[2].innerHTML && cases5x5[2].innerHTML === cases5x5[3].innerHTML && cases5x5[3].innerHTML === cases5x5[4].innerHTML) {
        whoIsTheWinner5x5(cases5x5[1].innerHTML)
    } else if (cases5x5[1].innerHTML !== '' && cases5x5[1].innerHTML === cases5x5[6].innerHTML && cases5x5[6].innerHTML === cases5x5[11].innerHTML && cases5x5[11].innerHTML === cases5x5[16].innerHTML) {
        whoIsTheWinner5x5(cases5x5[1].innerHTML)
    } else if (cases5x5[1].innerHTML !== '' && cases5x5[1].innerHTML === cases5x5[7].innerHTML && cases5x5[7].innerHTML === cases5x5[13].innerHTML && cases5x5[13].innerHTML === cases5x5[19].innerHTML) {
        whoIsTheWinner5x5(cases5x5[1].innerHTML)
    } else if (cases5x5[2].innerHTML !== '' && cases5x5[2].innerHTML === cases5x5[7].innerHTML && cases5x5[7].innerHTML === cases5x5[12].innerHTML && cases5x5[12].innerHTML === cases5x5[17].innerHTML) {
        whoIsTheWinner5x5(cases5x5[2].innerHTML)
    } else if (cases5x5[3].innerHTML !== '' && cases5x5[3].innerHTML === cases5x5[7].innerHTML && cases5x5[7].innerHTML === cases5x5[11].innerHTML && cases5x5[11].innerHTML === cases5x5[15].innerHTML) {
        whoIsTheWinner5x5(cases5x5[3].innerHTML)
    } else if (cases5x5[3].innerHTML !== '' && cases5x5[3].innerHTML === cases5x5[8].innerHTML && cases5x5[8].innerHTML === cases5x5[13].innerHTML && cases5x5[13].innerHTML === cases5x5[18].innerHTML) {
        whoIsTheWinner5x5(cases5x5[3].innerHTML)
    } else if (cases5x5[4].innerHTML !== '' && cases5x5[4].innerHTML === cases5x5[9].innerHTML && cases5x5[9].innerHTML === cases5x5[14].innerHTML && cases5x5[14].innerHTML === cases5x5[19].innerHTML) {
        whoIsTheWinner5x5(cases5x5[4].innerHTML)
    } else if (cases5x5[4].innerHTML !== '' && cases5x5[4].innerHTML === cases5x5[8].innerHTML && cases5x5[8].innerHTML === cases5x5[12].innerHTML && cases5x5[12].innerHTML === cases5x5[16].innerHTML) {
        whoIsTheWinner5x5(cases5x5[4].innerHTML)
    } else if (cases5x5[5].innerHTML !== '' && cases5x5[5].innerHTML === cases5x5[6].innerHTML && cases5x5[6].innerHTML === cases5x5[7].innerHTML && cases5x5[7].innerHTML === cases5x5[8].innerHTML) {
        whoIsTheWinner5x5(cases5x5[5].innerHTML)
    } else if (cases5x5[5].innerHTML !== '' && cases5x5[5].innerHTML === cases5x5[10].innerHTML && cases5x5[10].innerHTML === cases5x5[15].innerHTML && cases5x5[15].innerHTML === cases5x5[20].innerHTML) {
        whoIsTheWinner5x5(cases5x5[5].innerHTML)
    } else if (cases5x5[5].innerHTML !== '' && cases5x5[5].innerHTML === cases5x5[11].innerHTML && cases5x5[11].innerHTML === cases5x5[17].innerHTML && cases5x5[17].innerHTML === cases5x5[23].innerHTML) {
        whoIsTheWinner5x5(cases5x5[5].innerHTML)
    } else if (cases5x5[6].innerHTML !== '' && cases5x5[6].innerHTML === cases5x5[7].innerHTML && cases5x5[7].innerHTML === cases5x5[8].innerHTML && cases5x5[8].innerHTML === cases5x5[9].innerHTML) {
        whoIsTheWinner5x5(cases5x5[6].innerHTML)
    } else if (cases5x5[6].innerHTML !== '' && cases5x5[6].innerHTML === cases5x5[11].innerHTML && cases5x5[11].innerHTML === cases5x5[16].innerHTML && cases5x5[16].innerHTML === cases5x5[21].innerHTML) {
        whoIsTheWinner5x5(cases5x5[6].innerHTML)
    } else if (cases5x5[6].innerHTML !== '' && cases5x5[6].innerHTML === cases5x5[12].innerHTML && cases5x5[12].innerHTML === cases5x5[18].innerHTML && cases5x5[18].innerHTML === cases5x5[24].innerHTML) {
        whoIsTheWinner5x5(cases5x5[6].innerHTML)
    } else if (cases5x5[7].innerHTML !== '' && cases5x5[7].innerHTML === cases5x5[12].innerHTML && cases5x5[12].innerHTML === cases5x5[17].innerHTML && cases5x5[17].innerHTML === cases5x5[22].innerHTML) {
        whoIsTheWinner5x5(cases5x5[7].innerHTML)
    } else if (cases5x5[8].innerHTML !== '' && cases5x5[8].innerHTML === cases5x5[13].innerHTML && cases5x5[13].innerHTML === cases5x5[18].innerHTML && cases5x5[18].innerHTML === cases5x5[23].innerHTML) {
        whoIsTheWinner5x5(cases5x5[8].innerHTML)
    } else if (cases5x5[8].innerHTML !== '' && cases5x5[8].innerHTML === cases5x5[12].innerHTML && cases5x5[12].innerHTML === cases5x5[16].innerHTML && cases5x5[16].innerHTML === cases5x5[20].innerHTML) {
        whoIsTheWinner5x5(cases5x5[8].innerHTML)
    } else if (cases5x5[9].innerHTML !== '' && cases5x5[9].innerHTML === cases5x5[14].innerHTML && cases5x5[14].innerHTML === cases5x5[19].innerHTML && cases5x5[19].innerHTML === cases5x5[24].innerHTML) {
        whoIsTheWinner5x5(cases5x5[9].innerHTML)
    } else if (cases5x5[9].innerHTML !== '' && cases5x5[9].innerHTML === cases5x5[13].innerHTML && cases5x5[13].innerHTML === cases5x5[17].innerHTML && cases5x5[17].innerHTML === cases5x5[21].innerHTML) {
        whoIsTheWinner5x5(cases5x5[9].innerHTML)
    } else if (cases5x5[10].innerHTML !== '' && cases5x5[10].innerHTML === cases5x5[11].innerHTML && cases5x5[11].innerHTML === cases5x5[12].innerHTML && cases5x5[12].innerHTML === cases5x5[13].innerHTML) {
        whoIsTheWinner5x5(cases5x5[10].innerHTML)
    } else if (cases5x5[11].innerHTML !== '' && cases5x5[11].innerHTML === cases5x5[12].innerHTML && cases5x5[12].innerHTML === cases5x5[13].innerHTML && cases5x5[13].innerHTML === cases5x5[14].innerHTML) {
        whoIsTheWinner5x5(cases5x5[11].innerHTML)
    } else if (cases5x5[15].innerHTML !== '' && cases5x5[15].innerHTML === cases5x5[16].innerHTML && cases5x5[16].innerHTML === cases5x5[17].innerHTML && cases5x5[17].innerHTML === cases5x5[18].innerHTML) {
        whoIsTheWinner5x5(cases5x5[15].innerHTML)
    } else if (cases5x5[16].innerHTML !== '' && cases5x5[16].innerHTML === cases5x5[17].innerHTML && cases5x5[17].innerHTML === cases5x5[18].innerHTML && cases5x5[18].innerHTML === cases5x5[19].innerHTML) {
        whoIsTheWinner5x5(cases5x5[16].innerHTML)
    } else if (cases5x5[20].innerHTML !== '' && cases5x5[20].innerHTML === cases5x5[21].innerHTML && cases5x5[21].innerHTML === cases5x5[22].innerHTML && cases5x5[22].innerHTML === cases5x5[23].innerHTML) {
        whoIsTheWinner5x5(cases5x5[20].innerHTML)
    } else if (cases5x5[21].innerHTML !== '' && cases5x5[21].innerHTML === cases5x5[22].innerHTML && cases5x5[22].innerHTML === cases5x5[23].innerHTML && cases5x5[23].innerHTML === cases5x5[24].innerHTML) {
        whoIsTheWinner5x5(cases5x5[21].innerHTML)
    }
}

function whoIsTheWinner5x5(winner) {
    playVictorySound()
    if (turn % 2 === 0) {
        alert(`${player2Container.innerHTML} is the WINNNNNNNNER!`)
        cases5x5.forEach(element => element.innerHTML = '')
        cases5x5.forEach(element => element.classList.remove('caseBis'))
        player2ScoreContainer.innerHTML = scorePlayer2 += 1
        turn = 0
    } else {
        alert(`${player1Container.innerHTML} is the WINNNNNNNNER!`)
        cases5x5.forEach(element => element.innerHTML = '')
        cases5x5.forEach(element => element.classList.remove('caseBis'))
        player1ScoreContainer.innerHTML = scorePlayer1 += 1
        turn = 0
    }
}
    //<-------------5x5 GAME LOGIC & PROPER FUNCTIONS------------->// 

    function play7x7() {
        if (!this.innerHTML) this.innerHTML = whoIsNext()
        this.classList.add("caseBis")
        weHaveAWinnerAlert = window.setTimeout(weHaveAWinner7x7, 100)
    }

    cases7x7.forEach(element => element.addEventListener('click', play7x7))

    function weHaveAWinner7x7() {
        if (cases7x7[0].innerHTML !== '' && cases7x7[0].innerHTML === cases7x7[1].innerHTML && cases7x7[1].innerHTML === cases7x7[2].innerHTML && cases7x7[2].innerHTML === cases7x7[3].innerHTML) {
            whoIsTheWinner7x7(cases7x7[0].innerHTML)
        } else if (cases7x7[0].innerHTML !== '' && cases7x7[0].innerHTML === cases7x7[7].innerHTML && cases7x7[7].innerHTML === cases7x7[14].innerHTML && cases7x7[14].innerHTML === cases7x7[21].innerHTML) {
            whoIsTheWinner7x7(cases7x7[0].innerHTML)
        } else if (cases7x7[0].innerHTML !== '' && cases7x7[0].innerHTML === cases7x7[8].innerHTML && cases7x7[8].innerHTML === cases7x7[16].innerHTML && cases7x7[16].innerHTML === cases7x7[24].innerHTML) {
            whoIsTheWinner7x7(cases7x7[0].innerHTML)
        } else if (cases7x7[1].innerHTML !== '' && cases7x7[1].innerHTML === cases7x7[2].innerHTML && cases7x7[2].innerHTML === cases7x7[3].innerHTML && cases7x7[3].innerHTML === cases7x7[4].innerHTML) {
            whoIsTheWinner7x7(cases7x7[1].innerHTML)
        } else if (cases7x7[1].innerHTML !== '' && cases7x7[1].innerHTML === cases7x7[8].innerHTML && cases7x7[8].innerHTML === cases7x7[15].innerHTML && cases7x7[15].innerHTML === cases7x7[22].innerHTML) {
            whoIsTheWinner7x7(cases7x7[1].innerHTML)
        } else if (cases7x7[1].innerHTML !== '' && cases7x7[1].innerHTML === cases7x7[9].innerHTML && cases7x7[9].innerHTML === cases7x7[17].innerHTML && cases7x7[17].innerHTML === cases7x7[25].innerHTML) {
            whoIsTheWinner7x7(cases7x7[1].innerHTML)
        } else if (cases7x7[2].innerHTML !== '' && cases7x7[2].innerHTML === cases7x7[3].innerHTML && cases7x7[3].innerHTML === cases7x7[4].innerHTML && cases7x7[4].innerHTML === cases7x7[5].innerHTML) {
            whoIsTheWinner7x7(cases7x7[2].innerHTML)
        } else if (cases7x7[2].innerHTML !== '' && cases7x7[2].innerHTML === cases7x7[9].innerHTML && cases7x7[9].innerHTML === cases7x7[16].innerHTML && cases7x7[16].innerHTML === cases7x7[23].innerHTML) {
            whoIsTheWinner7x7(cases7x7[2].innerHTML)
        } else if (cases7x7[2].innerHTML !== '' && cases7x7[2].innerHTML === cases7x7[10].innerHTML && cases7x7[10].innerHTML === cases7x7[18].innerHTML && cases7x7[18].innerHTML === cases7x7[26].innerHTML) {
            whoIsTheWinner7x7(cases7x7[2].innerHTML)
        } else if (cases7x7[3].innerHTML !== '' && cases7x7[3].innerHTML === cases7x7[4].innerHTML && cases7x7[4].innerHTML === cases7x7[5].innerHTML && cases7x7[5].innerHTML === cases7x7[6].innerHTML) {
            whoIsTheWinner7x7(cases7x7[3].innerHTML)
        } else if (cases7x7[3].innerHTML !== '' && cases7x7[3].innerHTML === cases7x7[10].innerHTML && cases7x7[10].innerHTML === cases7x7[17].innerHTML && cases7x7[17].innerHTML === cases7x7[24].innerHTML) {
            whoIsTheWinner7x7(cases7x7[3].innerHTML)
        } else if (cases7x7[3].innerHTML !== '' && cases7x7[3].innerHTML === cases7x7[11].innerHTML && cases7x7[11].innerHTML === cases7x7[19].innerHTML && cases7x7[19].innerHTML === cases7x7[27].innerHTML) {
            whoIsTheWinner7x7(cases7x7[3].innerHTML)
        } else if (cases7x7[3].innerHTML !== '' && cases7x7[3].innerHTML === cases7x7[9].innerHTML && cases7x7[9].innerHTML === cases7x7[15].innerHTML && cases7x7[15].innerHTML === cases7x7[21].innerHTML) {
            whoIsTheWinner7x7(cases7x7[3].innerHTML)
        } else if (cases7x7[4].innerHTML !== '' && cases7x7[4].innerHTML === cases7x7[11].innerHTML && cases7x7[11].innerHTML === cases7x7[18].innerHTML && cases7x7[18].innerHTML === cases7x7[25].innerHTML) {
            whoIsTheWinner7x7(cases7x7[4].innerHTML)
        } else if (cases7x7[4].innerHTML !== '' && cases7x7[4].innerHTML === cases7x7[10].innerHTML && cases7x7[10].innerHTML === cases7x7[16].innerHTML && cases7x7[16].innerHTML === cases7x7[22].innerHTML) {
            whoIsTheWinner7x7(cases7x7[4].innerHTML)
        } else if (cases7x7[5].innerHTML !== '' && cases7x7[5].innerHTML === cases7x7[12].innerHTML && cases7x7[12].innerHTML === cases7x7[19].innerHTML && cases7x7[19].innerHTML === cases7x7[26].innerHTML) {
            whoIsTheWinner7x7(cases7x7[5].innerHTML)
        } else if (cases7x7[5].innerHTML !== '' && cases7x7[5].innerHTML === cases7x7[11].innerHTML && cases7x7[11].innerHTML === cases7x7[17].innerHTML && cases7x7[17].innerHTML === cases7x7[23].innerHTML) {
            whoIsTheWinner7x7(cases7x7[5].innerHTML)
        } else if (cases7x7[6].innerHTML !== '' && cases7x7[6].innerHTML === cases7x7[13].innerHTML && cases7x7[13].innerHTML === cases7x7[20].innerHTML && cases7x7[20].innerHTML === cases7x7[27].innerHTML) {
            whoIsTheWinner7x7(cases7x7[6].innerHTML)
        } else if (cases7x7[6].innerHTML !== '' && cases7x7[6].innerHTML === cases7x7[12].innerHTML && cases7x7[12].innerHTML === cases7x7[18].innerHTML && cases7x7[18].innerHTML === cases7x7[24].innerHTML) {
            whoIsTheWinner7x7(cases7x7[6].innerHTML)
        } else if (cases7x7[7].innerHTML !== '' && cases7x7[7].innerHTML === cases7x7[8].innerHTML && cases7x7[8].innerHTML === cases7x7[9].innerHTML && cases7x7[9].innerHTML === cases7x7[10].innerHTML) {
            whoIsTheWinner7x7(cases7x7[7].innerHTML)
        } else if (cases7x7[7].innerHTML !== '' && cases7x7[7].innerHTML === cases7x7[14].innerHTML && cases7x7[14].innerHTML === cases7x7[21].innerHTML && cases7x7[21].innerHTML === cases7x7[28].innerHTML) {
            whoIsTheWinner7x7(cases7x7[7].innerHTML)
        } else if (cases7x7[7].innerHTML !== '' && cases7x7[7].innerHTML === cases7x7[15].innerHTML && cases7x7[15].innerHTML === cases7x7[23].innerHTML && cases7x7[23].innerHTML === cases7x7[31].innerHTML) {
            whoIsTheWinner7x7(cases7x7[7].innerHTML)
        } else if (cases7x7[8].innerHTML !== '' && cases7x7[8].innerHTML === cases7x7[9].innerHTML && cases7x7[9].innerHTML === cases7x7[10].innerHTML && cases7x7[10].innerHTML === cases7x7[11].innerHTML) {
            whoIsTheWinner7x7(cases7x7[8].innerHTML)
        } else if (cases7x7[8].innerHTML !== '' && cases7x7[8].innerHTML === cases7x7[15].innerHTML && cases7x7[15].innerHTML === cases7x7[22].innerHTML && cases7x7[22].innerHTML === cases7x7[29].innerHTML) {
            whoIsTheWinner7x7(cases7x7[8].innerHTML)
        } else if (cases7x7[8].innerHTML !== '' && cases7x7[8].innerHTML === cases7x7[16].innerHTML && cases7x7[16].innerHTML === cases7x7[24].innerHTML && cases7x7[24].innerHTML === cases7x7[32].innerHTML) {
            whoIsTheWinner7x7(cases7x7[8].innerHTML)
        } else if (cases7x7[9].innerHTML !== '' && cases7x7[9].innerHTML === cases7x7[10].innerHTML && cases7x7[10].innerHTML === cases7x7[11].innerHTML && cases7x7[11].innerHTML === cases7x7[12].innerHTML) {
            whoIsTheWinner7x7(cases7x7[9].innerHTML)
        } else if (cases7x7[9].innerHTML !== '' && cases7x7[9].innerHTML === cases7x7[16].innerHTML && cases7x7[16].innerHTML === cases7x7[23].innerHTML && cases7x7[23].innerHTML === cases7x7[30].innerHTML) {
            whoIsTheWinner7x7(cases7x7[9].innerHTML)
        } else if (cases7x7[9].innerHTML !== '' && cases7x7[9].innerHTML === cases7x7[17].innerHTML && cases7x7[17].innerHTML === cases7x7[25].innerHTML && cases7x7[25].innerHTML === cases7x7[33].innerHTML) {
            whoIsTheWinner7x7(cases7x7[9].innerHTML)
        } else if (cases7x7[10].innerHTML !== '' && cases7x7[10].innerHTML === cases7x7[11].innerHTML && cases7x7[11].innerHTML === cases7x7[12].innerHTML && cases7x7[12].innerHTML === cases7x7[13].innerHTML) {
            whoIsTheWinner7x7(cases7x7[10].innerHTML)
        } else if (cases7x7[10].innerHTML !== '' && cases7x7[10].innerHTML === cases7x7[17].innerHTML && cases7x7[17].innerHTML === cases7x7[24].innerHTML && cases7x7[24].innerHTML === cases7x7[31].innerHTML) {
            whoIsTheWinner7x7(cases7x7[10].innerHTML)
        } else if (cases7x7[10].innerHTML !== '' && cases7x7[10].innerHTML === cases7x7[16].innerHTML && cases7x7[16].innerHTML === cases7x7[22].innerHTML && cases7x7[22].innerHTML === cases7x7[28].innerHTML) {
            whoIsTheWinner7x7(cases7x7[10].innerHTML)
        } else if (cases7x7[10].innerHTML !== '' && cases7x7[10].innerHTML === cases7x7[18].innerHTML && cases7x7[18].innerHTML === cases7x7[26].innerHTML && cases7x7[26].innerHTML === cases7x7[34].innerHTML) {
            whoIsTheWinner7x7(cases7x7[10].innerHTML)
        } else if (cases7x7[11].innerHTML !== '' && cases7x7[11].innerHTML === cases7x7[18].innerHTML && cases7x7[18].innerHTML === cases7x7[25].innerHTML && cases7x7[25].innerHTML === cases7x7[32].innerHTML) {
            whoIsTheWinner7x7(cases7x7[11].innerHTML)
        } else if (cases7x7[11].innerHTML !== '' && cases7x7[11].innerHTML === cases7x7[17].innerHTML && cases7x7[17].innerHTML === cases7x7[23].innerHTML && cases7x7[23].innerHTML === cases7x7[29].innerHTML) {
            whoIsTheWinner7x7(cases7x7[11].innerHTML)
        } else if (cases7x7[12].innerHTML !== '' && cases7x7[12].innerHTML === cases7x7[19].innerHTML && cases7x7[19].innerHTML === cases7x7[26].innerHTML && cases7x7[26].innerHTML === cases7x7[33].innerHTML) {
            whoIsTheWinner7x7(cases7x7[12].innerHTML)
        } else if (cases7x7[12].innerHTML !== '' && cases7x7[12].innerHTML === cases7x7[18].innerHTML && cases7x7[18].innerHTML === cases7x7[24].innerHTML && cases7x7[24].innerHTML === cases7x7[30].innerHTML) {
            whoIsTheWinner7x7(cases7x7[12].innerHTML)
        } else if (cases7x7[13].innerHTML !== '' && cases7x7[13].innerHTML === cases7x7[20].innerHTML && cases7x7[20].innerHTML === cases7x7[27].innerHTML && cases7x7[27].innerHTML === cases7x7[34].innerHTML) {
            whoIsTheWinner7x7(cases7x7[13].innerHTML)
        } else if (cases7x7[13].innerHTML !== '' && cases7x7[13].innerHTML === cases7x7[19].innerHTML && cases7x7[19].innerHTML === cases7x7[25].innerHTML && cases7x7[25].innerHTML === cases7x7[31].innerHTML) {
            whoIsTheWinner7x7(cases7x7[13].innerHTML)
        } else if (cases7x7[14].innerHTML !== '' && cases7x7[14].innerHTML === cases7x7[15].innerHTML && cases7x7[15].innerHTML === cases7x7[16].innerHTML && cases7x7[16].innerHTML === cases7x7[17].innerHTML) {
            whoIsTheWinner7x7(cases7x7[14].innerHTML)
        } else if (cases7x7[14].innerHTML !== '' && cases7x7[14].innerHTML === cases7x7[21].innerHTML && cases7x7[21].innerHTML === cases7x7[28].innerHTML && cases7x7[28].innerHTML === cases7x7[35].innerHTML) {
            whoIsTheWinner7x7(cases7x7[14].innerHTML)
        } else if (cases7x7[14].innerHTML !== '' && cases7x7[14].innerHTML === cases7x7[22].innerHTML && cases7x7[22].innerHTML === cases7x7[30].innerHTML && cases7x7[30].innerHTML === cases7x7[38].innerHTML) {
            whoIsTheWinner7x7(cases7x7[14].innerHTML)
        } else if (cases7x7[15].innerHTML !== '' && cases7x7[15].innerHTML === cases7x7[16].innerHTML && cases7x7[16].innerHTML === cases7x7[17].innerHTML && cases7x7[17].innerHTML === cases7x7[18].innerHTML) {
            whoIsTheWinner7x7(cases7x7[15].innerHTML)
        } else if (cases7x7[15].innerHTML !== '' && cases7x7[15].innerHTML === cases7x7[22].innerHTML && cases7x7[22].innerHTML === cases7x7[29].innerHTML && cases7x7[29].innerHTML === cases7x7[36].innerHTML) {
            whoIsTheWinner7x7(cases7x7[15].innerHTML)
        } else if (cases7x7[15].innerHTML !== '' && cases7x7[15].innerHTML === cases7x7[23].innerHTML && cases7x7[23].innerHTML === cases7x7[31].innerHTML && cases7x7[31].innerHTML === cases7x7[39].innerHTML) {
            whoIsTheWinner7x7(cases7x7[15].innerHTML)
        } else if (cases7x7[16].innerHTML !== '' && cases7x7[16].innerHTML === cases7x7[17].innerHTML && cases7x7[17].innerHTML === cases7x7[18].innerHTML && cases7x7[18].innerHTML === cases7x7[19].innerHTML) {
            whoIsTheWinner7x7(cases7x7[16].innerHTML)
        } else if (cases7x7[16].innerHTML !== '' && cases7x7[16].innerHTML === cases7x7[23].innerHTML && cases7x7[23].innerHTML === cases7x7[30].innerHTML && cases7x7[30].innerHTML === cases7x7[37].innerHTML) {
            whoIsTheWinner7x7(cases7x7[16].innerHTML)
        } else if (cases7x7[16].innerHTML !== '' && cases7x7[16].innerHTML === cases7x7[24].innerHTML && cases7x7[24].innerHTML === cases7x7[32].innerHTML && cases7x7[32].innerHTML === cases7x7[40].innerHTML) {
            whoIsTheWinner7x7(cases7x7[16].innerHTML)
        } else if (cases7x7[17].innerHTML !== '' && cases7x7[17].innerHTML === cases7x7[18].innerHTML && cases7x7[18].innerHTML === cases7x7[19].innerHTML && cases7x7[19].innerHTML === cases7x7[20].innerHTML) {
            whoIsTheWinner7x7(cases7x7[17].innerHTML)
        } else if (cases7x7[17].innerHTML !== '' && cases7x7[17].innerHTML === cases7x7[24].innerHTML && cases7x7[24].innerHTML === cases7x7[31].innerHTML && cases7x7[31].innerHTML === cases7x7[38].innerHTML) {
            whoIsTheWinner7x7(cases7x7[17].innerHTML)
        } else if (cases7x7[17].innerHTML !== '' && cases7x7[17].innerHTML === cases7x7[23].innerHTML && cases7x7[23].innerHTML === cases7x7[29].innerHTML && cases7x7[29].innerHTML === cases7x7[35].innerHTML) {
            whoIsTheWinner7x7(cases7x7[17].innerHTML)
        } else if (cases7x7[17].innerHTML !== '' && cases7x7[17].innerHTML === cases7x7[25].innerHTML && cases7x7[25].innerHTML === cases7x7[33].innerHTML && cases7x7[33].innerHTML === cases7x7[41].innerHTML) {
            whoIsTheWinner7x7(cases7x7[17].innerHTML)
        } else if (cases7x7[18].innerHTML !== '' && cases7x7[18].innerHTML === cases7x7[25].innerHTML && cases7x7[25].innerHTML === cases7x7[32].innerHTML && cases7x7[32].innerHTML === cases7x7[39].innerHTML) {
            whoIsTheWinner7x7(cases7x7[18].innerHTML)
        } else if (cases7x7[18].innerHTML !== '' && cases7x7[18].innerHTML === cases7x7[24].innerHTML && cases7x7[24].innerHTML === cases7x7[30].innerHTML && cases7x7[30].innerHTML === cases7x7[36].innerHTML) {
            whoIsTheWinner7x7(cases7x7[18].innerHTML)
        } else if (cases7x7[19].innerHTML !== '' && cases7x7[19].innerHTML === cases7x7[26].innerHTML && cases7x7[26].innerHTML === cases7x7[33].innerHTML && cases7x7[33].innerHTML === cases7x7[40].innerHTML) {
            whoIsTheWinner7x7(cases7x7[19].innerHTML)
        } else if (cases7x7[19].innerHTML !== '' && cases7x7[19].innerHTML === cases7x7[25].innerHTML && cases7x7[25].innerHTML === cases7x7[31].innerHTML && cases7x7[31].innerHTML === cases7x7[37].innerHTML) {
            whoIsTheWinner7x7(cases7x7[19].innerHTML)
        } else if (cases7x7[20].innerHTML !== '' && cases7x7[20].innerHTML === cases7x7[27].innerHTML && cases7x7[27].innerHTML === cases7x7[34].innerHTML && cases7x7[34].innerHTML === cases7x7[41].innerHTML) {
            whoIsTheWinner7x7(cases7x7[20].innerHTML)
        } else if (cases7x7[20].innerHTML !== '' && cases7x7[20].innerHTML === cases7x7[26].innerHTML && cases7x7[26].innerHTML === cases7x7[32].innerHTML && cases7x7[32].innerHTML === cases7x7[38].innerHTML) {
            whoIsTheWinner7x7(cases7x7[20].innerHTML)
        } else if (cases7x7[21].innerHTML !== '' && cases7x7[21].innerHTML === cases7x7[22].innerHTML && cases7x7[22].innerHTML === cases7x7[23].innerHTML && cases7x7[23].innerHTML === cases7x7[24].innerHTML) {
            whoIsTheWinner7x7(cases7x7[21].innerHTML)
        } else if (cases7x7[22].innerHTML !== '' && cases7x7[22].innerHTML === cases7x7[23].innerHTML && cases7x7[23].innerHTML === cases7x7[24].innerHTML && cases7x7[24].innerHTML === cases7x7[25].innerHTML) {
            whoIsTheWinner7x7(cases7x7[22].innerHTML)
        } else if (cases7x7[23].innerHTML !== '' && cases7x7[23].innerHTML === cases7x7[24].innerHTML && cases7x7[24].innerHTML === cases7x7[25].innerHTML && cases7x7[25].innerHTML === cases7x7[26].innerHTML) {
            whoIsTheWinner7x7(cases7x7[23].innerHTML)
        } else if (cases7x7[24].innerHTML !== '' && cases7x7[24].innerHTML === cases7x7[25].innerHTML && cases7x7[25].innerHTML === cases7x7[26].innerHTML && cases7x7[26].innerHTML === cases7x7[27].innerHTML) {
            whoIsTheWinner7x7(cases7x7[24].innerHTML)
        } else if (cases7x7[28].innerHTML !== '' && cases7x7[28].innerHTML === cases7x7[29].innerHTML && cases7x7[29].innerHTML === cases7x7[30].innerHTML && cases7x7[30].innerHTML === cases7x7[31].innerHTML) {
            whoIsTheWinner7x7(cases7x7[28].innerHTML)
        } else if (cases7x7[29].innerHTML !== '' && cases7x7[29].innerHTML === cases7x7[30].innerHTML && cases7x7[30].innerHTML === cases7x7[31].innerHTML && cases7x7[31].innerHTML === cases7x7[32].innerHTML) {
            whoIsTheWinner7x7(cases7x7[29].innerHTML)
        } else if (cases7x7[30].innerHTML !== '' && cases7x7[30].innerHTML === cases7x7[31].innerHTML && cases7x7[31].innerHTML === cases7x7[32].innerHTML && cases7x7[32].innerHTML === cases7x7[33].innerHTML) {
            whoIsTheWinner7x7(cases7x7[30].innerHTML)
        } else if (cases7x7[31].innerHTML !== '' && cases7x7[31].innerHTML === cases7x7[32].innerHTML && cases7x7[32].innerHTML === cases7x7[33].innerHTML && cases7x7[33].innerHTML === cases7x7[34].innerHTML) {
            whoIsTheWinner7x7(cases7x7[31].innerHTML)
        } else if (cases7x7[35].innerHTML !== '' && cases7x7[35].innerHTML === cases7x7[36].innerHTML && cases7x7[36].innerHTML === cases7x7[37].innerHTML && cases7x7[37].innerHTML === cases7x7[38].innerHTML) {
            whoIsTheWinner7x7(cases7x7[35].innerHTML)
        } else if (cases7x7[36].innerHTML !== '' && cases7x7[36].innerHTML === cases7x7[37].innerHTML && cases7x7[37].innerHTML === cases7x7[38].innerHTML && cases7x7[38].innerHTML === cases7x7[39].innerHTML) {
            whoIsTheWinner7x7(cases7x7[36].innerHTML)
        } else if (cases7x7[37].innerHTML !== '' && cases7x7[37].innerHTML === cases7x7[38].innerHTML && cases7x7[38].innerHTML === cases7x7[39].innerHTML && cases7x7[39].innerHTML === cases7x7[40].innerHTML) {
            whoIsTheWinner7x7(cases7x7[37].innerHTML)
        } else if (cases7x7[38].innerHTML !== '' && cases7x7[38].innerHTML === cases7x7[39].innerHTML && cases7x7[39].innerHTML === cases7x7[40].innerHTML && cases7x7[40].innerHTML === cases7x7[41].innerHTML) {
            whoIsTheWinner7x7(cases7x7[38].innerHTML)
        }
    }

    function whoIsTheWinner7x7(winner) {
    playVictorySound()
        if (turn % 2 === 0) {
            alert(`${player2Container.innerHTML} is the WINNNNNNNNER!`)
            cases7x7.forEach(element => element.innerHTML = '')
            cases7x7.forEach(element => element.classList.remove('caseBis'))
            player2ScoreContainer.innerHTML = scorePlayer2 += 1
            turn = 0
        } else {
            alert(`${player1Container.innerHTML} is the WINNNNNNNNER!`)
            cases7x7.forEach(element => element.innerHTML = '')
            cases7x7.forEach(element => element.classList.remove('caseBis'))
            player1ScoreContainer.innerHTML = scorePlayer1 += 1
            turn = 0
        }
    }
//<-------------END------------->//