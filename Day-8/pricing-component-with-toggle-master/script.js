const toggleContainer = document.querySelector('.toggle-bg');
const toggleBtn = document.querySelector('.toggle-button');

const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const value3 = document.querySelector('.value3');

toggleContainer.addEventListener('click', (e) => {
  toggleBtn.classList.toggle('switch');
  if (toggleBtn.classList.contains('switch')) {
    value1.innerHTML = 15.99;
    value2.innerHTML = 24.99;
    value3.innerHTML = 34.99;
  } else {
    value1.innerHTML = 199.99;
    value2.innerHTML = 249.99;
    value3.innerHTML = 399.99;
  }
});
