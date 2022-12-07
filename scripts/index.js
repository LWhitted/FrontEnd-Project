//Event listener on form submit saves search term in local storage
const form = document.getElementById("form")
const searchTerm = document.getElementById("search-result")

document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', function (e) {
        localStorage.setItem('searchTerm', searchTerm.value)
        window.open("recipe.html")
    })
    
});