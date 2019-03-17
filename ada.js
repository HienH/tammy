function Ada() {
  this.x = width / 2;
  this.y = height / 2;

  this.xspeed = 0;
  this.yspeed = 0;


  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.update = function () {
    this.x += this.xspeed * 6;
    this.y += this.yspeed * 6;


    this.x = constrain(this.x, 0, width - scl)
    this.y = constrain(this.y, 0, height - scl)
  }

  this.show = function () {
    image(cat, this.x, this.y, 150, 150);
  }
}