const {Board, Servo} = require("johnny-five");
const board = new Board();

board.on("ready", () => {
//   const servo = new Servo(9);

  
  // Servo alternate constructor with options

  var servo = new Servo({
    id: "MyServo",     // User defined id
    pin: 9,           // Which pin is it attached to?
    type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
    range: [0,180],    // Default: 0-180
    fps: 100,          // Used to calculate rate of movement between positions
    invert: false,     // Invert all specified positions
    startAt: 90,       // Immediately move to a degree
    center: true,      // overrides startAt if true and moves the servo to the center of the range
  });
  servo.sweep();
});
