let message = 'I LOVE THE COLOR PINK' ;
let textY = 300;
letySpeed = 3;

function setup()  {
createCanvas (500, 600);
}

function draw() {
 background (225);
 
  textSize (25);
  text(message, 160, textY);
  
  textY  +=  ySpeed;
}
  
