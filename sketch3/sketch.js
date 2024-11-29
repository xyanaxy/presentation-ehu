function setup() {
  createCanvas(400, 400);
  background(255)
}

function draw() {
  if (mouseIsPressed);
  let Speed=  dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight (Speed/3);
  stroke (random(255), random (255), random (255));
  line (pmouseX, pmouseY,mouseX, mouseY);
}