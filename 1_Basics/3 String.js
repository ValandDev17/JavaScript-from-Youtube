const name = "Dev";
console.log(`My name is ${name}`);

// const gameName = new String("Mario");
const gameName = new String("Battleground");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 5);
console.log(newString);

const sliceString = gameName.slice(-12, 4);
console.log(sliceString);

const trimString = "  dev@gmail.com   ";
console.log(trimString);
console.log(trimString.trim());

const url = "www.dev.com/dev%webdev";
console.log(url.replace("%",'-'));

console.log(url.includes("dev"));

console.log(url.split("%"));