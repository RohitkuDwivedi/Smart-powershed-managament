/*
 * work to be DONE: 
 * 1) reciver code for checking power shed mode
 * 
*/


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

int threshold = 10;   // change to 3200 of as per meter (no of led blinks per unit)
int ps_Blinks=0;
int n_Blinks=0;
int ps_Mode=0;
int n_UnitsConsumed=0;
int ps_UnitsConsumed=0;

//------------------------- SETUP ------------------------------------------------------
void setup() {
  pinMode(25,OUTPUT); //Send success, LED will bright 1 second
  pinMode(33,INPUT); //Send success, LED will bright 1 second
  
  Serial.begin(115200);
  while (!Serial); //If just the the basic function, must connect to a computer
  
  SPI.begin(5,19,27,18);
  LoRa.setPins(SS,RST,DI0);
//  Serial.println("LoRa Sender");

  if (!LoRa.begin(BAND)) {
    Serial.println("Starting LoRa failed!");
    while (1);
  }
  Serial.println("LoRa Initial OK!");
}
//---------------------------   LOOP --------------------------------------
void loop() {

countIncrement();

}


//--------------------------my functions ----------------------------------

//-------------- FUNCTION TO SEND DATA ---------------------------------------

<<<<<<< HEAD
void mySend()
{
  LoRa.beginPacket();
  LoRa.print("NODE2: ");
  LoRa.print(counter);
  LoRa.endPacket();
  Serial.println("DATA SEND: ");
  Serial.println(counter);
}

=======
>>>>>>> e07ae63192b0979c2352df763f0acd3dbf3bc56d
//---------------- FUNCTION TO SET INTO RECIEVE MODE -------------------------------------
void myRecieve()
{
  int packetSize = LoRa.parsePacket();
  if (packetSize){
    // received a packet
    Serial.print("Received'");

    // read packet
    while (LoRa.available())
    {
      Serial.print((char)LoRa.read());
    }
<<<<<<< HEAD

    // print RSSI of packet
    Serial.print("' with RSSI ");
    Serial.println(LoRa.packetRssi());
  }
}


void checkPsMode(){}
=======
    char *str= &str1[0];
    msgID = atoi(strtok(str , ":" ));
    ps_time = 1000 * atoi(strtok(0 , ":" ));
    ps_unit = atoi(strtok(0 , ":" ));
    ps_Timestamp = millis();
    ps_Mode = 1;
    Serial.println("in ps mode");
    delay(2000);
  }
}

void psReset(){   
  if( millis() - ps_Timestamp >= ps_time ){
    msgID = 0;
    ps_time = 0;
    ps_unit = 0;
    ps_Timestamp = 0;
    ps_Mode = 0;
    n_UnitsConsumed = n_UnitsConsumed + ps_UnitsConsumed;
    ps_UnitsConsumed=0 ;   
    }
}
>>>>>>> e07ae63192b0979c2352df763f0acd3dbf3bc56d

void checkPsMode(){
  if(msgID!=0 ){ //check if home node is in Power shed mode?
    psReset();
  }
}

//------------------------------------ RESETS THE PSMOD AND ALL PS VARIABLES WHEN TIMOUT ------------------------


void countIncrement(){
  if(ps_Mode==1)
  {
    psModeConsume();  // check for no blink and units consumption
  }
    else if(ps_Mode==0){

    nModeConsume();
      }
}

void psModeConsume(){
<<<<<<< HEAD
  if(digitalRead(33)==1)
      {
        while(digitalRead(33)==1) // check debouncing
=======
 if(digitalRead(blinkPin)){
        Serial.println();
        Serial.print("ps BLINK INCREMENTED:");
        delay(100);
>>>>>>> e07ae63192b0979c2352df763f0acd3dbf3bc56d
        ++ps_Blinks;
      }

    
    if(n_Blinks >= threshold){
      ps_UnitsConsumed++;
      ps_Blinks=0;
      sendData();
    }

}

void nModeConsume(){
  if(digitalRead(33)==1)
      {
<<<<<<< HEAD
        while(digitalRead(33)==1) // check debouncing
        ++n_Blinks;
=======
        Serial.print("n BLINK INCREMENTED");
        
        delay(100);
         ++n_Blinks;
>>>>>>> e07ae63192b0979c2352df763f0acd3dbf3bc56d
      } 
      if(n_Blinks >= threshold){
      n_UnitsConsumed++;
      n_Blinks=0;
      sendData();
    }
}

void sendData(){
<<<<<<< HEAD
  LoRa.print("\nconsumption NORMAL:");LoRa.print(n_UnitsConsumed);
  LoRa.print("\n PowerShed:");LoRa.print(ps_UnitsConsumed);
  Serial.print("data Sent :)");
=======
  char myData[40];
  sprintf(myData,"consumption NORMAL: %d PowerShed:%d ",n_UnitsConsumed,ps_UnitsConsumed);
  Serial.println(myData);
  delay(1000);
>>>>>>> e07ae63192b0979c2352df763f0acd3dbf3bc56d
}
