const myObject = {
    js: 'javascript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}

for ( const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =[ "js", "php", "node", "css", "html"]

for (const key in programming) {
    console.log(programming[key]);
}