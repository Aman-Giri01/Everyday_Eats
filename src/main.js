// import './style.css'

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
.then((res)=>{
   return res.json()})
.then((data)=>{
  console.log(data);
})
.catch(error=>console.error("Unable to Fetch data..",error));


// const fetchUser=()=>{
//   const user_name=`Aman-Giri01`

//   fetch(`https://api.github.com/users/${user_name}`)
//   .then((res)=>{
//       return res.json()})
//   .then((data)=>{
//      console.log(data);
//   }).catch(error => console.error("Error fetching data:", error));}
//   fetchUser();
