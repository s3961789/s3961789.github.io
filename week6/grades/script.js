function checkGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);
  //   Method 1
  let total = calculateTotal(parseFloat(a1.value), parseFloat(a2.value));
  //   Method 2
  //  let total = parseFloat(a1.value) + parseFloat(a2.value);
  //   Method 3
  // let a1value = parseFloat(a1.value);
  // let a2value = parseFloat (a2.value);
  // let total = calculateTotal (a1value, a2value);

  console.log(total);
  giveReport(total);
}

function calculateTotal(a, b) {
  let sum = a + b;
  return sum;
}

function giveReport(score) {
  const report = document.querySelector("#report");
  if (score > 30) {
    console.log("you got HD");
    report.textContent = "You got HD";
  } else if (score > 20 && score <= 30) {
    console.log("you got D");
    report.textContent = "you got D";
  } else if (score < 20) {
    console.log("You failed :(");
    report.textContent = "You failed :(";
  }
}
// const para = document.querySelector("p");
// console.log(para.textContent);
// para.textContent = "What is your as1 score?";

// const allPara = document.querySelectorAll("p");
// console.log(allPara);

// const para = document.querySelector("#question2");
// console.log(para.textContent);
// para.textContent = "What is your as2 score?";

// const heading = document.querySelector("h1");
// console.log(heading.textContent);

// heading.textContent = "New Heading";
// heading.classList.add("red-heaeding");
// heading.classList.add("blue-heaeding");

const myCat = document.querySelector("#my-cat");
console.log(myCat);

function toggleMe() {
  myCat.classList.toggle("round");
}

const header = document.querySelector("header");
console.log(header.innerHTML);
header.innerHTML = `<p class="blue-heading"> is the cutest! </p> 
<p class="red-heading"> don't you agree! </p>`;
