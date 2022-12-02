

async function getCocktailRecipe(){
    const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    const data = await response.json()
    console.log(data.drinks[0])
    let drinkName = data.drinks[0].strDrink;
    
    let drinkRecipe = drinkIngredients

    
    console.log("dogs are cool",drinkRecipe);

    displayDrinkName(drinkName);
    displayDrinkRecipes(drinkIngredients)

    // console.log("what's going on",Object.keys(data.drinks[0].strDrink))

    const array0fIngredients = Object.keys(data.drinks[0])
    const arrayIngredients = array0fIngredients.filter(word => word.includes("Ingredient"))
    console.log("wow",arrayIngredients);

    for (i=0; i <= arrayIngredients.length; i++){
       if (data.drinks[0][arrayIngredients[i]]) {
        drinkIngredients.push(data.drinks[0][arrayIngredients[i]])
       }
    }
   console.log("final list",drinkIngredients)

  
   function displayDrinkRecipes(recipe) {
    console.log(recipe)
    // const drinkList = document.getElementById("drink-list")
    // let innerHTML = [];

    // for (i=0; i < drinkIngredients.length; i++) {
    //     innerHTML.push(`<li class="list-group-item">${recipe}</li>`)  
       
    // }
    //  console.log(innerHTML)
}
}
 



function displayDrinkName(drink){
    console.log(drink)
    const drinkHeader = document.getElementById("drink-header");
  
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