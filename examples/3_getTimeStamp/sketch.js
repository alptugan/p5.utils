// Define global variable and initialize p5.Utils lib
var utils = new p5.Utils();

// Font source:
// https://www.dafont.com/lcd-at-t-phone-time-date.font
var cutomFontName = "LCDAT&TPhoneTimeDate.ttf";

function setup() {
  createCanvas(600, 600);
  //noLoop();
}

function draw() {
  background(200);

  // get current time stamp within date
  var currentTime = utils.getTimeStamp();
  //print(currentTime);

  // write it to canvas using utils's text function 
  fill(255, 100, 20);
  utils.text(
    currentTime,        // string to display
    width * 0.5 - 100,   // x position
    height * 0.5 - 60,  // y position
    16
  );


  // get current time stamp without date
  var currentTime2 = utils.getTimeStamp(false);
  fill(90, 90, 90);
  // write it to canvas using utils's text function 
  utils.text(
    currentTime2,   // string to display
    width * 0.5,   // x position
    height * 0.5,  // y position
    80,            // fontsize
    cutomFontName,  // custom font
    CENTER,        // text alignment horizontal
    CENTER);       // text alignment vertical

}
