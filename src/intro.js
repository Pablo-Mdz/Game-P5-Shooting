function preload() {
    introSound = loadSound('../media/introSound.wav');
}

function setup(){
    createCanvas(1400, 600)
}
function draw() {
    introSound.play()
}
function mousePressed() {
    if (introSound.isPlaying()) {
        introSound.play();
        
    } else {
        introSound.isPlaying() //returns a boolean
        //   introSound.stop();
      
    }
  }