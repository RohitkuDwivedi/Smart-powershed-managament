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

 
// GLOBAL VARIABLES (ps:PowerShed,n:normal)
int threshold = 10;   // change to 3200 of as per meter (no of led blinks per unit)
int ps_Blinks=0;
int n_Blinks=0;
int ps_Mode=0;
int n_UnitsConsumed=0;
int ps_UnitsConsumed=0;

// FUNCTION DECLARATIONS

void checkPsMode();
void countIncrement();
void sendData();
void nModeConsume();
void psModeConsume();



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

void loop() {

//Serial.print("Sending packet: ");
//  // send packet
//  LoRa.beginPacket();
//  //LoRa.print("hello ");
//  LoRa.print(counter);
//  LoRa.endPacket();


countIncrement();

}


// my functions
void checkPsMode(){}

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
  if(digitalRead(33)==1)
      {
        while(digitalRead(33)==1) // check debouncing
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
        while(digitalRead(33)==1) // check debouncing
        ++n_Blinks;
      } 
      if(n_Blinks >= threshold){
      n_UnitsConsumed++;
      n_Blinks=0;
      sendData();
    }
}

void sendData(){
  LoRa.print("\nconsumption NORMAL:");LoRa.print(n_UnitsConsumed);
  LoRa.print("\n PowerShed:");LoRa.print(ps_UnitsConsumed);
  Serial.print("data Sent :)");
}
