const canvas = document.getElementById("gameboard");
const player1 = canvas.getContext('2d');
const player2 = canvas.getContext('2d');
const goal1 = canvas.getContext('2d');
const goal2 = canvas.getContext('2d');
const puck = canvas.getContext('2d');

puck.beginPath();
puck.arc(145, 65, 5, 0, 2 * Math.PI, false);
puck.fillStyle = 'white';
puck.fill();

player1.fillStyle = 'green';
player1.fillRect(70, 50, 5, 30);

player2.fillStyle = 'red';
player2.fillRect(220, 50, 5, 30);

goal1.fillStyle = 'gold';
goal1.fillRect(-10, 50, 20, 40);
goal1.strokeRect(-10, 50, 20, 40);

goal2.fillStyle = 'gold';
goal2.fillRect(290, 50, 20, 40);
goal2.strokeRect(290, 50, 20, 40);

const movementHandler = () => {
switch(player1){
    case(87): 
    player1.y -= 10
    break
    case(65):
    player1.x -= 10
    break
    case(83):
    player1.y += 10
    break
    case(68):
    player1.x += 10
    break
}
}





document.addEventListener('keydown', movementHandler)