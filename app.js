const min = document.querySelector(".min");
const max = document.querySelector(".max");
const output = document.querySelector(".output");
const generate = document.querySelector(".generate");

generate.addEventListener("click", genNumber);

function genNumber() {
  if (min.value == "" && max.value == "") {
    output.innerHTML = "0";
  } else if (min.value > max.value) {
    [max.value, min.value] = [min.value, max.value];
  } else {
    let start = new Date().getTime();
    setInterval(() => {
      if (new Date().getTime() - start > 500) {
        clearInterval;
        return;
      } else {
        let range = max.value - min.value;
        let random = Math.floor(Math.random() * (range + 1)) + parseInt(min.value);
        output.innerHTML = random;
      }
    }, 20);
  }
}
