let angle = 0;
let cellSize = 40;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB, 255); // Set color mode to RGB
  noStroke();
}

function draw() {
  background(220); // Clear the canvas
noStroke();
  // Draw the grid
  for (let x = 0; x < width; x += cellSize) {
    for (let y = 0; y < height; y += cellSize) {
      fill(map(x, 0, width, 0, 255), map(y, 0, height, 0, 255), 150);
      rect(x, y, cellSize, cellSize);
    }
  }

  // Draw the animated spiral
  noFill();
  stroke(255);
  strokeWeight(9);

  let centerX = width / 2;
  let centerY = height / 2;
  let radius = 5;

  beginShape();
  for (let a = 0; a < TWO_PI * 5; a += 0.1) {
    let r = radius + a * 9;
    let x = centerX + cos(a + angle) * r;
    let y = centerY + sin(a + angle) * r;
    vertex(x, y);
  }
  endShape();

  // Update the angle to animate the spiral
  angle += 0.05;
}
