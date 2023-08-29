const user = {
    username: "pratik",
    price: "999",

    welcomeMassage : function() {
        console.log(`${this.username}`, `welcome to website`);
        console.log(this);
    }


 }
// user.welcomeMassage()
// user.username= "sam"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//   let username ="pratik"
    // console.log(this);
// }
// chai()

// const chai1 = function () {
//     let username = "pratik "
//     // console.log(thise.username)

// }
// chai1()

// const chai1 = () => {
//     let username = "pratik "
//     console.log(this)

// }
// chai1()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addtwo(3, 4))

// const gettwo = (num1, num2 ) => num1 + num2

// const getTwo = (num1, num2) => (num1 - num2)
const getTwo = (num1, num2) => ({username: "pratik"})

console.log(getTwo(3,4))