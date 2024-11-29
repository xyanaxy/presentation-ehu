let cols, rows;
let spacing = 10;

function setup() {
  createCanvas(400,400);
  cols = width / spacing;
  rows = height / spacing;
}

function draw() {
  background(0);
  noStroke();

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let px = x * spacing;
      let py = y * spacing;
      let d = dist(mouseX, mouseY, px, py);

      fill(map(d, 0, width / 2, 255, 0), map(d, 0, width / 2, 0, 255), 200);
      ellipse(px, py, map(d, 0, width / 2, spacing, 5));
    }
  }
}