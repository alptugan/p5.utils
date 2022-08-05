// Declare Utils as a variable
var utils = new p5.Utils();

function setup() {
  createCanvas(innerWidth, innerHeight);

  // Call the method "enableRuler()" 
  // to display pixel ruler
  utils.enableRuler();
}

function draw() {
  background(220);

  fill(255)
  rect(200, 223, 200, 100);
}

function keyPressed() {
  if (key == 's') {
    // re-draw ruler
    utils.enableRuler();
  } else if (key == 'h') {
    // hide ruler
    utils.disableRuler();
  }
}
