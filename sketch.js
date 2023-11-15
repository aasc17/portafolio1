function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let img;
let song;
let customFont;

function preload() {
  img = loadImage('heart.png');
  song = loadSound("NewJeans (뉴진스) - Super Shy [Official Audio].webm");
  customFont = loadFont('Pinky Style.otf'); // Cambia el nombre del archivo de fuente si es diferente
}

function setup() {
  createCanvas(720, 400);
  background(255, 0, 0);

  for (let i = 0; i < 50; i++) {
    stars.push(createVector(random(width), random(height)));
  }
}

let stars = [];
let lyrics = [
  "I'm super shy",
  "super shy",
  "but wait a minute while I",
  "make you mine",
  "make you mine",
  "떨리는 지금도",
  "you're on my mind all the time",
  "i wanna tell you but",
  "i'm super shy",
  "super shyyyyyyy",
  "I'm super shy",
  "super shy",
  "but wait a minute while I",
  "make you mine",
  "make you mine",
  "떨리는 지금도",
  "you're on my mind all the time",
  "i wanna tell you but",
  "i'm super shy",
  "super shyyyyyyy"
];
let yOffset = 0;
let ySpeed = -1; // Velocidad de desplazamiento

function draw() {
  background(0); // Fondo negro

  // Dibujar estrellas
  fill(255);
  noStroke();
  for (let star of stars) {
    ellipse(star.x, star.y, 3, 3);
    star.y += 1; // Hacer que las estrellas caigan hacia abajo
    if (star.y > height) {
      star.y = 0;
      star.x = random(width);
    }
  }

  textFont(customFont); // Usar la fuente personalizada
  textSize(24);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < lyrics.length; i++) {
    // Dibujar sombra difuminada
    fill(255, 150, 150, 100); // Rosa con opacidad
    for (let j = 0; j < 5; j++) {
      text(lyrics[i], width / 2, height / 2 + i * 40 + yOffset + j * 2);
    }

    // Dibujar letra blanca encima de la sombra
    fill(255); // Letra blanca
    text(lyrics[i], width / 2, height / 2 + i * 40 + yOffset);
  }

  // Cambiar la posición vertical de las letras
  yOffset += ySpeed;

  // Reiniciar el desplazamiento si se alcanza la parte superior
  if (yOffset < -40 * lyrics.length) {
    yOffset = 0;
  }

  image(img, mouseX, mouseY, 50, 50); // Dibujar la imagen en la posición del mouse
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() retorna una variable booleana
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
