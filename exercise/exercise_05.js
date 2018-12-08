// Speed Limit = 70;
// Write a function checkSpeed which takes a speed as a input and return these values based on input
// Return 'OK' if the speed is below 70 or 70
// For every 5km above the speed limit get 1 Point
// Now if the driver gets 12 points "Licsense Suspended"

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('OK');
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log('Licsence Suspended');
  else console.log(`Ponits: ${points}`);
}

checkSpeed(74);
