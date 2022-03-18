
// When this function is called, it takes the values from the inputs and adds
// them to the outputs.
function fillOutputs() {

  // Get the adjective input element
  const adjectiveOneInput = document.getElementById('adjective-one-input');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneInput.value;

  // Get the adjective output element
  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneOutput.value;
  
  // Get the adjective input element
  const adjectiveTwoInput = document.getElementById('adjective-two-input');
  // Get the text from the input element
  const adjectiveTwo = adjectiveTwoInput.value;

  // Get the adjective output element
  const adjectiveTwoOutput = document.getElementById('adjective-two-output');
  // Get the text from the input element
  const adjectiveTwoOutput.innerText= adjectiveTwo;
  
  // Get the adjective input element
  const adjectiveThreeInput = document.getElementById('adjective-three-input');
  // Get the text from the input element
  const adjectiveThree = adjectiveThreeInput.value;

  // Get the adjective output element
  const adjectiveThreeOutput = document.getElementById('adjective-three-output');
  // Get the text from the input element
  const adjectiveThree = adjectiveThreeOutput.value;
  
    // Get the noun input element
  const nounOneInput = document.getElementById('noun-one-input');
  // Get the text from the input element
  const nounOne = nounOneInput.value;
  
 // Get the noun output element
  const nounOneOutput = document.getElementById('noun-one-output');
  // Set the text of the input element
  nounOneOutput.innerText = nounOne;
  
    // Get the verb input element
  const verbOneInput = document.getElementById('verb-one-input');
  // Get the text from the input element
  const verbOne = verbOneInput.value;
  
    // Get the verb output element
  const verbOneOutput = document.getElementById('verb-one-output');
  // Get the text from the input element
  const verbOneOutput.innerText = verbOne;

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
     }
