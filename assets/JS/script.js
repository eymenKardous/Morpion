let win = false;
let turn = 0;

let scorePOne = 0;
let pOne;

let scorePTwo = 0;
let pTwo = 'O'

let random = randomNumber(0, 8)

function choice(event) {

    if (turn % 2 == 0) {
        if (event.innerHTML == '') {
            event.innerHTML = "X"
        }
        while (true) {
            if (document.querySelectorAll('.all')[random].innerHTML != "") {
                random = randomNumber(0, 8)
            } else {
                document.querySelectorAll('.all')[random].innerHTML = "O"
                break
            }
        }
    }

    checkWin()
    turn++
}

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function refresh() {
    let game = document.querySelectorAll('.all')
    console.table(game);
    for (let i = 0; i < game.length; i++) {
        game[i].innerHTML = ""
    }
}

function checkWin() {

    for (let i = 0; i < winningPattern.length; i++) {
        let first = document.querySelectorAll('.all')[winningPattern[i][0]].innerHTML
        let second = document.querySelectorAll('.all')[winningPattern[i][1]].innerHTML
        let third = document.querySelectorAll('.all')[winningPattern[i][2]].innerHTML

        if (first == "" || second == "" || third == "") {
            continue
        }
        if (first == second && second == third) {
            win = true

            if (first == "X" || second == "X" || third == "X") {
                scorePOne++;
                let tableScorePOne = document.querySelector('#scorePOne')
                tableScorePOne.innerHTML = scorePOne
                let winnerIs = document.querySelector('#result')
                winnerIs.innerHTML = `Victoire J1`

            }
            else if (first == "O" || second == "O" || third == "O") {
                scorePTwo++;
                let tableScorePTwo = document.querySelector('#scorePTwo')
                tableScorePTwo.innerHTML = scorePTwo
                let winnerIs = document.querySelector('#result')
                winnerIs.innerHTML = `Victoire J2`

            }
        } else {
            win = false
        }
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}