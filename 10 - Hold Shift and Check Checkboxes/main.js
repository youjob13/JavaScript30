const tasks = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && e.target.checked) {
    tasks.forEach((task) => {
      if (task === this || task === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        task.checked = true;
      }
    });
  }

  lastChecked = this;
}

tasks.forEach((task) => task.addEventListener("click", handleCheck));