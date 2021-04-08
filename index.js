function addingEventListener() {
const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);

const five = document.querySelector("#test");
five.addEventListener('click', clickAlert)

// const four = document.querySelectorAll("div");
// console.log(four)
}

addingEventListener()
