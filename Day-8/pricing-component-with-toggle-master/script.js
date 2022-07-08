const toggleContainer = document.querySelector('.toggle-bg');
const toggleBtn = document.querySelector('.toggle-button');

const price = document.querySelector('#price');

toggleContainer.addEventListener('click', (e) => {
  toggleBtn.classList.toggle('switch');

  if (toggleBtn.classList.contains('switch')) {
    console.log(price.innerHTML);
  }
});
