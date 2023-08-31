// for of 

const arr = [1, 2, 3, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings ="heello world "
for (const greet of greetings) {
    // console.log(`each char is ${greet}`)
}


// map 

const map = new Map()
map.set(`IN`, "India")
map.set(`USA`, "United states of America")
map.set(`Fr`, "France")

// console.log(map);

// for (const [key , value] of map ) {
//     console.log(key, `:-`, value);
// }

const myObject = {
  game1 : 'NFS',
    game2 : 'spiderman' 
}

for (const [key , value] of Object){

    console.log(key, ':-', value);
}

