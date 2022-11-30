async function getMealRecipe() {
    const response = await fetch("https://themealdb.com/api/json/v1/1/search.php?s=pasta")
    const data = await response.json()
    console.log(data.meals[0])
    const mealName = data.meals[0].strMeal
    console.log(mealName)
    
    displayMealName(mealName);
    
}

getMealRecipe()

function displayMealName(mealName) {
    const mealHeader = document.getElementById("meal-header");
    mealHeader.innerHTML = `${mealName}`;
}

