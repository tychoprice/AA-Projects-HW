class Clock {
  constructor() {
    const currentTime = new Date();
    this.hr = currentTime.getHours();
    this.min = currentTime.getMinutes();
    this.sec = currentTime.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    const timeString = `${this.hr}:${this.min}:${this.sec}`;
    console.log(timeString);
  }

  _tick() {
    this.sec += 1;
    if (this.sec === 60) {
      this.sec -= 60;
      this.min += 1;
  } else if (this.min === 60) {
      this.min -= 60;
      this.hr += 1;
  }
    this.printTime();
  }

}

const clock = new Clock();

//addNumbers
const readline = require ('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter a number!", function(input) {
    let num = parseInt(input, 10);
    let currentSum = sum + num;
    console.log(`Current sum: ${currentSum}`);
    addNumbers(currentSum, numsLeft, completionCallback);
  });
} else if (numsLeft === 0) {
      completionCallback(sum);
    }
}
