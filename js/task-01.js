const categoriesList = document.querySelector('#categories');

const categoriesCount = categoriesList.children.length;
console.log(`Number of categories: ${categoriesCount}`);

const categories = categoriesList.querySelectorAll('.item');

categories.forEach(category => {

  const categoryName = category.querySelector('h2').textContent;
  const categoryElementsCount = category.querySelectorAll('ul > li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}`);
});