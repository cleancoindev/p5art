var sanguine;
var tr_x = 0;
var direction = 1;
var m = 10;
function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER).noFill().frameRate(30);
    sanguine = color('#850505');
}
function draw() {
    background(255);
    translate(width / 2, height / 2);
    var x = width / 7;
    var y = width / 7;
    if (tr_x >= m)
        direction = -1;
    if (tr_x <= 1)
        direction = 1;
    tr_x = tr_x + direction * 0.25;
    push();
    fill(sanguine);
    quad(-x - tr_x, -y, -x / 2 + 2 * tr_x, -y * 1.5, x * 1.1 - 2 * tr_x, -y * 0.5, -x * 0.2, y * 0.6 - tr_x);
    pop();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=../sketch/sketch/build.js.map