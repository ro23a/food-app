const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meals-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

//event listeners
searchBtn.addEventListener('click', getMealList);

//get meal list that matches the ingerdients
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    console.log(searchInputTxt)
}