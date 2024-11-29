let pixel = 8; 
let baseSize = 18; 
let spacing = 34; 
let bgColor; 

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER); 
  noStroke(); 
  
  
  bgColor = color(random(255), random(255), random(255));
}

function draw() {
  
  background(bgColor);

 
  let xOffset = (pixel - 1) * spacing / 2; 
  let yOffset = (pixel - 1) * spacing / 2; 


  for (let r = 0; r < pixel; r++) {
    for (let q = 0; q < pixel; q++) {
      push(); 
      
     
      let x = width / 2 + (q * spacing) - xOffset; 
      let y = height / 2 + (r * spacing) - yOffset;

      translate(x, y); 
      
      
      let angle = frameCount * 0.02 + (r + q) * 0.1;
      rotate(angle);

     
      let c = lerpColor(color("#000000"), color("#FFA2F2"), (sin(frameCount * 0.01 + r + q) + 1) / 2);
      fill(c);

     
      let size = baseSize + sin(frameCount * 0.05 + (r + q) * 0.5) * 10;
      rect(0, 0, size, size);

      pop(); 
    }
  }
}

function mousePressed() {
  
  bgColor = color(random(255), random(255), random(255));

}