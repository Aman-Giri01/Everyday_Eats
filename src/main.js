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

// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
// .then((res)=>{
//    return res.json()})
// .then((data)=>{
//   console.log(data);
// })
// .catch(error=>console.error("Unable to Fetch data..",error));


