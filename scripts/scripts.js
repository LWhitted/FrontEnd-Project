

async function getCocktailRecipe() {
    const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    const data = await response.json()
    console.log(data.drinks[0])
    let drinkName = data.drinks[0].strDrink;

    // IMAGES OF DRINKS
    let drinkImage = data.drinks[0].strDrinkThumb

    console.log("cheese",drinkImage)
    

    //STRING INGREDIENTS OF DRINKS
    const array0fIngredients = Object.keys(data.drinks[0]) //grabs all the properties
    console.log("cats are cool",array0fIngredients)
    const arrayIngredients = array0fIngredients.filter(word => word.includes("Ingredient"))
        let drinkIngredients = [];//array to push ingredients to
        for (i=0; i <= arrayIngredients.length; i++){
        if (data.drinks[0][arrayIngredients[i]]) {
            drinkIngredients.push(data.drinks[0][arrayIngredients[i]])
        }
        }

   console.log("final list",drinkIngredients)


   //STRING INSTRUCTIONS/STEPS FOR THE ALCHOHOL
    const arrayofSteps = Object.keys(data.drinks[0]) //grabs all the properties
    const arraySteps = arrayofSteps.filter(word => word.includes("Instructions"))
        let alcoholSteps = [];//array to push ingredients to
        for (i=0; i <= arraySteps.length; i++){
        if (data.drinks[0][arraySteps[i]]) {
            alcoholSteps.push(data.drinks[0][arraySteps[i]])
        }
        }

    //STRING MEASURMENTS FOR THE INGREDIENTS
    const arrayofMeasures = Object.keys(data.drinks[0]) //grabs all the properties
    const arrayMeasures = arrayofMeasures.filter(word => word.includes("Measure"))
    let measureSteps = [];//array to push ingredients to
        for (i=0; i <= arrayMeasures.length; i++){
        if (data.drinks[0][arrayMeasures[i]]) {
            measureSteps.push(data.drinks[0][arrayMeasures[i]])
        }
        }

   

    console.log("string of measurements", measureSteps)
    console.log("string of steps", alcoholSteps) 

displayDrinkName(drinkName);
displayDrinkSteps(alcoholSteps);
displayDrinkRecipe(drinkIngredients, measureSteps);
displayDrinkImages(drinkImage)
  
    
}
//WHERE GETCOCKTAIL RECIPE FUNCTION ENDS//

  

 
  ///DISPLAYING INGREDIENTS AND MEASUREMENTS FUNCTION///
function displayDrinkRecipe(drinkIngredients, measureSteps) {
    const drinklistElement = document.getElementById("drink-list")
    let listArray = [];
    for (i=0; i < drinkIngredients.length; i++) {
       listArray.push(`
       <li>${measureSteps[i]} ${drinkIngredients[i]}</li>`)
    }
    drinklistElement.innerHTML = listArray.join('')
}


function displayMeasurements(measureSteps) {
    const measurementList = document.getElementById("measurements")
    let listArray = [];
        for (i=0; i < measureSteps.length; i++) {
        listArray.push(`${measureSteps[i]} :`)
        }
    measurementList.innerHTML = listArray.join('')
}




//DISPLAYING INSTRUCTIONS HERE
function displayDrinkSteps(alcoholSteps) {
    const drinkstepsElement = document.getElementById("drink-instructions")
    let getInstructions = alcoholSteps[0].split(".")
    let listArray = [];
        for (i=0; i < getInstructions.length; i++) {
            if (getInstructions[i]) {
        listArray.push (`<li>${getInstructions[i]}</li>`)
        console.log("we are in the loop", getInstructions[i])
        }} 
    drinkstepsElement.innerHTML = listArray.join("")
}

//DISPLAYING DRINK NAME
function displayDrinkName(drink){
    console.log(drink)
    const drinkHeader = document.getElementById("drink-header");
    drinkHeader.innerText = `${drink}`;
}

//DISPLAYING DRINK IMAGE 

function displayDrinkImages(drinkImage) {
    const imgTag = document.getElementById("drink-img")
    imgTag.src = `${drinkImage}`
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