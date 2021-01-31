const gallery = document.querySelectorAll(".gallery-item");

function toggleActive() {
  gallery.forEach((item) => {
    if (item === this) {
      this.classList.toggle("open-item");
      this.classList.toggle("open");
    } else {
      item.classList.remove("open-item");
      item.classList.remove("open");
    }
  });
}

gallery.forEach((item) => item.addEventListener("click", toggleActive));
