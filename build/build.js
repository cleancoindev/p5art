var c;
var saved = false;
function setup() {
    c = createCanvas(windowWidth, windowHeight);
    rectMode(CENTER).noFill().frameRate(30);
}
function windowResized() {
    var shortest = min(windowWidth, windowHeight);
    resizeCanvas(shortest, shortest);
}
function shape() {
    var shortest = min(windowWidth, windowHeight);
    var x = shortest / 3;
    var y = shortest / 3;
    noStroke();
    quad(-x, -y, -x / 3, -y * 1.5, x * 1.1, -y * 0.4, -x * 0.2, y * 0.6);
    stroke(0);
    var d = 1.5;
    push();
    translate(shortest / 9, shortest / 4.8);
    line(-x * d, -y * d, -x / 3 * d, -y * 1.5 * d);
    pop();
    push();
    translate(-shortest / 15, shortest / 6.4);
    line(-x / 3 * d, -y * 1.5 * d, x * 1.1 * d, -y * 0.4 * d);
    pop();
    push();
    translate(-shortest / 10, 0);
    line(x * 1.1 * d, -y * 0.4 * d, -x * 0.2 * d, y * 0.6 * d);
    pop();
    push();
    translate(shortest / 12, 0);
    line(-x * d, -y * d, -x * 0.2 * d, y * 0.6 * d);
    pop();
}
function draw() {
    background(255);
    fill(0);
    var shortest = min(windowWidth, windowHeight);
    var ll = 20;
    var hh = 0.8;
    var vv = 1.6;
    text("Через форточку в окошко", shortest / vv, shortest * hh);
    text("К нам пришла чужая кошка.", shortest / vv, shortest * hh + ll);
    text("Мы сказали: –", shortest / vv, shortest * hh + 2 * ll);
    text("Здравствуй, кошка,", shortest / vv, shortest * hh + 3 * ll);
    text("Поживи у нас немножко.", shortest / vv, shortest * hh + 4 * ll);
    scale(0.5);
    translate(shortest / 2, shortest);
    shape();
    translate(shortest * 0.9, -shortest / 4);
    scale(1, -1);
    shape();
    if (saved == false) {
        saveCanvas("cat1.jpg");
        saved = true;
    }
}
//# sourceMappingURL=../sketch/sketch/build.js.map