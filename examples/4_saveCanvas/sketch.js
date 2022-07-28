var x, y, px, py;
var jump = 10;
var ptime = 2000;

// Init global utils var
var utils = new p5.Utils();
var counter = 0;

function setup() {
  createCanvas(600, 600);

  x = width * 0.5;
  y = height * 0.5;
  px = x;
  py = y;
  background(180);
}

function draw() {
  //background(180, 1);
  px = x;
  py = y;


  // Basic random walker algorithm
  var dice = random();

  if (dice < 0.25) {
    x += jump;
  } else if (dice < 0.5) {
    x -= jump;
  } else if (dice < 0.75) {
    y += jump;
  } else {
    y -= jump;
  }

  strokeWeight(5);
  stroke("#ffcc00");
  noFill();
  beginShape();
  vertex(x, y);
  vertex(px, py);
  endShape();

  // Automated saveCanvas for every 10th second
  if (utils.notify(10) == true && counter < 4) {
    ptime = millis();

    // save current canvas image with default attributes
    utils.saveCanvas();

    // or you can set prefix and file extension argument
    // utils.saveCanvas("randomWalker","jpg");

    // clear the canvas again
    background(180);


    // set starting position to middle of the canvas
    x = width * 0.5;
    y = height * 0.5;
    px = x;
    py = y;

    counter++;
  }

}
