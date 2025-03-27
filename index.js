// Extract the last four characters from the string below;"extravaganza"
// let x = "extravaganza";
// let lastFour = x.slice(-4);
// console.log(lastFour);

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
   titleCaseWord.split(" ")
               .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
               .join(" ");
console.log(titleCaseWord); 

let z="extremely";
let firstfour=z.slice(4);
console.log(firstfour);

let x="extravaganza";
let lastFour = x.slice(2,5);
console.log(lastFour);

let m="I am a girl";
let f=m.toLowerCase();
acount=f.split("a").length -1;

// Question 1
let arr1 = [3, 7, 34, 90, 12]
let arr2 = [true, "green", "where", 12, 56]

let lastValue = arr1.find(item => item === 12);
console.log({lastValue});

lastValue = arr2.find(item => item === 56);
console.log({ lastValue });

// Question 2
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let pets = myPets.map(item => item).join(" ");
console.log(typeof pets);
console.log({pets});

// Question 3
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
let sortedItems = arr3.sort();
console.log({sortedItems});

// Question 4
let arr = ["boy", "man", "girl", "school", "girl", "woman"];

let duplicatesItems = [];
console.log({duplicatesItems});


// Question 5
let arr5 = ["the", "way", "x", 4];



// Question 6
let word = "renniw"
let sortedString = word.split();
console.log({sortedString});
let newWord = sortedString.sort();
console.log({newWord})


// Question 7
let fruits = new Array(10);
console.log(fruits.length);
fruits[5]= "Tomato";
console.log({fruits});


// Concat
let primeNumbers=[2,3,4,5];
let evenNumbers=[2,4,6,8];
let joinedArrays=primeNumbers.concat(evenNumbers);
console.log(joinedArrays);





let people=["Jane","Anne","Paul"];
people[people.length-1];
console.log(people);