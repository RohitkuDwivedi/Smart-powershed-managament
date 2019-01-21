void setup() {
  // put your setup code here, to run once:
   pinMode(7,INPUT); //up and white
  //pinMode(8,INPUT); //down red
  Serial.begin(115200);

}

void loop() {
if(digitalRead(7)==1){
//  while(digitalRead(33)==1){
  Serial.print("\n 33");
//  }
}
//  else
//  {
//    Serial.print("\n 00");
//    }
    delay(500);
//if(digitalRead(8)==1){
//  Serial.print("\n 32");
//  }

}
