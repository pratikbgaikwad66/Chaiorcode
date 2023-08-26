let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date( 2023, 0, 23)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date( 2023, 0, 23, 5 , 3)
// console.log(myCreatedDate.toLocaleString());

let newDate = new Date()
console.log(newDate.getMonth( + 1));
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long"
})