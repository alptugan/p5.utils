// Declare Utils as a variable
var utils = new p5.Utils();

function setup() {
    createCanvas(innerWidth, innerHeight);

    // Set styling before the enabling the ruler
    utils.setRulerStyle(
        "rgba(200,200,200,1)", // Ruler Bg Color
        "rgba(30,30,30,1)", // Ruler Text Color
        40, // Ruler Size
        "rgba(200,200,200,1)", // Info Text Color following the mouse cursor
        "rgba(5,5,5,0.7)", // Info Text Background Color
        "rgba(255,0,0,1)", // Ticker Color that projects the mouse cursor on top and left ruler bar
        "10px monospace", // Overall font size and font family
        true // Set true or false, to hide/show info card next to mouse cursor. By default it is true.
    );
    // Call the method "enableRuler()"
    // to display pixel ruler
    utils.enableRuler();
}

function draw() {
    background(220);

    fill(255);
    rect(200, 223, 200, 100);
}

function keyPressed() {
    if (key == "s") {
        // re-draw ruler
        utils.enableRuler();
    } else if (key == "h") {
        // hide ruler
        utils.disableRuler();
    }
}
