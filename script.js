const canvas = document.getElementById("gameboard");
const ctx = canvas.getContext('2d');
const movement = document.getElementById('move')

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
     setDirection(key) {
         console.log('this key is pressed', key)
         if (key.toLowerCase() == 'w') this.direction.up = true
         if (key.toLowerCase() == 's') this.direction.down = true
 }
    unsetDirection(key) {
            if (key.toLowerCase() == 'w') this.direction.up = false
            if (key.toLowerCase() == 's') this.direction.down = false
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
     setDirection(key) {
         console.log('this key is pressed', key)
         if (key.toLowerCase() == 'o') this.direction.up = true
         if (key.toLowerCase() == 'l') this.direction.down = true
 }
    unsetDirection(key) {
            if (key.toLowerCase() == 'o') this.direction.up = false
            if (key.toLowerCase() == 'l') this.direction.down = false
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


class Xgoal {
     constructor(x, y, color, width, height) {
             this.x = x
             this.y = y
             this.color = color
             this.width = width
             this.height = height
             this.alive = true
     }
     render = function() {
             ctx.fillStyle = this.color
             ctx.fillRect(this.x, this.y, this.width, this.height)
     }
}
const goal1 = new Xgoal (0, 50, 'gold', 10, 40)
goal1.render()


class Ygoal {
        constructor(x, y, color, width, height) {
                this.x = x
                this.y = y
                this.color = color
                this.width = width
                this.height = height
                this.alive = true
        }
        render = function() {
                ctx.fillStyle = this.color
                ctx.fillRect(this.x, this.y, this.width, this.height)
        }
   }
   const goal2 = new Ygoal (290, 50, 'gold', 10, 40)
   goal2.render()

   class puck {
        constructor(x, y, color, width, height) {
                this.x = x
                this.y = y
                this.color = color
                this.width = width
                this.height = height
                this.alive = true
        }
        render = function() {
                ctx.fillStyle = this.color
                ctx.fillRect(this.x, this.y, this.width, this.height)
        }
   }
   const hockeypuck = new puck (120, 50, 'white', 5, 5)
   hockeypuck.render()

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
        
 }








let stopGameLoop = () => {clearInterval(gameInterval)}

 document.addEventListener('keydown', (e) => {
       player1.setDirection(e.key)
       player2.setDirection(e.key)
 })


 document.addEventListener('keyup', (e) => {
                  if(['w', 's'].includes(e.key)) {
                        player1.unsetDirection(e.key)
          } else if(['o', 'l'].includes(e.key)) {
                  player2.unsetDirection(e.key)
          }
          
  })


  let gameInterval = setInterval(gameLoop, 60)






  