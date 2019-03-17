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
    this.x = this.x + this.xspeed;
    this.y = this.y + this.xspeed;
  }

  this.show = function () {
    fill(255);
    rect(this.x, height - 20, 20, 20);
  }
}