
let noise = new Tone.Noise("pink");
let filter = new Tone.Filter (10000, "highpass");

noise.connect(filter);
filter.toDestination();


function preload(){
star = loadImage ('assets/star.jpeg')
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseIsPressed === true){
    background(star);
    noise.start();
    filter.frequency.rampTo(100, 1);    

  }else if (mouseIsPressed === false){
    background(220);
    text('PRESS FOR SHOOTING STAR', 115, height/3);
    noise.stop();
    filter.frequency.value = 10000;

  }

 


}
