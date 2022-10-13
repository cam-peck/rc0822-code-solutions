let count = 3;
let IntervID;

function countDown() {
  if (!IntervID) {
    IntervID = setInterval(decrementNum, 1000);
  }
}

function decrementNum() {
  if (count > 0) {
    console.log(count);
    count -= 1;
  } else {
    blastOff();
  }
}

function blastOff() {
  console.log('Blast off!');
  clearInterval(IntervID);
  IntervID = null;
}

countDown();
