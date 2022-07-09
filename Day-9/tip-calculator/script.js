const billInput = document.getElementById('bill-input');
// const customPercentageInput = document.getElementById(
//   'custom-percentage-input'
// );
const peopleCount = document.getElementById('people-count');
const tipValue = document.getElementById('tip-value');
const totalValue = document.getElementById('total-value');

const calculateBtn = document.getElementById('calculate');

const grid = document.querySelectorAll('.grid-container');

const buttons = document.querySelectorAll('.btn');

const resetBtn = document.querySelector('#reset');

let bill = 0;
let percentage = 0;
let peopleCt = 0;
let total = 0;
let tipPP = 0;

clearValues();

billInput.addEventListener('input', (e) => {
  bill = e.target.value;
  //   console.log(bill);
  // print();
});

grid.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
      percentage = e.target.textContent.slice(0, -1);

      revertStyle();
      e.target.classList.toggle('active');
    }
  });
});

peopleCount.addEventListener('input', (e) => {
  peopleCt = e.target.value;
});

resetBtn.addEventListener('click', clearValues);

function print() {
  console.log(`total bill: ${bill}
    Tip Percentage: ${percentage}
    People Count: ${peopleCt}
    `);
}

calculateBtn.addEventListener('click', totalTip);

function totalTip() {
  total = bill * (percentage / 100);
  totalValue.innerHTML = `$${total}`;

  let tipPP = total / peopleCount.value;
  tipValue.innerHTML = `$${tipPP}`;

  console.log(customPercentageInput.value);
}

function clearValues() {
  peopleCount.value = '';
  billInput.value = '';
  //   customPercentageInput.value = '';
  totalValue.innerHTML = `$${0}`;
  tipValue.innerHTML = `$${0}`;
  revertStyle();
}

function revertStyle() {
  buttons.forEach((button) => {
    // console.log(button);
    button.classList.remove('active');
  });
}

// console.log(buttons);
