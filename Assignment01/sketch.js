function setup() {
  createCanvas(700, 3000);
  colorMode(HSB,360,100,100);
}

function draw() {
  background(220);
  noStroke();
  fill('lawngreen');
  rect(0,0,650,300);
  

  stroke(0);
  fill('white');
  strokeWeight(2);
  circle(150,150,250);
  square(350,20,250);

  noStroke();
  square(0,300,650);
  fill(360,60,100,0.5);
  circle(330,525,350);
  fill(240,60,100,0.5);
  circle(215,720,350);
  fill(120,60,100,0.5);
  circle(430,720,350);

  stroke(0);
  fill('black');
  rect(0,950,650,350);
  fill('yellow');
  arc(170,1125,250,250,PI+QUARTER_PI,PI-QUARTER_PI);
  fill('red');
  noStroke();
  arc(500,1125,250,250,PI,0,OPEN);
  fill('red');
  noStroke();
  rect(375,1125,250,115);
  
  fill('white');
  circle(440,1115,75,75);
  fill('white');
  circle(560,1115,75,75);
  fill('blue');
  circle(440,1115,45,45);
  fill('blue');
  circle(560,1115,45,45);

  fill('blue');
  square(0,1300,650);

  stroke(255);
  strokeWeight(8);
  fill('green');
  circle(330,1600,400,400);

  strokeWeight(8);
  fill('red');

  beginShape();
    vertex(330,1400);//top
    vertex(290,1520); //corner1
    vertex(150,1515);// mid left
    vertex(260,1600);//corner3
    vertex(195,1750); // bottom left
    vertex(330,1660);//crotch
    vertex(470,1750);//bottom right
    vertex(400,1600);//corner4
    vertex(510,1515);// mid right
    vertex(370,1520);//corner2
  endShape(CLOSE);
  
}