let port;
let ledButton;
let connectButton;
let button1 = 0;
let button2 = 0;
let button3 = 0;
let button4 = 0;
let button5 = 0;

let synth = new Tone.PolySynth(Tone.Synth);
synth.toDestination();

function preload(){
  piano = loadImage ('assets/piano.jpeg')
  }


function setup() {
  port = createSerial();
  createCanvas(400, 400);
  
  connectButton = createButton("Connect");
  connectButton.mousePressed(connect);

  let usedPorts = usedSerialPorts();
  if(usedPorts.length >0){
    port.open(usedPorts[0],57600);
  }
  frameRate(50);
}



function draw() {
  background(piano);
  fill("white");
  textSize(25);
  text ("M I N I   P I A N O", 108,80);
  textSize(15);
  text ("Press a button to learn your notes!", 95, 120)
  


let characters = port.available();
let str = port.read(characters);
let lines = str.split('\n');
let latest = "";
if(lines.length >0){
  let lastIndex = lines.length > 1 ? lines.length-2 : lines.length - 1;
  latest = lines[lastIndex];
}
let values = latest.split(',');
console.log(values);

if(values.length > 4) {
  button1 = Number(values[0]);
  button2 = values[1];
  button3 = values[2];
  button4 = values[3];
  button5 = values[4];


  if (button1 == 1){
    fill("blue");
    synth.triggerAttack("C4");
    synth.triggerRelease("C4",'+0.03');
    background("red");
    fill("black");
    textSize(250);
    text ('C', 105, 265);

   }else if (button2 == 1){
      synth.triggerAttack("D4");
      synth.triggerRelease("D4",'+0.03');
      background("white");
      fill("black");
      textSize(250);
      text ('D', 105, 265);
      
   }else if (button3 == 1){
    synth.triggerAttack("E4");
    synth.triggerRelease("E4",'+0.03');
    background("green");
    fill("black");
    textSize(250);
    text ('E', 105, 265);
    
   }else if (button4 == 1){
    synth.triggerAttack("F4");
    synth.triggerRelease("F4",'+0.03');
    background("blue");
    fill("black");
    textSize(250);
    text ('F', 105, 265);
    
   }else if (button5 == 1){
    synth.triggerAttack("G4");
    synth.triggerRelease("G4",'+0.03');
    background("yellow");
    fill("black");
    textSize(250);
    text ('G', 105, 265);
    
   }

}



}







function connect() {
  if(!port.opened()){
    port.open('Arduino', 57600);
  } else {
    port.close();
  }
}
