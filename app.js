const searchFood = () =>{
    const searchArea = document.getElementById('search-area');
    const searchText = searchArea.value;
    // console.log(searchText);
    searchArea.value = "";
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res =>res.json())
        .then(data => mealResult((data.meals)));
    // console.log(url);
}

const mealResult = meals =>{
    console.log(meals);
    const searchResult = document.getElementById('search-result');

    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('row');
        div.innerHTML =     `
        <div class="card" style="width: 18rem;">
                <img src="${meal.strMealThumb}">
            <div class="card-body">
                <h3 class="card-title">${meal.strArea}</h3>
                <h5>${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,100)} <br><a href="#">Learn More</a></p>
                <button>BUY NOW</button>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });

}
