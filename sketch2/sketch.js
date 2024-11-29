let bgImage;
let textLine = "ГА";
let textLines = ["НЯ-", "МІ-", "ГА"]
let currentLine = 0;
let x_shift = 40; 
let y_shift = 50;
let interval = 500; 
let lastUpdate = 0;
let count = 0;
let maxCount = 6; 
let phase = 1;
let pauseStart = 0; 
let pauseDuration = 0; 
let isPausing = false; 

function preload() {
  bgImage = loadImage("assets/niamiha.jpg");
}

function setup() {
  createCanvas(400, 400);
  image(bgImage, 0, 0, width, height);
  textFont("Courier New");
  fill(255, 0, 255);
  stroke(0, 255, 255);
  strokeWeight(10);
}

function draw() {

  if (phase === 1) {
    textSize(30);
    text("гусі-", 40, 100, 200, 200);
    text("гусі", 80, 130, 200, 200);


    if (!isPausing) {
      startPause(800);
      isPausing = true;
    }

    if (pause(pauseDuration)) {
      displayDynamicText(textLine);
      if (count >= maxCount) {
        clearSketch(); 
        phase = 2; 
        isPausing = false;
      }
    }
  }

  if (phase === 2) {
    textSize(35);
    text("што  вам сьніцца?", 200, 50, 200, 200);

    if (!isPausing) {
      startPause(1000);
      isPausing = true;
    }

    if (pause(pauseDuration)) {
      phase = 3; 
      isPausing = false; 
    }
  }
  
  if (phase === 3) {
    if (!isPausing) {
      startPause(1500); 
      isPausing = true;
    }
    if (pause(pauseDuration)) {
      displayDynamicText2();
    }
  
  }
}

function displayDynamicText(line) {
  textSize(50);
  let currentTime = millis();
  if (currentTime - lastUpdate > interval && count < maxCount) {
    text(line, 180 + x_shift * count, 350 - y_shift * count);
    lastUpdate = currentTime;
    count++;
  }
}

function displayDynamicText2() {
  textSize(70);
  let currentTime = millis();
  if (currentTime - lastUpdate > interval && currentLine < textLines.length) {
    text(textLines[currentLine], 35, 200 + currentLine * 70); 
    currentLine++; 
    lastUpdate = currentTime; 
  }
}

function startPause(duration) {
  pauseStart = millis();
  pauseDuration = duration;
}

function pause(duration) {
  let currentTime = millis();
  return currentTime - pauseStart > duration; 
}

function clearSketch() {
  image(bgImage, 0, 0, width, height); 
  count = 0;
  lastUpdate = millis();
}