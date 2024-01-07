const accountId = 12345
let accountEmail="guneet@gmail.com"
var accountPassword="00000"
accountCity="Jaipur"
let accountState;

// accountId=2 //not allowed

accountEmail="gs@google.com"
accountPassword="11111"
accountCity="Bangolore"

console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])