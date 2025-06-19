// sigleton 
//Object.create


// .....................object literals .............................
const mySym = Symbol("key1")


const JsUser = {
  name: "Mayank",
  "full name": "Mayank Kandpal",
  [mySym]: " mykey1 ",
  age: 18,
  location: "Jaipur",
  email: "mayank@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
  } 

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "mayank@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "mayank@microsoft.com"
console.log(JsUser);


//added funtion 

JsUser.greeting = funciton(){
  console.log('Hello Js User ,${this.name}');
}
JsUser.greetingTwo = funciton(){
  console.log('Hello Js User,${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());















