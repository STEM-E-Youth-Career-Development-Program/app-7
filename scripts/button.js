const counterBtn = document.getElementById("counter");

let count = 1;
const setButtonCounter = () => {
  counterBtn.innerHTML = `Click Me: ${count}`
  count += 1;
};

counterBtn.addEventListener('click', setButtonCounter);