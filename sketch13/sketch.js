let squareSize = 50;

let squareX, squareY;

let squareColor;
let backgroundColor;
function setup() {

  createCanvas(400, 400); 

  squareX = width / 2 - squareSize / 2;

  squareY = height / 2 - squareSize / 2;

  squareColor = color(0, 255, 0); 
  backgroundColor = color(220);

}

function draw() {

background(backgroundColor);

  fill(squareColor);

  rect(squareX, squareY, squareSize, squareSize);
if (mouseIsPressed)
      backgroundColor= color(random(255), random(255), random(255)); 
  

  if (squareX <= 0 || squareX + squareSize >= width || squareY <= 0 || squareY + squareSize >= height) {

    squareColor = color(random(255), random(255), random(255)); 

    
  }
  

}

function mouseMoved() {

  squareX = mouseX - squareSize / 2;

  squareY = mouseY - squareSize / 2;


}






