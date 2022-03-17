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
  } else if(answerThree == 'Ray') {
    alert("my boyfriend's name starts with an R");
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
  } else if(answerFive == 'Buddy') {
    alert('Close, but it's a longer name.');)
  } else {
    alert('Wrong! Hint: Ends with a y.')
  }
}

// When this function is called, it takes the user's answer to the sixth
// question and uses if statements to check whether it's correct.
function submitAnswerSix() {
  // Get answer six's input element
  const answerSixInput = document.getElementById('answer-six-input');
  // Get the number from answer six's input element
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
// When this function is called, it takes the user's answer to the seventh
// question and uses if statements to check whether it's correct.
function submitAnswerSeven() {
  // Get answer seven's input element
  const answerSevenInput = document.getElementById('answer-seven-input');
  // Get the text from answer seven's input element
  const answerSeven = answerSevenInput.value;

  if(answerSeven == 'Iceland') {
    alert("That's right!");
    hide('question-seven');
    show('question-eight');
  } else if(answerSeven == 'Iceland') {
    alert('Close, but my favorite country starts with Ice.');
  } else {
    alert('Wrong! Hint: My favorite country is where my grandmother is from.')
  }
}
// When this function is called, it takes the user's answer to the eighth
// question and uses if statements to check whether it's correct.
function submitAnswerEight() {
  // Get answer eight's input element
  const answerEightInput = document.getElementById('answer-eight-input');
  // Get the text from answer eight's input element
  const answerEight = answerEightInput.value;

  if(answerEight == 'Sour Patch Kids') {
    alert("That's right!");
    hide('question-eight');
    show('question-nine');
  } else if(answerEight == 'Sour Patch Kids') {
    alert(' my favorite candy starts with an S.');
  } else {
    alert('Wrong! Hint: My favorite candy is sour.')
  }
}
// When this function is called, it takes the user's answer to the ninth
// question and uses if statements to check whether it's correct.
function submitAnswerNine() {
  // Get answer nine's input element
  const answerNineInput = document.getElementById('answer-nine-input');
  // Get the number from answer nine's input element
  const answerNine = answerNineInput.value;

  if(answerNine == 2018) {
    alert("That's right!");
    hide('question-nine');
    show('done');
  } else if(answerNine < 2018) {
    alert('The answer is higher.');
  } else {
    alert('The answer is lower.')
  }
}
// When this function is called, it takes the user's answer to the tenth
// question and uses if statements to check whether it's correct.
function submitAnswerTen() {
  // Get answer ten's input element
  const answerTenInput = document.getElementById('answer-ten-input');
  // Get the text from answer ten's input element
  const answerTen = answerTenInput.value;

  if(answerTen == 'Public Relations') {
    alert("That's right!");
    hide('question-ten');
    show('question-ten');
  } else if(answerTen == 'Public Realtions') {
    alert('Close, but my major starts with a P.');
  } else {
    alert('Wrong! Hint: My major falls in the Communications category.')
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
