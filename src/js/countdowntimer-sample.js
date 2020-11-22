export default class CountdownTimer {
  constructor({ selector, targetDate, onTick, elements }) {
    this.intervalId = null;
    this.targetDate = targetDate;
    this.onTick = onTick;
    this.elements = elements;
  }
  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);
      console.log(time);
      this.onTick(time);
    }, 1000);
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}
