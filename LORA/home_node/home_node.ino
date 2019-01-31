#include <SPI.h>
#include "LoRa.h"
#include<Arduino.h>

// WIFI_LoRa_32 ports
// GPIO5  -- SX1278's SCK
// GPIO19 -- SX1278's MISO
// GPIO27 -- SX1278's MOSI
// GPIO18 -- SX1278's CS
// GPIO14 -- SX1278's RESET
// GPIO26 -- SX1278's IRQ(Interrupt Request)

#define SS      18
#define RST     14
#define DI0     26
#define BAND    433E6  //915E6 --

 
//---------------------------GLOBAL VARIABLES (ps:PowerShed,n:normal)--------------------------------------------------
int UniqueDeviceId = 1001;
int threshold = 3;   // change to 3200 of as per meter (no of led blinks per unit)
int ps_Blinks=0;
int n_Blinks=0;
int ps_Mode=0;
int n_UnitsConsumed=0;
int ps_UnitsConsumed=0;
int msgID;
unsigned long dayStart=0;
unsigned long fullDay = 120000;    // assuming day to be of 2 min ie 120000 ms

//----packet variables-----------------

int ps_Timestamp=0;
int ps_time=0;
int ps_unit=0;
//--------pin variables
int blinkPin = 16; // pin to read blinks
int relayPin = 17; // pin to control relay
 
//------------------------- SETUP ------------------------------------------------------

void setup() {
  pinMode(blinkPin,INPUT); // READS BLINK FROM METER
  pinMode(relayPin,OUTPUT); // contorl RELAY pin
  digitalWrite(relayPin,HIGH); // turn relay on
  Serial.begin(115200);
  while (!Serial); //If just the the basic function, must connect to a computer
//  SPI.begin(5,19,27,18);
  SPI.begin();
  LoRa.setPins(SS,RST,DI0);

  if (!LoRa.begin(BAND)) {
    Serial.println("Starting LoRa failed!");
    while (1);
  }
  Serial.println("LoRa Initial OK!");
  dayStart = millis();
}

//---------------------------   LOOP --------------------------------------
void loop() {
  
  myRecieve();
  checkPsMode();
  countIncrement();
  trip();
  dayOff();
 }

//--------------------------my functions ----------------------------------
//-------------- FUNCTION TO SEND DATA ---------------------------------------

void dayOff()   // function to calculate day's end and send data to rpi
{
if(millis()-dayStart >= fullDay){
  sendToPi();
  dayStart=millis();
  }  
}


// sendToPi method sends data about the consumption of data to rpi using lora
void sendToPi(){
  char rpiData[30];
  sprintf(rpiData,"%d:%d",UniqueDeviceId,( n_UnitsConsumed + ps_UnitsConsumed));
  LoRa.beginPacket();
  LoRa.print(rpiData);
  LoRa.endPacket();
}

void trip(){
if(ps_Mode == 1 && ps_UnitsConsumed >= ps_unit ){
  digitalWrite(relayPin,LOW);
  }else{
   digitalWrite(relayPin,HIGH); 
    }
}

void mySend()
{
  LoRa.beginPacket();
  //send consumption if time passed is 24h
  LoRa.print("");
  LoRa.endPacket();
}

//---------------- FUNCTION TO SET INTO RECIEVE MODE -------------------------------------
void myRecieve()
{ 
  int packetSize = LoRa.parsePacket();
  if (packetSize){
    String str1;
  
    // read packet
    while (LoRa.available())
    {
     str1.concat((char)LoRa.read());
    }
    char *str= &str1[0];
    msgID = atoi(strtok(str , ":" ));
    ps_time = 2000 * atoi(strtok(0 , ":" ));
    ps_unit = atoi(strtok(0 , ":" ));
    ps_Timestamp = millis();
    //ps_Mode = 1;
    Serial.println("in PS MODE");
  }
}


void checkPsMode(){
  if(msgID!=0 ){
  ps_Mode=1;
//  Serial.println(ps_Mode);
  }
  else{
    ps_Mode=0;
//    Serial.println(ps_Mode);
    }
}

//------------------------------------ RESETS THE PSMOD AND ALL PS VARIABLES WHEN TIMOUT ------------------------
void psReset(){   
  if( millis() - ps_Timestamp >= ps_time ){
    msgID = 0;
    ps_time = 0;
    ps_unit = 0;
    ps_Timestamp = 0;
    ps_Mode = 0;
    }
}

void countIncrement(){
//  Serial.println("in counter increment");
  if(ps_Mode==1)
  { 
    psModeConsume();  // check for no blink and units consumption
    psReset();
  }
    else if(ps_Mode==0){
      nModeConsume();
      }
}

void psModeConsume(){
 if(!digitalRead(blinkPin)){ // pullUp circuit
//        Serial.println();
        Serial.print("ps BLINK INCREMENTED:");
        delay(200);
//    while(!digitalRead(blinkPin));
        ++ps_Blinks;
      }
    if(ps_Blinks >= threshold){
      ps_UnitsConsumed++;
      ps_Blinks=0;
      sendData();
    }

}

void nModeConsume(){
  
  
//  Serial.println();
//  Serial.print("blinkPin pin state in nmode:");
   if(!digitalRead(blinkPin)) // pullUp circuit
      {
        Serial.println("n BLINK INCREMENTED");
        while(!digitalRead(blinkPin));
//        delay(1000);
         ++n_Blinks;
      } 

      if(n_Blinks >= threshold){
        n_UnitsConsumed++;
        n_Blinks=0;
        sendData();
    }
}

void sendData(){
  char myData[40];
  sprintf(myData,"consumption NORMAL: %d PowerShed:%d ",n_UnitsConsumed,ps_UnitsConsumed);
  Serial.println(myData);
  delay(2000);
}
