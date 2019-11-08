var five = require("johnny-five");
var board = new five.Board();
 
board.on("ready", function() {
  // Create an Led on pin 9
  var servo = new five.Led(9);
  // turn every second
  servo.write(0);  
  delay(1000);  
  servo.write(70);  
  delay(1000);  
  servo.write(150);  
  delay(1000)
});