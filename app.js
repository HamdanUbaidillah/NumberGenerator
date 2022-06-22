const min = document.querySelector(".min");
const max = document.querySelector(".max");
const output = document.querySelector(".output");
const generate = document.querySelector(".generate");

// generate.addEventListener("click", function () {
//   if (min.value > max.value) {
//     [max.value, min.value] = [min.value, max.value];
//   }
//   let start = new Date().getTime();
//   setInterval(() => {
//     if (new Date().getTime() - start > 500) {
//       clearInterval;
//       return;
//     } else {
//       let range = max.value - min.value;
//       let random = Math.floor(Math.random() * (range + 1)) + parseInt(min.value);
//       output.innerHTML = random;
//     }
//   }, 20);
// });

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
