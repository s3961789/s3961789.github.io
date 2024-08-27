// console.log("hello world");
// // a comment : cmnd+/
// let myName = "alice";
// const myCity = "makassar";
// console.log(myName, "lives in", myCity);
// console.log(`${myName} lives in ${myCity}`);

// let count = 10;
// console.log(count);

// let isItMorningClass = true;
// let isItAfternoonClass = false;

// // this is example of OBJECT
// let myStudentRecord = {
//   name: "evelyn",
//   id: 398292,
//   class: "DB234",
//   isItScience: false,
//   isItDesign: true,
// };

// const myBrotherName = null;

// console.log("hello everyone, my name is", myStudentRecord.name);
// console.log("my id is", myStudentRecord.id);
// console.log("Are you science student? ", myStudentRecord.isItScience);

// const numberArray = [2, 4, 6, 8, 9, 7];
// console.log(numberArray[0]);

// myStudentRecord.isItScience = true;
// if ((myStudentRecord.isItScience = true)) {
//   console.log("sorry you are in a wrong class");
// } else {
//   console.log("welcome to ABC123");
// }

// let myScore = 40;
// if (myScore >= 90) {
//   console.log("You scored a HD");
// } else if (myScore < 90 && myScore >= 70) {
//   console.log("you scored D");
// } else if (myScore < 70 && myScore >= 50) {
//   console.log("you scored C");
// } else {
//   console.log("you scored P");
// }

// console.log ("Hello Sarah");
// console.log ("Hello Peter");
// console.log ("Hello Alice");
// console.log ("Hello Jenny");

const names = ["sarah", "peter", "Alice", "Robert", "Jenny"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("hello", names[i]);
}

// step 1 i = 0;
// step 2 i < names.length;
// step 3 i++

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
];

// let total =
//   shoppingCart[0].price + shoppingCart[1].price + shoppingCart[2].price;

// console.log(total);

let sum = 0;
for (let i = 0; i < 3; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("intermediate sum", sum);
}

console.log(sum);

// i = 0 , sum = 0
// sum = 0 + 20;
// sum 20
// i =1
// sum = 20 + 50
// 70
// i=2
// sum 70 + 80
