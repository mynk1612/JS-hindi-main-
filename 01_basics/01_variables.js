const accountId = 144553
let accountEmail = "mayank@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState 
//accountId = 2  // not allowed 
accountEmail = " hc@hc.com"
accountPassword = "1"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope  
*/

console.table([accountId, accountPassword, accountCity,accountEmail,accountState])
