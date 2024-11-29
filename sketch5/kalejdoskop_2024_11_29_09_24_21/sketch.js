let symmetry = 6;
let angle = 360 / symmetry;
let lineColor;
function setup() {
  
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB, 255);
  background(50);
   lineColor = color(random(255), 255, 255);
}

function draw() {
 
  translate(width / 2, height / 2);
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
   
    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
     
        rotate(angle);
        stroke(lineColor);
        strokeWeight(3);
        line(lineStartX, lineStartY, lineEndX, lineEndY);

    
        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
    }
  }
}
function mousePressed() {
  lineColor = color(random(255), 255, 255); // Change color to a random HSB value
}