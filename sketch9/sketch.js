let pixel = 10;

function setup() {
  createCanvas(400, 400); // Размер холста
  noStroke(); // Убираем обводку для фигур
}

function draw() {
  background(30); // Темный фон

  for (let q = 0; q < pixel; q++) {
    drawRow1(q, pixel);
    drawRow2(q, pixel);
  }
}

// Функция для создания "отталкивающего" эффекта
function getMouseOffset(x, y) {
  let distance = dist(mouseX, mouseY, x, y);
  let maxDistance = 150;

  if (distance < maxDistance) {
    let angle = atan2(y - mouseY, x - mouseX);
    let repelStrength = map(distance, 0, maxDistance, 15, 0);
    return {
      x: x + cos(angle) * repelStrength,
      y: y + sin(angle) * repelStrength,
      colorFactor: map(distance, 0, maxDistance, 255, 50)
    };
  }

  return { x, y, colorFactor: 50 };
}

function drawRow1(q, pixel) {
  for (let i = 1; i <= 10; i++) {
    let pos = getMouseOffset(q * pixel * 2, pixel * (i * 5));
    fill(123, pos.colorFactor, 104, 150); // Цвет меняется в зависимости от расстояния
    rect(pos.x, pos.y, pixel, pixel);
  }
}

function drawRow2(q, pixel) {
  for (let i = 3; i <= 40; i += 2) {
    let pos1 = getMouseOffset(q * pixel * 30, pixel * i);
    fill(pos1.colorFactor, 255, 150, 180); // Цвет и прозрачность
    rect(pos1.x, pos1.y, pixel, pixel);

    if (i !== 17 && i !== 13) {
      let pos2 = getMouseOffset(q * pixel * 4 + pixel * 3, pixel * (i + 1));
      fill(240, 248, pos2.colorFactor, 255);
      rect(pos2.x, pos2.y, pixel, pixel);
    }
  }
}
