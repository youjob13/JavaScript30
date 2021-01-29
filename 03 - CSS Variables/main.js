const title = document.getElementById("title");
const inputs = document.querySelectorAll("input");

function changeValues() {
  const suffix = this.dataset.sizing || "";
  title.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((item) => item.addEventListener("input", changeValues));
