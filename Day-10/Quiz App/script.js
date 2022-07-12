const quizData = [
  {
    question: 'Javascript is an _______ language?',
    a: 'Object-Oriented',
    b: 'Object-Based',
    c: 'Procedural',
    d: 'None of the above',
    correct: 'a',
  },
  {
    question:
      ' Which of the follwing keywords is used to defind a variable in Javascript ',
    a: 'var',
    b: 'let',
    c: 'Both A and B',
    d: 'Const',
    correct: 'c',
  },
  {
    question:
      'Which of the following methods is used to access HTML elements using Javascript?',
    a: 'getElementbyId()',
    b: 'getElementByClassName()',
    c: 'document.querySelector()',
    d: 'All of the above',
    correct: 'd',
  },
  {
    question:
      'What keyword is used to check whether a given property is valid or not ',
    a: 'in',
    b: 'is in',
    c: 'exists',
    d: 'lies',
    correct: 'a',
  },
  {
    question:
      'Which function is used to serialize an object into a JSON string in Javascript?',
    a: 'stringify()',
    b: 'parse()',
    c: 'convert()',
    d: 'None of the above',
    correct: 'a',
  },
];

const startQuizBtn = document.getElementById('start-quiz');
const firstPage = document.querySelector('.first-page');
const quizContainer = document.querySelector('.quiz-container');
const ticks = document.querySelector('.ticks');

const quiz = document.getElementById('quiz');
const radioEle = document.getElementsByName('answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.querySelector('#submit');

const leaderboardBtn = document.getElementById('leaderboard-submit');
const leadboard = document.getElementById('leaderboard');
const mainContainer = document.querySelector('.main-container');

let currentQuiz = 0;
let score = 0;
let timeleft = 50;
var downloadTimer;

uncheckAnswers();
loadQuiz();

function loadQuiz() {
  if (timeleft > 0) {
    var currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
  } else {
    ticks.innerHTML = '';
    quiz.innerHTML = `<h1>Time Up!!!</h1> 
          Your final score is ${timeleft}
          
            <button onclick='location.reload()'>Reload</button>`;
  }
}

function selectedValue() {
  for (i = 0; i < radioEle.length; i++) {
    if (radioEle[i].checked) {
      return radioEle[i].id;
    }
  }
  return undefined;
}

function uncheckAnswers() {
  radioEle.forEach((answer) => {
    answer.checked = false;
  });
}

startQuizBtn.addEventListener('click', (e) => {
  firstPage.classList.add('hide');
  quizContainer.classList.remove('hide');
  timer();
});

submitBtn.addEventListener('click', () => {
  //check to see the selected answer
  const ans = selectedValue();

  if (timeleft > 0) {
    if (ans && ans === quizData[currentQuiz].correct) {
      score++;
      const ele = document.createElement('span');
      ele.innerHTML = `
        <i class="fas fa-check correct"></i>
        `;
      ticks.append(ele);
      timeleft += 10;
    } else if (ans) {
      const ele = document.createElement('span');
      ele.innerHTML = `
        <i class="fa-solid fa-x wrong"></i>
        `;
      ticks.append(ele);
      timeleft -= 10;
    }
    if (ans) {
      if (currentQuiz < quizData.length - 1) {
        currentQuiz++;
        uncheckAnswers();
        loadQuiz();
      } else {
        // TODO: show results once the quiz is completed
        ticks.innerHTML = '';
        document.getElementById('countdown').innerHTML = 'Finished';
        clearInterval(downloadTimer);
        score = timeleft;
        quiz.innerHTML = `<h1>All done!</h1> 
          Your final score is ${timeleft}
          <p>Enter your initials to the leaderboard <input type="text" id="initials"></p>
          <button id="leaderboard-submit">Submit</button> 
            `;
      }
    }
  }
});

// timer

function timer() {
  downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      endquiz();
      document.getElementById('countdown').innerHTML = 'Finished';
    } else {
      document.getElementById('countdown').innerHTML =
        timeleft + ' seconds remaining';
    }
    timeleft -= 1;
  }, 1000);
}

function endquiz() {
  quiz.innerHTML = `<h1>Time Up</h1> 
          Your final score is 0
            <button onclick='location.reload()'>Reload</button>`;
}

// leaderboard

function leaderboard(e) {}

let rootElement = document.querySelector('#quiz');
rootElement.addEventListener(
  'click',
  (event) => {
    if (event.target.id === 'leaderboard-submit') {
      const initials = document.getElementById('initials');
      let name = initials.value;
      let currentScore = score;
      let obj = {
        [name]: currentScore,
      };

      var user = JSON.parse(localStorage.getItem('leaderboard')) || [];
      user.push(obj);
      localStorage.setItem('leaderboard', JSON.stringify(user));
      displayLeaderBoard();
      //   quiz.innerHTML = `<h1> Your score</h1>
      //     <ul>
      //       <li>${initials.value}: ${score}</li>
      //     <ul>
      //     <button onclick='location.reload()'>Reload</button>`;
    }
  },
  true
);

leadboard.addEventListener('click', displayLeaderBoard);

function displayLeaderBoard(e) {
  var users = JSON.parse(localStorage.getItem('leaderboard')) || [];
  mainContainer.innerHTML = `<h1> Highscores</h1> `;
  users.forEach((user) => {
    const element = document.createElement('p');
    element.innerHTML = `${Object.keys(user)} - ${Object.values(user)}`;
    mainContainer.append(element);
  });
  var btn = document.createElement('span');
  btn.innerHTML = `<button onclick='location.reload()'>Back</button>`;
  mainContainer.append(btn);
}

// element.innerHTML = `${Object.keys(user)}:${Object.values(
//     user)`
