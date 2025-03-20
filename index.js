// Extract the last four characters from the string below;"extravaganza"
let x = "extravaganza";
let lastFour = x.slice(-4);
console.log(lastFour);

// Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
let food = "The quick fox jumped over the lazy dog";
let newFood = food.slice(0, 4) + "eat" + food.slice(4);
console.log(newFood);

// Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story="The quick brown fox jumps over the lazy dog";
const y=story.toLowerCase();
const thecount=y.split("the").length -1;
const browncount=y.split("brown").length -1;

console.log (browncount);
console.log(thecount);



// Using JavaScript, find the following words from the following strings:1. 
// "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
console.log(string1.includes("are")); 
console.log(string2.includes("sitting")); 


// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

let upperCaseWord = "wonderful".toUpperCase();
console.log(upperCaseWord); 

let lowerCaseWord1 = "amazing".toLowerCase();
let lowerCaseWord2 = "UndERneath".toLowerCase();
console.log(lowerCaseWord1); 
console.log(lowerCaseWord2); 

let titleCaseWord = "A wonderful world"
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(titleCaseWord); 

