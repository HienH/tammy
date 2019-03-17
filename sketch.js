var ada;

function setup() {
  createCanvas(800, 700);
  ada = new Ada();
}

function draw() {
  background(31);
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
