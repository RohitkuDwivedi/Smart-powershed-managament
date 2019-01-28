// This example just provide basic LoRa function test;
// Not the LoRa's farthest distance or strongest interference immunity.
// For more informations, please vist www.heltec.cn or mail to support@heltec.cn

#include <SPI.h>
#include <LoRa.h>

// WIFI_LoRa_32 ports
// GPIO5  -- SX1278's SCK
// GPIO19 -- SX1278's MISO
// GPIO27 -- SX1278's MOSI
// GPIO18 -- SX1278's CS
// GPIO14 -- SX1278's RESET
// GPIO26 -- SX1278's IRQ(Interrupt Request)

#define SS 18
#define RST 14
#define DI0 26
#define BAND 433E6

void setup()
{
  Serial.begin(115200);
  while (!Serial)
    ; //if just the the basic function, must connect to a computer
  delay(1000);
  Serial.println("LoRa Receiver");
  pinMode(32,INPUT);
  SPI.begin(5, 19, 27, 18);
  LoRa.setPins(SS, RST, DI0);
  if (!LoRa.begin(BAND))
  {
    Serial.println("Starting LoRa failed!");
    while (1)
      ;
  }
}

int interval = 10000;
int prevTime = millis();
int counter = 0;
void loop()
{
  myRecieve(); // set LoRa to recieve mode

   if (digitalRead(32)==1){
    mySend();
    prevTime = millis();
    }
  
}

void mySend()
{
  long msgID = random(1000,9999);
  char myMsgID[20];
  sprintf(myMsgID,"%ld:30:3",msgID);
  //msgID:time in sec:amount of unit for PSMode
  //Serial.print(sendData);
  LoRa.beginPacket();
  LoRa.print(myMsgID);
  LoRa.endPacket();
  Serial.println("DATA SEND: ");
  Serial.println(myMsgID);

}

void myRecieve()
{
  int packetSize = LoRa.parsePacket();
  if (packetSize)
  {
    // received a packet
    Serial.print("Received'");

    // read packet
    while (LoRa.available())
    {
      Serial.print((char)LoRa.read());
    }

    // print RSSI of packet
    Serial.print("' with RSSI ");
    Serial.println(LoRa.packetRssi());
  }
}
