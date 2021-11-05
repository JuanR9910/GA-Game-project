const canvas = document.getElementById("gameboard");
// const player1 = canvas.getContext('2d');

// const player2 = canvas.getContext('2d');
// const goal1 = canvas.getContext('2d');
// const goal2 = canvas.getContext('2d');
// const puck = canvas.getContext('2d');
const ctx = canvas.getContext('2d');
// let movementHandler = document.addEventListener('keydown', move())



// puck.beginPath();
// puck.arc(145, 65, 5, 0, 2 * Math.PI, false);
// puck.fillStyle = 'white';
// puck.fill();

//  player1.fillStyle = 'green';
// player1.fillRect(70, 50, 5, 30);

// player2.fillStyle = 'red';
// player2.fillRect(220, 50, 5, 30);

// goal1.fillStyle = 'gold';
// goal1.fillRect(-10, 50, 20, 40);
// goal1.strokeRect(-10, 50, 20, 40);

// goal2.fillStyle = 'gold';
// goal2.fillRect(290, 50, 20, 40);
// goal2.strokeRect(290, 50, 20, 40);

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
                    down: false,
                    right: false,
                    left: false
            }
    }
     setDirection(key) {
         console.log('the key pressed', key)
         if (key.toLowerCase() == 'w') this.direction.up = true
         if (key.toLowerCase() == 's') this.direction.down = true
 }
 movePlayer() {
         if (this.direction.up) this.y -= 10
          if (this.y <= 0) {
                  this.y = 0
          }
          if (this.direction.down) this.y += 10
           if (this.y + this.height >= game.height) {
                   this.y = game.height - this.height
           }
        }
           render = function () {
                ctx.fillStyle = this.color
                ctx.fillRect(this.x, this.y, this.width, this.height)
        }  
 
}



const player1 = new Xplayer (50, 50, 'green', 5, 25)
player1.render()
//  setDirection(key) {
//          console.log('the key pressed', key)
//          if (key.toLowerCase() == 'w') this.direction.up = true
//          if (key.)
//  }
class Yplayer {
   constructor(x, y, color, width, height) {
           this.x = x
           this.y = y
           this.color = color
           this.width = width
           this.height = height
           this.alive = true
   }
   render = function () {
           ctx.fillStyle = this.color
           ctx.fillRect(this.x, this.y, this.width, this.height)
   }
}
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

       moveDisplay.innerText = `X: ${player.x}\nY: ${player.y}`
        stopGameLoop()
       player1.render()
       player1.movePlayer()

        
 }





 document.addEventListener('keydown', (e) => {
       player1.setDirection(e.key)
 })

 document.addEventListener('keyup', (e) => {
                  if(['w', 's'].includes(e.key)) {
                          player1.unsetDirection(e.key)
          }
  })
  let stopGameLoop = () => {clearInterval(gameInterval)}
  let gameInterval = setInterval(gameLoop, 60)








