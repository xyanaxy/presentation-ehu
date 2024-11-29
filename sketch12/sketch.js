let shift = 40;

function setup() {
  createCanvas(400, 400);
  background("teal");
  frameRate(50);
  rectMode(CENTER);
}

function draw() {
  //background("teal"); // Clear background once per frame
  for (let r = 0; r < 5; r++) { 
    let x = frameCount;
    let y = 30 * sin(x * 0.1) + 50 +r*80;
  point(x, y);
  }


  for (let r = 0; r < 5; r++) {      
    for (let q = 0; q < 5; q++) {   
      let x = shift + q * shift * 2;  // X-coordinate of grid cell
      let y = shift + r * shift * 2;  // Y-coordinate of grid cell

      
      // Draw black rotating rectangle
      push();
      fill(0);
      translate(x, y);
      rotate(radians(frameCount)); // Rotate clockwise
      noStroke();
      if (r % 3 == 0){
        rect(0, 0, 5, 30);
      } else {
      ellipse(0, 0, 5, 30);
      }
      pop();

      // Draw white rotating rectangle
      push();
      fill(255);
      translate(x, y);
      rotate(radians(-frameCount)); // Rotate counterclockwise
      noStroke();
      if (r % 3 == 0){
        rect(0, 0, 5, 30);
      } else {
      ellipse(0, 0, 5, 30);
      }
      pop();
    }
  }
}
