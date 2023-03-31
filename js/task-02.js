const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');
const ingredientElements = [];

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ingredientElements.push(li);
});

ingredientList.append(...ingredientElements);


// const ingredientsList = document.querySelector('#ingredients');

// ingredients.forEach(ingredient => {
//   const li = document.createElement('li');

//   li.textContent = ingredient;

//   li.classList.add('item');

//   ingredientsList.append(li);
// });


