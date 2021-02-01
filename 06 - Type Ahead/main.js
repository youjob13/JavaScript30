const select = document.getElementById("list-cities");
const input = document.getElementById("input");
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const arrCities = [];

(async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  arrCities.push(...data);
  showCitiesOnScreen.apply(input, null);
})();

function transformNumber(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function filterArr(str, arr) {
  return arr.filter((item) => {
    const regex = new RegExp(str, "gi");
    return item.city.match(regex) || item.state.match(regex);
  });
}

function showCitiesOnScreen() {
  const filteredArr = filterArr(this.value, arrCities);
  const html = filteredArr
    .map((item) => {
      const regex = new RegExp(this.value, "gi");
      const city = item.city.replace(
        regex,
        `<span class='coincidence'>${this.value}</span>`
      );
      const state = item.state.replace(
        regex,
        `<span class='coincidence'>${this.value}</span>`
      );
      const population = transformNumber(item.population);
      return `
        <li class='list-item'>
            <span>${city}, ${state}</span> 
            <span>${population}</span>
        </li>
   `;
    })
    .join("");
  select.innerHTML = html;
}

input.addEventListener("input", showCitiesOnScreen);