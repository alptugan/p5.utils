// Define global variable and initialize p5.Utils lib
var utils = new p5.Utils();

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {

  background(220);

  noStroke();

  // TOP LEFT CIRCLE
  // Begin gradient fill for three colors in diagonal
  utils.beginLinearGradient(
    ["#FFCC00", color(34, 116, 165), color(239, 62, 54)], // Colors
    120,    // gradient begin point x     
    120,   // gradient begin point y
    280,    // gradient end point x
    280,   // gradient end point y
    [0, 0.5, 1]           // Position of each color.
  );

  circle(180, 180, 200);
  // End gradient fill
  utils.endLinearGradient();

  // TOP RIGHT SQUARE
  // Begin gradient fill for two colors in diagonal
  utils.beginLinearGradient(
    ["#FFCC00", color(239, 62, 54)], // Colors
    320,    // gradient begin point x     
    80,   // gradient begin point y
    520,    // gradient end point x
    280,   // gradient end point y
    [0, 1]           // Position of each color.
  );

  rect(320, 80, 200, 200);
  // End gradient fill
  utils.endLinearGradient();

  // BOTTOM LEFT TRIANGLE
  // Begin gradient fill for four colors in horizontal
  utils.beginLinearGradient(
    ["#FFCC00", color(239, 62, 54), "#FAD8D6", color(70, 177, 201)], // Colors
    180,    // gradient begin point x     
    320,   // gradient begin point y
    180,    // gradient end point x
    520,   // gradient end point y
    [0, 0.25, 0.75, 1]           // Position of each color.
  );

  triangle(
    180, 320,
    80, 520,
    280, 520
  );
  // End gradient fill
  utils.endLinearGradient();

  // BOTTOM RIGHT SOLID FILL
  fill(70, 177, 201);
  circle(420, 420, 200);
}

function keyPressed() {
  if (key == 's')
    utils.saveCanvas("linearGradientFill");
}