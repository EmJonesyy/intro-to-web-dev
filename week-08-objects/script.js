// Array of objects representing a favoritefoods list.
// Modify this array to contain your own list.
const foodArray = [
  {food: 'Fettuccine Alfredo', number: 1},
  {food: 'Burgers', number: 2},
  {food: 'Salad', number: 3},
  {food: 'chicken', number: 4},
   {food: 'Candy', number: 5},
    {food: 'Soup', number: 6},
    {food: 'Chocolate', number: 7},
    {food: 'Shrimp', number: 8},
    {food: 'Crab', number: 9},
    {food: 'Tacos', number: 10},
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the food labels.
  // Modify this to sort your data by a different field, or just delete it.
  foodArray.sort((a, b) => compare(a.food, b.food));

  loadTable();
  loadShortestFood();
}

// Adds a food to the array and reloads the page content.
function addNewFood() {
  const newFood = document.getElementById('food-input').value;
  const newFoodNumber = document.getElementById('number-input').value;
  const newFood = {food: newFood, number: newNumber };
  foodArray.push(newFood);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Food'));
  headerRowElement.appendChild(createElement('th', 'Number'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < foodArray.length; i++) {
    const task = foodArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', food.food));
    rowElement.appendChild(createElement('td', food.number));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest food.
function loadShortestFood(){
  // Assume the first food is shortest
  let shortestFood = foodArray[0];

  // Starting with the second food, look for a shorter food
  for (let i = 1; i < foodArray.length; i++) {
    const task = foodArray[i];
    // If this food is shorter than the previous shortest, it's now the shortest
    if(food.number < shortestFood.number) {
      shortestFood = food;
    }
  }
  document.getElementById('shortest-food').innerText = shortestFood.label;
}

// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}
