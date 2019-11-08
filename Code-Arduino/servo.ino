
#include <Servo.h> 
 
Servo monservo;  // create servo object to control a servo 
                // twelve servo objects can be created on most boards
 
int pos = 0;    // variable to store the servo position 
 
void setup() 
{ 
  monservo.attach(9);  // attaches the servo on pin 9 to the servo object 
} 
 
void loop() 
{ 
  monservo.write(0);  
  delay(1000);  
  monservo.write(70);  
  delay(1000);  
  monservo.write(150);  
  delay(1000);                     +  
  } 
 
