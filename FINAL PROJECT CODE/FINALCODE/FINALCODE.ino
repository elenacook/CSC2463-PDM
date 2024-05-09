/*
  Button

  Turns on and off a light emitting diode(LED) connected to digital pin 13,
  when pressing a pushbutton attached to pin 2.

  The circuit:
  - LED attached from pin 13 to ground through 220 ohm resistor
  - pushbutton attached to pin 2 from +5V
  - 10K resistor attached to pin 2 from ground

  - Note: on most Arduinos there is already an LED on the board
    attached to pin 13.

  created 2005
  by DojoDave <http://www.0j0.org>
  modified 30 Aug 2011
  by Tom Igoe

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/Button
*/

// constants won't change. They're used here to set pin numbers:
const int buttonPin1 = 2;  // C
const int ledPin1 = 5;    // RED
const int buttonPin2 = 4;  // D
const int ledPin2 = 6;   // WHITE
const int buttonPin3 = 7;  // E
const int ledPin3 = 9;    // GREEN
const int buttonPin4 = 8;  // F
const int ledPin4 = 10;   // BLUE
const int buttonPin5 = 12;  // G
const int ledPin5 = 13;   // YELLOW

// variables will change:
int buttonState1 = 0;  // variable for reading the pushbutton status
int buttonState2 = 0;
int buttonState3 = 0;  // variable for reading the pushbutton status
int buttonState4 = 0;
int buttonState5 = 0;  // variable for reading the pushbutton status

bool start = false;
unsigned long lastTime = 0;
const int interval = 16;


void setup() {
  Serial.begin(57600);
  // initialize the LED pin as an output:
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT);
  pinMode(ledPin4, OUTPUT);
  pinMode(ledPin5, OUTPUT);
  
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin1, INPUT_PULLUP);
  pinMode(buttonPin2, INPUT_PULLUP);
  pinMode(buttonPin3, INPUT_PULLUP);
  pinMode(buttonPin4, INPUT_PULLUP);
  pinMode(buttonPin5, INPUT_PULLUP);
  
}

void loop() {
  // read the state of the pushbutton value:
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);
  buttonState4 = digitalRead(buttonPin4);
  buttonState5 = digitalRead(buttonPin5);
  

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState1 == HIGH) {
    digitalWrite(ledPin1, HIGH);   
  } else {
    digitalWrite(ledPin1, LOW);
  }

  if (buttonState2 == HIGH) {
    digitalWrite(ledPin2, HIGH);  
  } else {
    // turn LED off:
    digitalWrite(ledPin2, LOW);
  }

  if (buttonState3 == HIGH) {
    digitalWrite(ledPin3, HIGH);  
  } else {
    digitalWrite(ledPin3, LOW);
  }

  if (buttonState4 == HIGH) {
    digitalWrite(ledPin4, HIGH);  
  } else {
    // turn LED off:
    digitalWrite(ledPin4, LOW);
  }

  if (buttonState5 == HIGH) {
    digitalWrite(ledPin5, HIGH);  
  } else {
    digitalWrite(ledPin5, LOW);
  }



    Serial.print(buttonState1);
    Serial.print(",");
    Serial.print(buttonState2);
    Serial.print(",");
    Serial.print(buttonState3);
    Serial.print(",");
    Serial.print(buttonState4);
    Serial.print(",");
    Serial.println(buttonState5);
  
  

}
