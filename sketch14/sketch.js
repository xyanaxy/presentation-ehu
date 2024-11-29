let prevX = 0;

let prevY = 0;

let speed = 0;

let bgColorR = 0;
let bgColorG = 0;
let bgColorB = 0;

let alphaValue = 255; 

let trails = []; 

function setup() {

  createCanvas(400, 400);

  prevX = mouseX;

  prevY = mouseY;

}

function draw() {

  

  let dx = mouseX - prevX;

  let dy = mouseY - prevY;

  speed = sqrt(dx * dx + dy * dy);



   bgColorR = map(mouseX, 0, width, 100, 255);
  bgColorG = map(mouseY, 0, height, 100, 255);
  bgColorB = map(speed, 0, 50, 150, 255);


  background(bgColorR, bgColorG, bgColorB);

  

  trails.push({x: mouseX, y: mouseY, size: random(20, 40), alpha: 255});

  

  

  for (let i = trails.length - 1; i >= 0; i--) {

    let trail = trails[i];

    trail.alpha -= 5;

    if (trail.alpha <= 0) {

      trails.splice(i, 1);

    }

  }

  

  for (let trail of trails) {

    fill(255, 100, 200, trail.alpha);

    noStroke();

    ellipse(trail.x, trail.y, trail.size, trail.size);

  }



  let circleSize = map(sin(frameCount * 0.1), -1, 1, 50, 80); 

  let r = map(speed, 0, 50, 100, 255); 

  let g = map(mouseX + sin(frameCount * 0.05) * 50, 0, width + 255, 0, 255); 

  let b = map(mouseY + cos(frameCount * 0.05) * 50, 0, height + 255, 0, 255); 

  

  fill(0, 0, 0, 50);

  ellipse(mouseX + 10, mouseY + 10, circleSize + 10, circleSize + 10);

  

  fill(r, g, b);

  noStroke();

  ellipse(mouseX, mouseY, circleSize, circleSize);

  

  prevX = mouseX;

  prevY = mouseY;

}


  
  
  


  