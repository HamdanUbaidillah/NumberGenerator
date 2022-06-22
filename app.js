const min = document.querySelector(".min");
const max = document.querySelector(".max");
const output = document.querySelector(".output");
const generate = document.querySelector(".generate");

generate.addEventListener("click", getRandom);

function getRandom() {
  let start = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - start > 500) {
      clearInterval;
      return;
    } else {
      randomNum = Math.floor(Math.random() * parseInt(max.value)) + 1;
      if (randomNum >= parseInt(min.value)) {
        output.innerHTML = randomNum;
      }
    }
  }, 20);
}
