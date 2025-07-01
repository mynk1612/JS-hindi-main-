const user = {
  username: "mayank"
  price: 999,

  welcomeMessage: function() {
    console.log(`${this.username } , welcome to website`);
    console.log(this);
  
  }
  
}

// user.welcomeMessage () // default value 
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);  {} empty object show in output in node 

// function chai(){
//   let username = "mayank"
//   console.log(this);
//   console.log(this.username); //undefined
// }

// chai()


// *********************************************ARROW FUNCTION*************************************************

// const chai = function () {
//   let username = "mayank"
//   console.log(this.username);
// }     // undefined o/p 
  
const chai = () => { // arrow funtion () => 
  let username = "mayank"
  console.log(this);
}

chai() 


/* ++++++++++++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++++++++  
      *********************** BASIC ARROW FUNCTION **************************** */ 

/*                    

// EXPLICIT RETURN 
const addTwo =(num1, num2) => {
  return num1 + num2
}   
*/

/* Implicit RETURN */  // in this the paranthesis are remove and return also remove from code 

//const addTwo =(num1, num2) =>  num1 + num2
// const addTwo =(num1, num2) =>  ( num1 + num2)
 
/* object return */
const addTwo =(num1, num2) =>  ({username: "mayank"}) // mayank
const addTwo =(num1, num2) =>  {username: "mayank"}  // undefined 

console.log(addTwo(3, 4))  // OUTPUT 7 

//const myArray = [2, 5, 3,7,8]
// myArray.forEach()


  
