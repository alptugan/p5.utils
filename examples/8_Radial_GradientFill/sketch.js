// Declare global utils var
var utils = new p5.Utils();

// Object to hold item position and sizes
var props = [];

// Gap between each shape
var margin;
var col;
var row;

function setup() {
  createCanvas(innerWidth, innerHeight);

  // Gap between each shape
  margin = 50;
  col = 2;
  row = 2;

  // Function to set position for specified number of object on canvas
  // Creates number of element in a centered grid distribution
  createGrid(row, col, margin);

}

function draw() {
  background(220);

  noStroke();

  // ==================================================================
  // TOPLEFT CIRCLE (EASIEST WAY)
  // ==================================================================
  // 2 color radial gradient
  var colors = ["#ffcc00", "#ff0000"];

  // Begin radial gradient fill
  // Short version to use function must require 4 arguments
  utils.beginRadialGradient(
    colors,     // Colors of the gradient fill
    props[0].x, // position of the inner circle gradient
    props[0].y, // position of the inner circle gradient
    props[0].w  // diameter of the gradient fill
  );
  ellipseMode(CORNER);
  circle(props[0].x, props[0].y, props[0].w);
  utils.endRadialGradient();

  // ==================================================================
  // BOTTOM LEFT CIRCLE
  // ==================================================================
  // 2 color radial gradient 
  var colors2 = ["#ffcc00", "#00ccff"];
  var sx = props[1].x + props[1].w * 0.5;
  var sy = props[1].y + props[1].w * 0.5;
  var innerRad = props[1].w * 0.05;

  var ex = sx;
  var ey = sy;
  var outerRad = props[1].w;

  // Begin radial gradient fill
  // Long version to use function must require 6 arguments
  utils.beginRadialGradient(
    colors2,    // Colors of the gradient fill
    sx,         // x position of the inner circle gradient
    sy,         // y position of the inner circle gradient
    innerRad,   // diameter of inner (the first color) in colors2 array
    ex,         // x position of the outer circle gradient
    ey,         // y position of the outer circle gradient
    outerRad    // diameter of outer (the second color) in colors2 array
  );
  circle(sx, sy, outerRad);
  utils.endRadialGradient();

  // ==================================================================
  // TOP RIGHT CIRCLE
  // ==================================================================
  var colors3 = ["#ffcc00", "#00ccff", color(255, 0, 0, 255)];
  // Begin radial gradient fill
  utils.beginRadialGradient(colors3, props[2].x, props[2].y, props[2].w * 0.1, props[2].x, props[2].y, props[2].w);
  ellipseMode(CORNER);
  circle(props[2].x, props[2].y, props[2].w);
  utils.endRadialGradient();


  // ==================================================================
  // BOTTOM RIGHT CIRCLE
  // ==================================================================
  var colors4 = ["#00ccff", "#ffffff", "#ffcc00"];
  // Begin radial gradient fill
  // The 7th argument sets the color position
  // By default it is 0.5 for general usage
  utils.beginRadialGradient(
    colors4,
    props[3].x + props[3].w * 0.6,
    props[3].y,
    props[3].w * 0.4,
    props[3].x + props[3].w * 0.6,
    props[3].y,
    props[3].w,
    0.4
  );
  ellipseMode(CORNER);
  circle(props[3].x, props[3].y, props[3].w);
  utils.endRadialGradient();

  /*
  // ==================================================================
  // DEBUG TO VIEW GRID POSITION
  // ==================================================================
  noFill();
  stroke(1)
  for (var j = 0; j < props.length; j++) {
    rect(props[j].x, props[j].y, props[j].w, props[j].h);

  }*/
}


function createGrid(_row, _col, _margin) {
  // Divide canvas 4 equal piece
  // Store positions and sizes into the props array as x,y,width and height values
  var sz = min(width, height);
  sz -= _margin * (_col * _row);

  props = [];

  var totalW = (sz + _margin * _col * 0.5);
  var totalH = (sz + _margin * _row * 0.5);
  var xShift = (width - totalW) * 0.5;
  var yShift = (height - totalH) * 0.5;
  for (var i = 0; i < _col; i++) {
    for (var j = 0; j < _row; j++) {
      props.push({
        "x": xShift + (i * (sz / _col + _margin)),
        "y": yShift + (j * (sz / _row + _margin)),
        "w": sz / _col,
        "h": sz / _row
      });
    }
  }
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
  createGrid(row, col, margin);
}

function keyPressed() {
  if (key == 's') {
    utils.saveCanvas();
  }
}