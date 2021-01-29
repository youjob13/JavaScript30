const removeActive = (e) => {
  if (e.propertyName !== "transform") return;
  console.log(e.target);
  e.target.classList.remove("playing");
};

const startPlay = (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((item) => item.addEventListener("transitionend", removeActive));

window.addEventListener("keydown", startPlay);
