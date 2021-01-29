const secHand = document.getElementById("sec");
const minHand = document.getElementById("min");
const hourHand = document.getElementById("hour");

const setTime = () => {
  const sec = new Date().getSeconds();
  const secDegrees = (sec / 60) * 360 + 90;

  const min = new Date().getMinutes();
  const minDegrees = (min / 60) * 360 + 90;

  const hour = new Date().getHours();
  const hourDegrees = (hour / 12) * 360 + 90;

  if (sec === 0) secHand.style.transition = "0s";
  else secHand.style.transition = "0.05s";

  secHand.style.transform = `rotate(${secDegrees}deg)`;

  minHand.style.transform = `rotate(${minDegrees}deg)`;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setTime, 1000);
