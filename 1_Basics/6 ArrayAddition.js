const m_heros = ["Thor", "Iron", "Loki"];
const dc_heros = ["Superman","Batman","Wonder"]

// m_heros.push(dc_heros); //not work proper

// const allHeors = m_heros.concat(dc_heros)
// console.log(allHeors); 

const allHeors = [...m_heros,...dc_heros] //spread operator
console.log(allHeors);

const aArray = [1,2,3,[4,5,6],[7,8,[9,10]]]
let realArray = aArray.flat(Infinity);
console.log(realArray);


console.log(Array.isArray("Dev")); 
console.log(Array.from("Dev")); //convert in array each letter

// console.log(Array.from({ name: "Dev"})); //Interesting situation

let score = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score,score2,score3)); 
//Returns a new array from a set of elements.

