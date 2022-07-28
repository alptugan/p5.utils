var utils = new p5.Utils();
function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
}

function draw() {
  background(220);

  noStroke();

  fill("#ffcc00");
  circle(width * 0.5, height * 0.5, 500);

  push();
  fill(255);
  translate(width * 0.5, height * 0.5);
  rotate(frameCount * 0.01);

  utils.beginShadow(
    "#000000",
    25 + abs(sin(frameCount * 0.01) * 200),
    cos(frameCount * 0.01) * 20,
    sin(frameCount * 0.01) * 20);

  rect(0, 0, 200, 200);
  utils.endShadow();
  pop();



}