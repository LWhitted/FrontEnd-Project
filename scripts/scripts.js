async function getCocktailRecipe(){
    const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    const data = await response.json()
    console.log(data.drinks[0])
    const drinkName = data.drinks[0].strDrink;
    console.log(drinkName);
    displayDrinkName(drinkName);
}

function displayDrinkName(drink){
    console.log(drink)
    const drinkHeader = document.getElementById("drink-header");
    console.log(drinkHeader)
    drinkHeader.innerText = `${drink}`;
}

async function getMealRecipe() {
    const response = await fetch("https://themealdb.com/api/json/v1/1/search.php?s=pasta")
    const data = await response.json()
    console.log(data.meals[0])
    const mealName = data.meals[0].strMeal
    console.log(mealName)
    
    displayMealName(mealName);
    
}

function displayMealName(mealName) {
    const mealHeader = document.getElementById("meal-header");
    mealHeader.innerHTML = `${mealName}`;
}

getMealRecipe();
getCocktailRecipe();