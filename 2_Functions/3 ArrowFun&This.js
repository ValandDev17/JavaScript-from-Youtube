const user = {
    username: "Dev",
    price: 50,
    welcomeMesg: function(){
        console.log(`${this.username}, welcome to website.`);
    }
}
user.welcomeMesg()
user.username="Abhay"
user.welcomeMesg()

// function hello() {
//     let username = "Dev"
//     console.log(this.username);
// }
// hello()

const mesg = ()=>{
    let username = "Dev"
    console.log(this);
}
// mesg()

// Explicit Return
// const add = (n1,n2) => {
//     return n1+n2
// }


//Implicit Return no need to write return
// const add = (n1,n2) => n1+n2 
//  Compusory write in ()
// const add = (n1,n2) => (n1+n2) 

const add = (n1,n2) => ({ username: "Dev"})

console.log(add(7,3));

