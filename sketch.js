var ada;
var scl = 50;
var cat;

function preload() {
  cat = loadImage('images/tamtam.png')
  bookself = loadImage('images/bookself.png')
  arcade = loadImage('images/arcades.png')
  arcade2 = loadImage('images/arcade2.png')
  desk = loadImage('images/desk.png')
  calculator = loadImage('images/calculator.png')
  science = loadImage('images/science.png')





}

function setup() {
  createCanvas(800, 700);
  ada = new Ada();
}

function draw() {
  background(253, 255, 208);
  image(bookself, 50, 0, 130, 180);
  image(arcade, 230, 0, 130, 180);
  image(arcade2, 360, 0, 130, 180);
  image(desk, 500, 90, 130, 100);
  image(calculator, 515, 20, 100, 90);
  image(science, 650, 0, 150, 200);



  ada.update();
  ada.show();

}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    ada.dir(0, -1);
  } else if (keyCode == DOWN_ARROW) {
    ada.dir(0, 1);
  } else if (keyCode == RIGHT_ARROW) {
    ada.dir(1, 0);
  } else if (keyCode == LEFT_ARROW) {
    ada.dir(-1, 0);
  }
}
