document.addEventListener('DOMContentLoaded', function () {
    getMealRecipe();
    getCocktailRecipe();
});



//MEAL RECIPE FUNCTIONS

async function getMealRecipe() {
    const keyword = localStorage.getItem('searchTerm');
    
    const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    const data = await response.json()
    console.log(data.meals[0].strYoutube)
    let mealIngredients = [];
    let mealMeasurements = [];
    const dataArray = Object.keys(data.meals[0]);
    const ingredients = dataArray.filter(word => word.includes("Ingredient"));
    const measurements = dataArray.filter(word => word.includes("Measure"));

    for (i = 0; i <= ingredients.length; i++) {
        if (data.meals[0][ingredients[i]]) {
            mealIngredients.push(data.meals[0][ingredients[i]])
            mealMeasurements.push(data.meals[0][measurements[i]])
        }
    }

    displayMealName(data.meals[0].strMeal);
    displayImage(data.meals[0].strMealThumb);
    displayIngredients(mealMeasurements, mealIngredients);
    displayInstructions(data.meals[0].strInstructions);
    displayVideo(data.meals[0].strYoutube)
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
    for (i = 1; i < ingredients.length; i++) {
        bulletHtml.push(`<li>` + `${measurements[i]}` + ` ${ingredients[i].toLowerCase()}` + `</li>`)
    }
    const list = document.getElementById("meal-list")
    list.innerHTML = bulletHtml.join("");

}

function displayInstructions(instructions) {
    const list = instructions.split(/(?=[A-Z])/);
    let listHtml = [];
    for (i = 1; i < list.length; i++) {
        listHtml.push(`<li>` + `${list[i]}` + `</li>`)
    }
    const listContainer = document.getElementById("meal-list-instructions");
    listContainer.innerHTML = listHtml.join("")
}

//the api gives us a watch link not an embed link so Ill need to 
//extract the youtube id from the end of the link and change it to 
//an embed link.

// function displayVideo(video){
//     console.log(video)
//     const videoTag = document.getElementById("recipe-video");
//     videoTag.src = `${video}`;
// }


async function getCocktailRecipe() {
    const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    const data = await response.json()

    let drinkName = data.drinks[0].strDrink;

    // IMAGES OF DRINKS
    let drinkImage = data.drinks[0].strDrinkThumb

    //STRING INGREDIENTS OF DRINKS
    const array0fIngredients = Object.keys(data.drinks[0]) //grabs all the properties

    const arrayIngredients = array0fIngredients.filter(word => word.includes("Ingredient"))
        let drinkIngredients = [];//array to push ingredients to
        for (i=0; i <= arrayIngredients.length; i++){
        if (data.drinks[0][arrayIngredients[i]]) {
            drinkIngredients.push(data.drinks[0][arrayIngredients[i]])
        }
        }

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
        }} 
    drinkstepsElement.innerHTML = listArray.join("")
}

//DISPLAYING DRINK NAME
function displayDrinkName(drink){
    const drinkHeader = document.getElementById("drink-header");
    drinkHeader.innerText = `${drink}`;
}

//DISPLAYING DRINK IMAGE 

function displayDrinkImages(drinkImage) {
    const imgTag = document.getElementById("drink-img")
    imgTag.src = `${drinkImage}`
}
