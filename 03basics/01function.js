
function saymyname(){
console.log("p")
console.log("r")
console.log("a")
console.log("t")
console.log("i")
console.log("k")

}

// // saymyname()
// function addTwoNumbers(number1 , numbwer2){
//     console.log(number1 + numbwer2);

// }

// addTwoNumbers(3,"4")

// function addTwoNumbers(number1 , numbwer2) {
//     let result = number1 + numbwer2
//     return result 
//     console.log("pratik")

// }

// const result = addTwoNumbers(3, 5)
// console.log("result: ", result);

function loginUserMessage(username ="sam"){
if(!username){
    console.log("please enter a user name")
    return
}
return `${username} justloggedin`
}
// console.log(loginUserMessage("pratik"))
console.log(loginUserMessage("pratik"))


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 600, 700, 800))

const youser = {
    username: "hitesh",
    price: 129 
}
function handleObject(anayobject){
    console.log(`username is ${anayobject.username} and price is ${anayobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399

})

const myNewArray = [100, 200, 200, 300, ]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));1