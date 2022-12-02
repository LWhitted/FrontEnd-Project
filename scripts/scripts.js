async function getCocktailRecipe() {
    const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    const data = await response.json()
    //console.log(data.drinks[0])
    const drinkName = data.drinks[0].strDrink;
    //console.log(drinkName);
    displayDrinkName(drinkName);
}

function displayDrinkName(drink){
    //console.log(drink)
    const drinkHeader = document.getElementById("drink-header");
    //console.log(drinkHeader)
    drinkHeader.innerText = `${drink}`;
}


async function getMealRecipe() {
    const response = await fetch("https://themealdb.com/api/json/v1/1/search.php?s=pasta")
    const data = await response.json()
    console.log(data.meals[0])
    const mealName = data.meals[0].strMeal
    
    displayMealName(mealName);
    displayImage(data.meals[0].strMealThumb);

    let mealIngredients = [];
    let mealMeasurements = [];

    const dataArray = Object.keys(data.meals[0]);
    const ingredients = dataArray.filter(word => word.includes("Ingredient"));
    const measurements = dataArray.filter(word => word.includes("Measure"));

    for (i = 0; i <= ingredients.length; i++){
        if (data.meals[0][ingredients[i]]){
            mealIngredients.push(data.meals[0][ingredients[i]])
            mealMeasurements.push(data.meals[0][measurements[i]])
        }
    }
    displayIngredients(mealMeasurements, mealIngredients);
}

function displayMealName(mealName) {
    const mealHeader = document.getElementById("meal-header");
    mealHeader.innerHTML = `${mealName}`;
}

function displayImage(imgSrc) {
    const imgTag = document.getElementById("meal-img")
    imgTag.src = `${imgSrc}`;
}

function displayIngredients(measurements, ingredients) {
    let bulletHtml = [];
    for (i = 1; i < ingredients.length; i++){
        bulletHtml.push(`<li>` + `${measurements[i]}` + ` ${ingredients[i].toLowerCase() }`+ `</li>`)
    }
    const list = document.getElementById("meal-list")
    list.innerHTML = bulletHtml.join("");
    
}

getMealRecipe();
getCocktailRecipe();

