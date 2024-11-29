let angle = 0;
let rotationSpeed = 0.03;
function setup() {
  createCanvas(400, 400);
 
}
 function mousePressed() {
  rotationSpeed = -rotationSpeed;
}
function draw() {
  background("rgb(253,191,209)");
  strokeWeight(8);
  stroke("rgb(255,61,0)");
   line(200, 200, 200, 400);
 
    
   push();
   noStroke();
  fill(220);
  circle(200, 160, 55)
  pop();
  
  push();
  noStroke();
  fill("rgb(57,41,203)");

  translate(150, 110)
  rotate(-angle);
  
  circle(-20, 0, 150)
  angle += -rotationSpeed;
  pop();
  
  push();
   noStroke();
  fill("rgb(57,41,203)");
  translate(250, 110)
  rotate(angle);
  circle(20, 0, 150)
  angle += -rotationSpeed;
  pop();
  
  push();
   noStroke();
  fill("rgb(57,41,203)");
  translate(250, 210)
  rotate(-angle);
  circle(20, 0, 150)
  angle += -rotationSpeed;
  pop();
  
  push();
   noStroke();
  fill("rgb(57,41,203)");
  translate(150, 210)
  rotate(angle);
  circle(-20, 0, 150)
  angle += -rotationSpeed;
  pop();

  
    push();
   noStroke();
  fill("rgb(255,61,0)");
  circle(200, 160, 15)
  pop();
  
  }
  
  