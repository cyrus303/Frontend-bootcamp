const numbers = document.querySelectorAll('.number');
const submitBtn = document.querySelector('.submit');

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    revertStyle();
    number.classList.toggle('highlight');
  });
});

function revertStyle() {
  numbers.forEach((number) => {
    number.classList.remove('highlight');
  });
}

submitBtn.addEventListener('click', (e) => {
  submitBtn.classList.toggle('clicked');
});
