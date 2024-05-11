const myArr = [0,1,2,3,4,5]
const myHero = ["Bramha", "Vishnu", "Mahesh"]
const myArr2 = new Array(1,2,3,4);

// console.log(myArr[3]);

// Array methods
// myArr.push(6);
// myArr.push(8);
// myArr.pop();

myArr.unshift(7);
// console.log(myArr);
myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(9));

// Slice, Splice 

console.log("A :-", myArr);
const myA1 = myArr.slice(1,3);
console.log("Slice",myA1);

console.log("B:-",myArr);
// Splice affect the original array in splice
const myA2 = myArr.splice(1,3);
console.log("Splice",myA2);
console.log("C:- ",myArr);