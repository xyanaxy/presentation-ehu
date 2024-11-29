function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  background(`#C3EF31`);  
}

function draw() {

  push();
  fill(`#C3EF31`);
  translate(width / 2, height / 2);
  rotate(radians(frameCount));
  rect(0, 0, 50, 700);
  pop();


  fill(0);
  push();
  translate(width / 2, height / 2);
  rotate(radians(-frameCount));
  rect(0, 0, 50, 700);
  pop();

 let factor = map(sin(frameCount * 0.1), -1, 1, 1, 0); 
  let r = lerp(195, 0, factor); 
  let g = lerp(239, 0, factor);
  let b = lerp(49, 0, factor);  

  push();
  translate(width / 2, height / 2); 
  rotate(radians(frameCount * 0.5)); 
  fill(r, g, b); 
  textSize(225);
  textAlign(CENTER, CENTER); 
  text('brat', 0, 0);  
  pop();
}