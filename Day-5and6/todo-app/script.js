const inputBtn = document.getElementById('input');
const addBtn = document.getElementById('btnAdd');
const doneBtn = document.getElementById('btnDone');
const notesContainer = document.querySelector('.notes-container');

const inputText = document.getElementById('input');

const errEl = document.querySelector('.error');
// *Functions

function addNote() {
  const text = inputText.value;
  if (text) {
    errEl.style.display = 'none';
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
  
    <input
    class="toggle-disable"
    id="userText"
    type="text"
    placeholder="Add Task..."
    name="inputText"
    value='${text}'/>
    <button id="btnEdit">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button id="btnDone"><i class="fa-solid fa-check"></i></button>
    <button id="btnDel"><i class="fa-solid fa-trash-can"></i></button>
    `;
    notesContainer.prepend(noteEl);
    inputText.value = '';
  } else {
    errEl.style.display = 'block';
  }
}

// function strikeText(e) {
//   console.log(e);
// }

// *Event Listeners
addBtn.addEventListener('click', addNote);

// deleting a note
notesContainer.addEventListener('click', (e) => {
  const ele = e.target;
  const button = ele.parentElement;
  if (button.id === 'btnDel') {
    button.parentElement.remove();
  }
});

// editing a note

notesContainer.addEventListener('click', (e) => {
  const parentEle = e.target.parentElement;
  const prevSibling = parentEle.previousElementSibling;
  if (prevSibling.id === 'userText') {
    // console.log(prevSibling);
    prevSibling.classList.toggle('toggle-disable');
    if (prevSibling.classList.contains('toggle-disable')) {
      prevSibling.style.backgroundColor = 'rgba(245, 245, 245, 0.514)';
    } else {
      prevSibling.style.backgroundColor = 'white';
    }
  }
});

// enter key event

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNote();
  }
});

notesContainer.addEventListener('click', (e) => {
  const parentEle = e.target.parentElement;
  //   const text = parentEle.parentElement.childNodes[1].value;
  const text = parentEle.parentElement.childNodes[1];
  text.classList.toggle('strikeText');
  if (parentEle.id === 'btnDone') {
    if (text.classList.contains('strikeText')) {
      text.style.textDecoration = 'line-through';
      text.style.color = 'grey';
    } else {
      text.style.textDecoration = 'none';
      text.style.color = 'black';
    }
  }
});
