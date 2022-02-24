// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'blue') {
    alert("That's right!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'blue') {
    alert('Close, but my favorite color starts with a B.');
  } else {
    alert('Wrong! Hint: My favorite color is the same as my eyes.')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 22) {
    alert("That's right!");
    hide('question-two');
    show('done');
  } else if(answerTwo < 22) {
    alert('The answer is higher.');
  } else {
    alert('The answer is lower.')
  }
}
// When this function is called, it takes the user's answer to the third
// question and uses if statements to check whether it's correct.
function submitAnswerThree() {
  // Get answer threes's input element
  const answerThreeInput = document.getElementById('answer-three-input');
  // Get the text from answer three's input element
  const answerThree = answerThreeInput.value;

  if(answerThree == 'Ray') {
    alert("That's right!");
    hide('question-three');
    show('question-four');
  } else if(answerThree == 'john') {
    alert('my boyfriend's name starts with an R.');
  }
}

// When this function is called, it takes the user's answer to the fourth
// question and uses if statements to check whether it's correct.
function submitAnswerFour() {
  // Get answer four's input element
  const answerFourInput = document.getElementById('answer-four-input');
  // Get the number from answer four's input element
  const answerFour = answerFourInput.value;

  if(answerFour == 1999) {
    alert("That's right!");
    hide('question-four');
    show('done');
  } else if(answerfour < 1999) {
    alert('The answer is higher.');
  } else {
    alert('The answer is lower.')
  }
}

// When this function is called, it takes the user's answer to the fifth
// question and uses if statements to check whether it's correct.
function submitAnswerFive() {
  // Get answer five's input element
  const answerFiveInput = document.getElementById('answer-five-input');
  // Get the text from answer fives's input element
  const answerFive = answerFiveInput.value;

  if(answerFive == 'Buddy') {
    alert("That's right!");
    hide('question-five');
    show('question-six');
  } else if(answerFive == 'Bud') {
    alert('Close, but it's a longer name.');
  } else {
    alert('Wrong! Hint: Ends with a y.')
  }
}

// When this function is called, it takes the user's answer to the sixth
// question and uses if statements to check whether it's correct.
function submitAnswerSix() {
  // Get answer six's input element
  const answerSixInput = document.getElementById('answer-six-input');
  // Get the number from answer sixth's input element
  const answerSix = answerSixInput.value;

  if(answerSix == 6) {
    alert("That's right!");
    hide('question-six');
    show('done');
  } else if(answerSix < 6) {
    alert('The answer is higher.');
  } else {
    alert('The answer is lower.')
  }
}

// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}
