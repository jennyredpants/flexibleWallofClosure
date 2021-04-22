function setup() {
  createCanvas(800, 450);
}

//move the mouse around on the canvas if you want to change the color that way

function draw() {
  background(0);
  for(var x = 7.5; x < width; x += 10){
    for(var y = 7.5; y < height; y += 10){
      fill(mouseX, 150, x/2);
      ellipse(x, y, x, y);
    } 
  }
}