// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `General Kenobi. Years ago you served my father in the Clone Wars.
Now he begs you to help him in his struggle against the Empire. I regret that I am unable to present my fathers request to you in person
but my ship has fallen under attack and I'm afraid my mission to bring you to Alderaan has failed. 
I have placed information vital to the survival of the Rebellion into the memory systems of this R2 unit.
My father will know how to retrieve it. You must see this droid safely delivered to him on Alderaan. 
This is our most desperate hour. Help me Obi-Wan Kenobi. Youre my only hope.`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
 // Displays words that have less than 4 characters.
function displayshortWords() {
  const shortWordsElement = document.getElementById('short-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has less than 4 characters, display it in the page.
    if(word.length 4 < ) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement); 
    }
  }
    
}

// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();

  // TODO: Call your functions here!
}
