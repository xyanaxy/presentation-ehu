// Use const for values that do not change
const _width = 400;
const _height = _width;
const maxPixel = 10;
const cell = _width / maxPixel;

let r = 0;
let g = 255;
let b = 200;
let colorDir = 5;
let pixel = _width / 10 / maxPixel;
let x = 0;
let y = 0;
let col = 1;
let row = 1;
let dir = 1;
let pixelOffset = 0;
let pixelMove = 1;
let pointMode = 0;
let pointColor;

function animateGradient() {
  // Update color with a more efficient logic
  // r += (r < 255 && colorDir > 0) || (r > 0 && colorDir < 0) ? colorDir : 0;
  // if (r >= 255 || r <= 0) colorDir *= -1;
  if (r < 255) { r+=colorDir; } else { colorDir = -5}
  if (r >= 255) { colorDir = -5; }
  if (r <= 0) { colorDir = 5;}
  r+=colorDir;


  noStroke();
  fill(r, g, b);
  square(x, y, pixel);

  // Movement logic
  switch (dir) {
    case 1: // Moving right
      if (col < maxPixel - pixelOffset) {
        x += pixel;
        col++;
      } else {
        dir = 2;
      }
      break;
    case 2: // Moving down
      if (row < maxPixel - pixelOffset) {
        y += pixel;
        row++;
      } else {
        dir = 3;
      }
      break;
    case 3: // Moving left
      if (col > 1 + pixelOffset) {
        x -= pixel;
        col--;
      } else {
        dir = 4;
      }
      break;
    case 4: // Moving up
      if (row > 2 + pixelOffset) {
        y -= pixel;
        row--;
      } else {
        dir = 1;
        pixelOffset += pixelMove;
      }
      break;
  }

  // Adjust color change when pixelOffset changes
  if (pixelOffset < 0 && pixelMove < 0) {
    g = random(180, 220);
    b = random(220, 255);
    pixelMove = 1;
  } else if (pixelOffset >= 4 && pixelMove > 0) {
    g = random(220, 255);
    b = random(180, 220);
    pixelMove = -1;
  }
}

function setup() {
  createCanvas(_width, _height);
  background(0, 255, 200);
  rectMode(CORNER);
  frameRate(15);
  pointColor = color(255, 255, 110);
}

function draw() {
  if (pointMode === 0) {
    pixel = _width / maxPixel;
    animateGradient();
  } else if (pointMode === 1) {
    for (let row = 0; row < maxPixel; row++) {
      for (let col = 0; col < maxPixel; col++) {
        push();
        rectMode(CENTER);
        translate(pixel / 2 + cell * row, pixel / 2 + cell * col);
        circle(0, 0, 30);
        stroke(pointColor);
        strokeWeight(5);
        push();
        rotate(frameCount / 5);
        rect(0, 0, 10);
        pop();
        pop();
      }
    }
  }
}

function mousePressed() {
  pointMode = 1 - pointMode; // Toggle between 0 and 1
  g = random(220, 255);
  b = random(180, 220);
  pointColor = color(random(230, 240), random(230, 255), random(0, 240));
}

function mouseReleased() {
  g = random(180, 220);
  b = random(220, 255);
}
