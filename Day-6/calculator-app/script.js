const display = document.querySelector('.current-operand');
// const keypad = document.querySelectorAll('.keypad-container');
const buttons = Array.from(document.getElementsByClassName('button'));
const currentOperand = document.querySelector('.current-operand');

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.innerHTML);
    switch (e.target.innerHTML) {
      case 'AC':
        display.innerHTML = '';
        break;
      case 'DEL':
        if (display.innerHTML) {
          display.innerHTML = display.innerHTML.slice(0, -1);
        }
        break;
      case '=':
        try {
          display.innerHTML = eval(display.innerHTML);
        } catch (error) {
          display.innerHTML = 'ERROR';
        }
        break;
      default:
        display.innerHTML += e.target.innerHTML;
    }
  });
});
// const clear = document.getElementById('ac');
// const del = document.getElementById('del');

// clear.addEventListener('click', (e) => {
//   currentOperand.innerHTML = '';
// });

// del.addEventListener('click', (e) => {
//   let arr = currentOperand.innerHTML.split('');
//   arr = arr.slice(0, -1);
//   str1 = arr.join('');
//   currentOperand.innerHTML = str1;
// });

// keypad.forEach((btn) => {
//   btn.addEventListener('click', (event) => {
//     console.log(event.target.innerHTML);
//   });
// });
