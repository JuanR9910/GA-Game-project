const canvas = document.getElementById("gameboard");
const ctx = canvas.getContext('2d');
const movement = document.getElementById('move')
let puckDirectionX = true
let puckDirectionY = true
let player1Score = 0
let player2Score = 0



class Xplayer {
    constructor(x, y, color, width, height) {
            this.x = x
            this.y = y
            this.color = color
            this.width = width
            this.height = height
            this.alive = true
            this.direction = {
                    up: false,
                    down: false
            }
    }
 movePlayer() {
         if (this.direction.up) this.y -= 10
          if (this.y <= 0) {
                  this.y = 0
          }
         if (this.direction.down) this.y += 10
           if (this.y + this.height >= canvas.height) {
                  this.y = canvas.height - this.height
           }
        }
           render = function () {
                ctx.fillStyle = this.color
                ctx.fillRect(this.x, this.y, this.width, this.height)
        }  
 
}


// variable to render player1 //
const player1 = new Xplayer (50, 50, 'green', 5, 25)
player1.render()


class Yplayer {
   constructor(x, y, color, width, height) {
           this.x = x
           this.y = y
           this.color = color
           this.width = width
           this.height = height
           this.alive = true
           this.direction = {
                   up: false,
                   down: false
           }
   }
 movePlayer() {
         if (this.direction.up) this.y -= 10
          if (this.y <= 0) {
                  this.y = 0
          }
          if (this.direction.down) this.y += 10
           if (this.y + this.height >= canvas.height) {
                   this.y = canvas.height - this.height
           }
        }
           render = function () {
                ctx.fillStyle = this.color
                ctx.fillRect(this.x, this.y, this.width, this.height)
        }  
 
}

// variable to render player2 //
const player2 = new Yplayer (240, 50, 'red', 5, 25)
player2.render()

   class puck {
        constructor(x, y, color, width, height) {
                this.x = x
                this.y = y
                this.color = color
                this.width = width
                this.height = height
                this.alive = true
        }
         movePuck() {
                 if (puckDirectionX == true) {
                         hockeypuck.x += 3
                 }
                 if (puckDirectionX == false) {
                         hockeypuck.x -= 3
                 }
                 if (puckDirectionY == true) {
                         hockeypuck.y += 1
                 }
                 if (puckDirectionY == false) {
                         hockeypuck.y -= 1
                 }
                    
                }
        render = function() {
                ctx.fillStyle = this.color
                ctx.fillRect(this.x, this.y, this.width, this.height)
        }
   }
   const goal = () => {
           if(hockeypuck.x == 0 ) {
                   console.log(player1Score += 1)
                   puckDirectionX = !puckDirectionX
           } else if(hockeypuck.x == canvas.width) {
                   console.log(player2Score += 1)
                   puckDirectionX = !puckDirectionX
           }
   } 

   const hockeypuck = new puck (120, 50, 'white', 5, 5)
   hockeypuck.render()




   const hitDetect = () => {
        if (   player2.x < hockeypuck.x + hockeypuck.width &&
                player2.x + player2.width > hockeypuck.x   &&
                player2.y < hockeypuck.y + hockeypuck.height &&
                player2.y + player2.height > hockeypuck.y 
                ) {
                    puckDirectionX = !puckDirectionX 
                    puckDirectionY =  Math.random() < 0.5
                }
                if (player1.x < hockeypuck.x + hockeypuck.width &&
                        player1.x + player1.width > hockeypuck.x &&
                        player1.y < hockeypuck.y + hockeypuck.height &&
                        player1.y + player2.height > hockeypuck.y
                        ) {
                                puckDirectionX = !puckDirectionX
                                puckDirectionY =  Math.random() < 0.5
                        }
        if( hockeypuck.y == 0) {
                puckDirectionY = !puckDirectionY
        }  
        if (hockeypuck.y == canvas.height) {
                puckDirectionY = !puckDirectionY
        }
        } 

let drawScore = () => {
        if(drawScore == player1Score) {
                player1Score.render
                console.log('player1Score')
        }
}

  const gameLoop = () => {

         ctx.clearRect(0, 0, canvas.width, canvas.height)
         
if (player1.alive) {
        player1.render()
} else if (player2.alive) {
        player2.render()
} else {
        stopGameLoop()
}


movement.innerText = `X: ${player1.x}\nY: ${player1.y}`
movement.innerText = `X: ${player2.x}\nY:  ${player2.y}`
        
      player1.render()
      player1.movePlayer()
      player2.render()
      player2.movePlayer
      hockeypuck.render()
      hockeypuck.movePuck()
      drawScore()
      goal()
      hitDetect()
 }


let stopGameLoop = () => {clearInterval(gameInterval)}

  document.addEventListener('keydown', (e) => {
          if(e.key === 'w') {
                player1.y -= 10
        } else if(e.key === 's') {
                player1.y += 10
        }
  })

  document.addEventListener('keydown', (e) => {
        if(e.key === 'o') {
                player2.y -= 10
        } else if(e.key === 'l') {
                player2.y += 10
        }
       
   })
 
function startGame() {
        window.location.reload()
}

document.getElementById("Play").addEventListener("click", startGame)

function clearGame() {
        window.location.reload()
}

document.getElementById("Rematch").addEventListener("click", clearGame)



  let gameInterval = setInterval(gameLoop, 60)





