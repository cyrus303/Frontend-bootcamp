const keypadContainer = document.querySelectorAll('button');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');

const clear = document.getElementById('ac');
const del = document.getElementById('del');
const equal = document.getElementById('eq');

keypadContainer.forEach((btn) => {
  //   console.log(btn);
  if (btn.id === 'ac' || btn.id === 'del' || btn.id === 'eq') {
    return;
  } else {
    btn.addEventListener('click', (event) => {
      let arr = currentOperand.innerHTML.split('');
      arr = arr.pop();
      if (arr === '+' || arr === '-' || arr === '*' || arr === '÷') {
        let str = currentOperand.innerHTML;
        previousOperand.innerHTML = str;
        currentOperand.innerHTML = event.target.innerText;
      } else {
        currentOperand.innerHTML += event.target.innerText;
      }
    });
  }
});

clear.addEventListener('click', (e) => {
  currentOperand.innerHTML = '';
  previousOperand.innerHTML = '';
});

del.addEventListener('click', (e) => {
  let arr = currentOperand.innerHTML.split('');
  arr = arr.slice(0, -1);
  str1 = arr.join('');
  currentOperand.innerHTML = str1;
});

equal.addEventListener('click', (e) => {
  let str = currentOperand.innerHTML;
  previousOperand.innerHTML = str;
  currentOperand.innerHTML = '';

  let prev = previousOperand.innerHTML;
  let curr = currentOperand.innerHTML;
  str2 = prev.split('');
  str2 = str2.slice(0, -1);
  str2 = str2.join('');
  console.log(str2, curr);

  let arr = previousOperand.innerHTML.split('');
  arr = arr.pop();

  switch (arr) {
    case '+':
      value = prev + curr;
      break;

    default:
      break;
  }
});
