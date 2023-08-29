// immediately invoked function exprations (IIFE)
(function chai (){
    console.log(`DB connected`)
})();

( (name) =>  {
     console.log(`db connected two ${name}`)
})('pratik');

 