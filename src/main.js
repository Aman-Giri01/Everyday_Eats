// ------ mode change------------
const mode=document.querySelector('#mode');
const icon=mode.querySelector('i');
const item=document.querySelector('.item');
mode.addEventListener('click',()=>{
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    icon.classList.replace('fa-lightbulb','fa-moon');
  }
  else{
    icon.classList.replace('fa-moon','fa-lightbulb');
  }

});
// ----------- end mode change -------------------

const container=document.querySelector(".container");
const template=document.querySelector("#template");


const fetchRecipie=()=>{
  let recipe=document.getElementById('search').value.trim();
  if(recipe === ""){
    container.innerHTML=`<p class='name'>Please enter recipe</p>`
    return;
  }
  let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`;
  container.innerHTML=`<p class="name">Fetching recipe ....</p>`;
  fetch(url)
  .then((res)=>{
    return res.json()})
  .then((data)=>{
    if(data.meals)
      {
        displayRecipes(data.meals);
        document.getElementById('search').value = "";
      }
      else
      {
        container.innerHTML=`<p class="name">Recipie not found 😒.</p>`
        
      }
  })
  .catch(error=>console.error("Unable to Fetch data..",error));
  }

  const displayRecipes=(recipe)=>
    {
      container.innerHTML="";
      item.innerHTML=`<span class="btnn"> Found ${(recipe).length} items</span>`;
      recipe.forEach((rec)=>{
        const {strMealThumb,strMeal,strArea,strYoutube,strIngredient}=rec;
        console.log(strIngredient);
        const clone=document.importNode(template.content,true);
        clone.querySelector(".projectImage").src=strMealThumb;
        clone.querySelector(".projectImage").alt=strMeal;
        clone.querySelector(".name").textContent=strMeal;
        clone.querySelector(".cuisine").textContent=`Cuisine: ${strArea}`;
        clone.querySelector(".source-link").href=strYoutube || "#";
        clone.querySelector(".visit-link").addEventListener("click", () => {
          showRecipeDetails(rec);
        });

        container.append(clone);

      });

    }

    // -------- Incredients ---------------------------

    const showRecipeDetails = (rec) => {
      const { strMeal,strInstructions } = rec;
  
      let modal = document.createElement("div");
      modal.classList.add("recipe-modal");
  
      let ingredientsList = "";
      for (let i = 1; i <= 20; i++) {
          let ingredient = rec[`strIngredient${i}`];
          let measure = rec[`strMeasure${i}`];
  
          if (ingredient && ingredient.trim() !== "") {
              ingredientsList += `<li>${measure} ${ingredient}</li>`;
          }
      }
  
      modal.innerHTML = `
          <div class="modal-content">
              <span class="close-btn"><i class="fa-solid fa-circle-xmark"></i></span>
              <h2 class="name">${strMeal}</h2>
              <h3 class="name">Ingredients & Measurements:</h3>
              <ul class="cuisine">${ingredientsList}</ul>
              <h3 class="name">Instructions:</h3>
              <p class="cuisine">${strInstructions}</p>
          </div>
      `;
  
      document.body.appendChild(modal);
  
      modal.querySelector(".close-btn").addEventListener("click", () => {
          modal.remove();
      });
  };

    // ---------End Ingredients ----------------------

  const home=document.getElementById('search-btn').addEventListener('click',fetchRecipie);
  if(!home){
    container.innerHTML=`<div class="img"><img src="/image/home.png" alt="homeimage" class="projectImage"></div>`;

  }
 


