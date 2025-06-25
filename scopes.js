function one(){
  const username = "mayank"

function two(){
  const website = "youtube"
  //console.log(username);
}
  //console.log(website);

  two()
  
}
//one()

if (true) {
  const username = "mayank2"
  if(username === "mayank2"){
    const website =" youtube"
   // console.log(username = website);
  }
  //console.log(website); error comes because if conditon outer side it is written 
}
//console.log(username);


// ++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++
console.log (addone(5))
function addone(num){
  return num + 1
}
//addone(5) // value comes 6 


// addTwo(5) --- doesn't use before declaration first 
const addTwo = function(num){
  return num + 2
}
//addTwo(5)



