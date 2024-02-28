let soundFX, button1, button2, button3, button4;
let delAmt = new Tone.FeedbackDelay ("8n", 0.5);
let delaySlider;


function preload(){
  soundFX = new Tone.Players ({
    bubbles : "assets/bubbles.mp3",
    bowomp : "assets/bowomp.mp3",
    dolphin : "assets/dolphin.mp3",
    spongebob : "assets/spongebob.mp3"
  });
soundFX.connect(delAmt);
delAmt.toDestination();
}



function setup() {
  createCanvas(400, 400);

button1 = createButton('Bikini Bottom Bubbles');
button1.position (50,100);
button1.mousePressed (() =>soundFX.player ('bubbles').start() );

button2 = createButton('Squidward');
button2.position (250,100);
button2.mousePressed (() =>soundFX.player ('bowomp').start() );

button3 = createButton('Sailor Mouth');
button3.position (85,150);
button3.mousePressed (() =>soundFX.player ('dolphin').start() );

button4 = createButton('Spongebob');
button4.position (250,150);
button4.mousePressed (() =>soundFX.player ('spongebob').start() );


delaySlider = createSlider (0, 1, 0, 0.05);
delaySlider.position (125,250);
delaySlider.mouseMoved(() => delAmt.delayTime.value = delaySlider.value());


}

function draw() {
  background(255,255,0);
  text("The Spongebob Sampler", 140, 50);
  text("Slide this thing to add some delay!", 120, 300);

}
