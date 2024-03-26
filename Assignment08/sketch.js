
let sequence1;
let synth1;

let melody = ["D3", ["E3", "C3", "A3", "B3"], "C4", "E4", "F3", "A3", ["B3", "G3"], "D4"];

let noise = new Tone.Noise("pink");
let filter = new Tone.Filter (10000, "highpass");

let soundFX = new Tone.Players({
  pop: "assets/pop.wav", 
}).toDestination(); 

noise.connect(filter);
filter.toDestination();

synth1 = new Tone.Synth({
  oscillator: {
    type: "square"
  },
  envelope : {
    attack: 0.1,
    decay: 0.1,
    sustain: 1,
    release: 0.1
  }
}).toDestination();

sequence1 = new Tone.Sequence (function (time,note){
  synth1.triggerAttackRelease(note, 0.8); 
}, melody, "4n"); 

Tone.Transport.start(); 
Tone.Transport.bpm.value = 100; 


var Button;
var currentColor;

function setup() {
  createCanvas(1600, 2500);
  background(255);
  noStroke()
}
 

function draw() {
  //background(255);
    let c = (0, 0, 0);
  
  noStroke();
  fill(255,0,0);
  square(3,10,30,0);
  
  fill(255,160,0);
  square(3,42,30,0);
  
  fill(255,255,0);
  square(3,74,30,0);
  
  fill(0,255,0);
  square(3,106,30,0);
  
  fill(0,255,255);
  square(3,137,30,0);
  
  fill(255,100,200);
  square(3,168,30,0);
  
  fill(200,100,50);
  square(3,200,30,0);
  
  fill(255,255,255);
  square(3,233,30,0);
  
  fill(0,0,255);
  square(3,266,30,0);
  
  fill(0,0,0);
  square(3,300,30,0);

   
  
  
}
 
function mousePressed(){
  if(mouseX >= 3 && mouseX <= 33){

    if (mouseY >=10 && mouseY <=30){
      currentColor = color(255,0,0);
      Tone.start();
      sequence1.start();
      soundFX.player("pop").start();  

    }
    else if (mouseY >=42 && mouseY <=72){
      currentColor = color(255,160,0);
      Tone.start();
      sequence1.start();
      soundFX.player("pop").start(); 

    }
    else if(mouseY >=74 && mouseY <=104){
      currentColor = color(255,255,0);
      Tone.start();
      sequence1.start();
      soundFX.player("pop").start(); 
    }

    else if(mouseY >=106  && mouseY <=136){
      currentColor = color(0,255,0);
      Tone.start();
      sequence1.start();
      soundFX.player("pop").start(); 
    }

    else if(mouseY >=137  && mouseY <=167){
      currentColor = color(0,255,255);
      Tone.start();
      sequence1.start();
      soundFX.player("pop").start(); 
    }

    else if(mouseY >=168  && mouseY <=198){
      currentColor = color(255,100,200);
      Tone.start();
      sequence1.start();
      soundFX.player("pop").start(); 
    }

    else if(mouseY >=200  && mouseY <=230){
      currentColor = color(200,100,50);
      Tone.start();
      sequence1.start();
      soundFX.player("pop").start(); 
    }

    else if(mouseY >=233  && mouseY <=263){
      currentColor = color(255,255,255);
      Tone.start();
      sequence1.start();
      soundFX.player("pop").start(); 
    }

    else if(mouseY >=266  && mouseY <=296){
      currentColor = color(0,0,255);
      Tone.start();
      sequence1.start();
      soundFX.player("pop").start(); 
    }

    else if(mouseY >=300  && mouseY <=330){
      currentColor = color(0,0,0);
      Tone.start();
      sequence1.start();
      soundFX.player("pop").start(); 
      
    }

  }
}

function mouseDragged() {
  if (mouseIsPressed) {
    noStroke();
   fill(currentColor);
   ellipse(mouseX, mouseY,80,80);
   noise.start();
  filter.frequency.rampTo(100, 1);   
 }
 
}
function mouseReleased(){
  noise.stop();
  filter.frequency.value = 10000;

}
