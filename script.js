const gameboard = document.getElementById("gameboard")
const goals = document.getElementsByClassName("goal")
const xgoal = document.getElementById("Player1")
const ygoal = document.getElementById("Player2")
const hockeysticks = document.getElementsByClassName("hockeystick")
const hockeystick1 = document.getElementById("XPlayer")
const hockeystick2 = document.getElementById("YPlayer")
const puck = document.getElementById("puck")
const scoreboard = document.getElementsByClassName("scorebooard")
const player1score = document.getElementById("Player1score")
const player2score = document.getElementById("Player2score")







// function player(x, y, width, height) {
//     this.x = x
//     this.y = y
//     this.color = color
//     this.width = width
//     this.height = height

//     this.render = function() {
//     hockeystick1.fillStyle = this.color
//      hockeystick1.fillRect(this.x, this.y, this.width, this.height)
//     }
// }
// let p1 = new player()
// function move(key) {
//     if (key.toLowerCase()=="w")player
// }



document.addEventListener('keydown', function(event) {
    //add event listeners for keys to make hockey sticks move
    switch (event.key) {
        case 38 : hockeystick1.style.top = (parseInt(hockeystick1.style.top) + 10) + 'px';
        break;
        case 40 : hockeystick1.y += 10
        case 39 : hockeystick1.x -= 10
        case 37 : hockeystick1.x += 10
    }
    //  hockeystick1()
     console.log(hockeystick1.style)
})
// Use javascript to make hockey puck move

// Make win conditions for players

// Make multiple players for Game

//Make goals detect scores for a player that shoots the hockey puck in them

//Create hockey stick and hockey puck and animate them

// Create a point system for players. First to three wins