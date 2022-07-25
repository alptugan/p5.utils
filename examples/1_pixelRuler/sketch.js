// Declare Utils as a variable
var utils = new p5.Utils();

function setup() {
  createCanvas(600, 600);

  // Call the method "enableRuler()" 
  // to display pixel ruler
  utils.enableRuler();
}

function draw() {
  background(220);

  rect(200, 223, 200, 100);
}

function keyPressed() {
  if (key == 's') {
    utils.enableRuler();
  } else if (key == 'h') {
    utils.disableRuler();
  }
}
