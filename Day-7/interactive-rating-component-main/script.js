const numbers = document.querySelectorAll('.number');
const submitBtn = document.querySelector('.submit');
const screenOne = document.querySelector('.screen-1');
const screenTwo = document.querySelector('.screen-2');

const mainContainer = document.querySelector('.main-container');

// Main Screen

let rating = 0;

function revertStyle() {
  numbers.forEach((number) => {
    number.classList.remove('highlight');
  });
}

function showScreen2() {
  screenTwo.innerHTML = `
  <img src="./images/illustration-thank-you.svg" alt="" />

  <div class="final-rating">
    <div class="rating">You selected ${rating} out of 5</div>
  </div>
  <h1>Thank you!</h1>
  <p>
    We appreciate you taking the time to give a rating. if you ever need
    more support, dont hesitate to get in touch
  </p>
  `;
  mainContainer.append(screenTwo);
}

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    revertStyle();
    number.classList.add('highlight');
    rating = number.innerHTML;
  });
});

submitBtn.addEventListener('click', (e) => {
  submitBtn.classList.toggle('clicked');
  screenOne.classList.add('first-page-display');
  showScreen2();
});

// thank you screen
