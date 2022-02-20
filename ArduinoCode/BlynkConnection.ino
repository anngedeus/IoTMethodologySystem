#define BLYNK_AUTH_TOKEN "N_YA9SXZzdLJGMMfz4rB8Oz5i3al4HE6"


#include <SPI.h>
#include <WiFiNINA.h>
#include <BlynkSimpleWiFiNINA.h>
char auth[] = BLYNK_AUTH_TOKEN;


char ssid[] = "";
char pass[] = "";

BlynkTimer timer;

int pulseDataPin = A0;
int pulseData;

BLYNK_WRITE(V0){
 int pinValue = param.asInt();
 digitalWrite(7, pinValue);
}

//BLYNK_CONNECTED()
//{
//
// Blynk.setProperty(V3, "offImageUrl", "https://static-image.nyc3.cdn.digitaloceanspaces.com/general/fte/congratulations.png");
// Blynk.setProperty(V3, "onImageUrl",  "https://static-image.nyc3.cdn.digitaloceanspaces.com/general/fte/congratulations_pressed.png");
// Blynk.setProperty(V3, "url", "https://docs.blynk.io/en/getting-started/what-do-i-need-to-blynk/how-quickstart-device-was-made");
//}
void myTimerEvent()
{
  pulseData = analogRead(pulseDataPin);
  Blynk.virtualWrite(V1, pulseData);
}

void setup()
{
 SerialUSB.begin(115200);
 Blynk.begin(auth, ssid, pass);
 
 pinMode(7, OUTPUT);
 pinMode(pulseDataPin, INPUT);
 timer.setInterval(200L, myTimerEvent);
}
void loop()
{
 Blynk.run();
 timer.run();
 Serial.println(pulseData);
}