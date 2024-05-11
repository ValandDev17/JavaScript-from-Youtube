// Object.create
// Two way declare
// Singleton = constructor through create class 
// const googleUser = new Object(); singleton object

// non-singleton object
const googleUser = {}
googleUser.id="98981dev"
googleUser.name="Dev"
googleUser.isLoggedIn=false

console.log(googleUser); 


// Object literals 
const mySym = Symbol("key1")

const JsUser = {
    name: "Dev",
    "full name": "Valand Dev",
    [mySym]: "keyValue1",
    age: 18,
    location: "Ahm",
    email: "dev@gmail.com",
    isLoggIn: false,
    lastLoginDays: ["Mon", "Wed"]
}  
// console.log(JsUser.name) generally this way used to print value  ["implicitly take as string both key & values"]
// console.log(JsUser["name"]);     special case
// console.log(JsUser["full name"]);
// console.log("\n");
// console.log(JsUser[mySym]);      Interview que.

// change the value
JsUser.email = "dev@yahoo.com"
// Object.freeze(JsUser) // not allow to change value in object
JsUser.email = "dev@hotmail.com"
// console.log(JsUser);    
// Function
JsUser.greeting = function(){
    console.log(`Hello Js Users, ${this.name}`); //String interpolation write in backtick ``
}
// console.log(JsUser.greeting());

// Combine two objects or more
const o1 = {1:"a", 2:"b"}
const o2 = {3:"a", 4:"b"}
const o3 = {o1, o2} // not proper way
console.log(o3);

const o4 = Object.assign(o1,o2) // also use 
console.log(o4);
const o5 = Object.assign({}, o1,o2) // perfect syntax good habit  {} optional parameter guaranteed result store 
//                      {} target, source
console.log("optional use",o5);

// mostly use for combine objects = Spread out 
const o6 = {...o1, ... o2}
console.log("spread out mostly use",o6);

// data base gives values
const users = [
    {
        id: 1,
        email: "users@gmail.com"
    },
    {
        id: 2,
        email: "users@gmail.com"
    },
    {
        id: 3,
        email: "users@gmail.com"
    },
]
users[1].id

console.log(Object.keys(googleUser));
console.log(Object.values(googleUser));
// check object has property
console.log(googleUser.hasOwnProperty("isLoggedIn"));

// Object de-structure
const course = {
    courseName: "Js",
    price: 999,
    courseInstructor: "Hitesh"
}
// course.courseInstructor;

// clean the code node reapet
// const {courseInstructor} = course;
const {courseInstructor: instructor} = course; //alias
console.log("\n", instructor);

// API = our work give to another
// JSON

// {
    // "name": "hitesh",
    // "courseName": "javascript",
    // "price": "free"
// }