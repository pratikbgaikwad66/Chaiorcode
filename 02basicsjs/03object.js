// objects literals 
const mySym = Symbol("key1")


const Jsuser = {

    name: "pratik",
    "full name": "pratik gaikwad",
    [mySym]: "mykey1",
    age: 18,
    location: "islampur",
    email: "prtik126@google.com",
    isLooggedIn : false,
    lastLoginDays:["monday","saturday"]

}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(typeof Jsuser[mySym])

Jsuser.email = "prtikchat@gmail.com"
// // Object.freeze(Jsuser)
// Jsuser.email ="pratik@firefox.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
}
Jsuser.greetingTwo = function(){
    console.log("hello js user");
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())