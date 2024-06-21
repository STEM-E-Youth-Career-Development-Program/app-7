const counterBtn = document.getElementById("counter")

let counter = 0
const setCounter = (count) => {
  counter = count
  counterBtn.innerHTML = `Click Me: ${counter}`
}
counterBtn.addEventListener('click', () => setCounter(counter + 1))
setCounter(0)