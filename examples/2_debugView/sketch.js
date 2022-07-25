var pNum = 100;
var pSize = [];
var pRad = [];
var pSpeed = [];
var pColor = "#000000";

var utils = new p5.Utils();

function setup() {
  createCanvas(600, 600);


  generateParticles();
}

function draw() {
  background(220);

  noStroke();

  var angle = 360 / pNum;
  fill(pColor);
  for (var i = 0; i < pNum; i++) {
    var x = width * 0.5 + pRad[i] * cos(millis() * pSpeed[i] + radians(angle * i));
    var y = height * 0.5 + pRad[i] * sin(millis() * pSpeed[i] + radians(angle * i));
    circle(x, y, pSize[i]);
  }


  // Some example variables to include in debug view
  // The left part in the JSON converted to string by the function, 
  // the right part can be in any data format.
  // You can increase the number of elements as many as you want.
  // All of the information is rendered into a single DIV element. 
  utils.debug({
    "FPS": frameRate().toFixed(0),
    "Current Frame": frameCount,
    "Time Passed (sec)": (millis() / 1000).toFixed(3),
    "Particle Num": pNum,
    "Particle Color": pColor,
    "Canvas Size": width + "x" + height + " px"
  })
}

function generateParticles() {
  for (var i = 0; i < pNum; i++) {
    pSize.push(random(3, 10));
    pRad.push(random(50, 260));
    pSpeed.push(random(0.0001, 0.002));
  }
}

function keyPressed() {

  if (key == 'a') {
    pNum += 100;
  }

  if (key == 'r') {
    pNum -= 100;
    if (pNum <= 100) {
      pNum = 100;
    }
  }

  generateParticles();
}
