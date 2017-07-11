Array.prototype.bubbleSort = () => {
  let sorted = true
  this.myEach((num, i) => {
      let temp = this[i];
      if this[i] > this[i + 1] {
        let sorted = false
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
    }
};


class Clock {
  constructor() {
    const currentTime = new Date();

    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();

    this.printTime();

    setInterval(this_tic)
  }
}
