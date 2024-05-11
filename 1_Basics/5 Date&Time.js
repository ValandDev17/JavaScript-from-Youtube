let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let MyCreatedDate = new Date(2024,3,17);
// let MyCreatedDate = new Date(2024,3,17,10,0);
let MyCreatedDate = new Date("2023-04-17");
// console.log(MyCreatedDate.toDateString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(MyCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`Today Day is ${newDate.getDay()}`); 

// Customize Day
newDate.toLocaleDateString("default",{
    weekday: "long"
})