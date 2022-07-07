const ratingContainer = document.getElementById('rating-container');

ratingContainer.addEventListener('click', (e) => {
  if (e.target.className === 'number') {
    console.log(e.target.classList);
    e.target.classList.toggle('highlight');
  }
});
