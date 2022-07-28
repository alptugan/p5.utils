// Define global variable and initialize p5.Utils lib
var utils = new p5.Utils();
var arr = [];

function setup() {
  createCanvas(600, 600);

  // Resize an empty array
  arr = utils.arrayResize(arr, 10, 0.1);
  print(arr);

  // or assign default values for the 122 items in an array.
  arr = utils.arrayResize(arr, 122);
  print(arr);

  background(120);

  generateRandomValues();

  noLoop();
}


function generateRandomValues() {
  // Assign random values between 1 and 100 for each item in the array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = noise(i * 0.2) * 20;
  }
}

function draw() {


  for (let i = 0; i < arr.length; i++) {
    const sz = arr[i];
    //print(sin(noise(i * 0.01)) * 150);
    var x = width * 0.5 + (sin(i * random(0.04, 0.05)) * 50);
    var y = lerp(0, height, i / arr.length);
    noFill();
    strokeWeight(random(1, 3));
    stroke(254, 203, 47, random(10, 255));
    circle(x, y, sz)
  }
}
function keyPressed() {
  if (key == 'r') {
    // redraw background rectangle with low opacity
    // to create transparent layering
    background(120, 150);

    // Set new array size
    arr = utils.arrayResize(arr, random(100, 400));

    generateRandomValues();

    // circles again
    draw();
  }
}