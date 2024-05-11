let a = 300
if(true){
    let a= 10
    const b= 20
    var c = 30
    console.log(a);
}
console.log(a);
// console.log(b);
console.log(c);

function one(arams) {
    const username="Dev"
    function two() {
        const web = "youtube"
        console.log(username);
    }
    console.log(web);
    two()
}
one()

if(true){
    const username = "dev"
    if(username==="dev"){}
    const web = "youtube"
    console.log(username+web);
}

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}