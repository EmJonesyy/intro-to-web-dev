function setup() {
  createCanvas(400, 400);
}
var x, y, r=25, speed_x = 12, speed_y = 12;

function setup() {
    createCanvas(500, 200);
    x=width-r;
    y=r;
}

function draw() {
    background("black");
    ellipse(x,y, r*2)

    // move left
    if (y == r && x > r)
        x = max(r, x - speed_x);

    // move down
    if (x == r && y < height-r)
        y = min(height-r, y + speed_y);

    // move right
    if (y == height-r && x < width-r)
        x = min(width-r, x + speed_x);

    // move up
    if (x == width-r && y > r)
        y = max(r, y - speed_y);
}


function draw() {
  background(220);
}
