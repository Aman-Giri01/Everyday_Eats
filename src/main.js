// ------ mode change------------
const mode=document.querySelector('#mode');
const icon=mode.querySelector('i');
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
  console.log(recipe);
  if(recipe === ""){
    container.innerHTML=`<p class='name'>Please enter recipe</p>`
    return;
  }
  let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`;
  container.innerHTML=`<p>Fetching recipe ....</p>`;
  fetch(url)
  .then((res)=>{
    return res.json()})
  .then((data)=>{
    if(data.meals)
      {
        displayRecipes(data.meals);
        
        console.log(data.meals);
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
      recipe.forEach((rec)=>{
        const {strCategory,strMealThumb,strMeal,strArea,strYoutube}=rec;

        const clone=document.importNode(template.content,true);
        clone.querySelector(".projectImage").src=strMealThumb;
        clone.querySelector(".projectImage").alt=strMeal;
        clone.querySelector(".name").textContent=strMeal;
        clone.querySelector(".cuisine").textContent=`Cuisine: ${strArea}`;
        clone.querySelector(".source-link").href=strYoutube || "#";
        // const videoLink = clone.querySelector(".source-link")
        // if (strYoutube) {
        //   videoLink.setAttribute("href", strYoutube);
        //   videoLink.textContent = `Watch Video`;
        // } else {
        //   videoLink.textContent = "No video available";
        //   videoLink.removeAttribute("href"); 
        //   videoLink.style.color = "red"; 
        // }
        container.append(clone);

      });

    }

  const home=document.getElementById('search-btn').addEventListener('click',fetchRecipie);
  if(!home){
    container.innerHTML=`<div><img src="/image/logo.png" alt="logo"></div>"`
  }


