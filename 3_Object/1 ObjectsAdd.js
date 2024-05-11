// Singletonobject
const User =new Object()

User.id = "123abc"
User.name = "Dev"
User.isLoggedIn = false

const otherUser = {
    email: 'abc@g.com',
    fullName: {
        fName: "Dev",
        lname: "Valand"
    }
}
// console.log(otherUser.fullName.fName);

const o1 = {1:"a", 2:"b"}
const o2 = {3:"c", 4:"d"}

// const o3 = Object.assign({},o1,o2)
// const o3 = Object.assign({},o1,o2) {}=optional parameter
const o3 = {...o1,...o2}
// console.log(o3);

const users = [
    {
        id: 1,
        email: "a@g.com"
    },
    {
        id: 1,
        email: "a@g.com"
    },
    {
        id: 1,
        email: "a@g.com"
    },
]

// console.log(users[1].email); 
// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));
// console.log(User.hasOwnProperty("isLoggedIn"));

const course ={
    coursename: "Js",
    price: "100",
    courseInstr: "Dev"
}
// course.courseInstr

// Object Destructure
const {courseInstr} = course
const {courseInstr: Instructor} = course

console.log(courseInstr);
console.log(Instructor);