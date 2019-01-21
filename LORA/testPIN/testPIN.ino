void setup() {
  // put your setup code here, to run once:
   pinMode(33,INPUT); //up and white
  pinMode(32,INPUT); //down red
  Serial.begin(115200);

}

void loop() {
if(digitalRead(33)==1){
  Serial.print("\n 33");
  }
if(digitalRead(32)==1){
  Serial.print("\n 32");
  }

}
