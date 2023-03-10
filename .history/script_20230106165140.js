const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meals-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

//event listeners
searchBtn.addEventListener('click', getMealList);

//get meal list that matches the ingerdients
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}")
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals) {
            data.meals.forEach(meal => {
                html += ` <div class = "meal-item" data-id="${meal.idMeal}">
                <div class = "meal-img">
                <img src = "${meal.strMealThumb}" alt = "food">
              </div>
              <div class = "meal-name">
                <h3>${meal.strMeal}</h3>
                <a href = "#" class = "recipe-btn">Get Recipe</a>
              </div>
            </div> `
               
            })
        }
        mealList.innerHTML = html;
    })
}