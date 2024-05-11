// Immediate Invoked Function Expressions
// Why us
// => Immediate excuted fun. but 
// with Global scope ke pollution se problem hoti 
// jo bhi global me declaration or variable ko hata ne ke liye

(function mesg() {
    // Named IIFE
    console.log("DB connected!");
})();

((name)=>{
    console.log(`DB connected! ${name}` );
})("MySQL") // ("") this is originally call 