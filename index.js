let catCount = 0;
let inputCheck = document.getElementsByTagName("input");
let resultText = document.getElementById("result");
let resetButton = document.getElementById("reset");
let submitButton = document.getElementById("submit");

//Button Events
resetButton.addEventListener("click", clearQuiz);
submitButton.addEventListener("click", getResults);
//Question 1
let Q1A1 = document.getElementById("Q1A1");
let Q1A2 = document.getElementById("Q1A2");
let Q1A3 = document.getElementById("Q1A3");

Q1A1.addEventListener("click", subCat); // -1
Q1A1.addEventListener("click", selectFirstRow1); //disable unselected, restyle selected
Q1A2.addEventListener("click", maybeCat); // 0
Q1A2.addEventListener("click", selectSecondRow1); //disable unselected, restyle selected
Q1A3.addEventListener("click", addCat); // +1
Q1A3.addEventListener("click", selectThirdRow1); //disable unselected, restyle selected

// Question 2
let Q2A1 = document.getElementById("Q2A1");
let Q2A2 = document.getElementById("Q2A2");
let Q2A3 = document.getElementById("Q2A3");

Q2A1.addEventListener("click", subCat);
Q2A1.addEventListener("click", selectFirstRow2);
Q2A2.addEventListener("click", maybeCat);
Q2A2.addEventListener("click", selectSecondRow2);
Q2A3.addEventListener("click", addCat);
Q2A3.addEventListener("click", selectThirdRow2);

// Question 3
let Q3A1 = document.getElementById("Q3A1");
let Q3A2 = document.getElementById("Q3A2");
let Q3A3 = document.getElementById("Q3A3");

Q3A1.addEventListener("click", subCat);
Q3A1.addEventListener("click", selectFirstRow3);
Q3A2.addEventListener("click", maybeCat);
Q3A2.addEventListener("click", selectSecondRow3);
Q3A3.addEventListener("click", addCat);
Q3A3.addEventListener("click", selectThirdRow3);
//Cat Counter
function addCat() {
  catCount += 1;
}

function subCat() {
  catCount -= 1;
}

function maybeCat() {
  catCount -= 0;
}

//First selections, disable 1 & 2

function selectFirstRow1() {
  Q1A2.disabled = true;
  Q1A3.disabled = true;
  disableStyle(Q1A2);
  disableStyle(Q1A3);
  selectedStyle(Q1A1);
}

function selectFirstRow2() {
  Q2A2.disabled = true;
  Q2A3.disabled = true;
  disableStyle(Q2A2);
  disableStyle(Q2A3);
  selectedStyle(Q2A1);
}
function selectFirstRow3() {
  Q3A2.disabled = true;
  Q3A3.disabled = true;
  disableStyle(Q3A2);
  disableStyle(Q3A3);
  selectedStyle(Q3A1);
}

// Second selection, diable 1 & 3

function selectSecondRow1() {
  Q1A1.disabled = true;
  Q1A3.disabled = true;
  disableStyle(Q1A1);
  disableStyle(Q1A3);
  selectedStyle(Q1A2);
}

function selectSecondRow2() {
  Q2A1.disabled = true;
  Q2A3.disabled = true;
  disableStyle(Q2A1);
  disableStyle(Q2A3);
  selectedStyle(Q2A2);
}
function selectSecondRow3() {
  Q3A1.disabled = true;
  Q3A3.disabled = true;
  disableStyle(Q3A1);
  disableStyle(Q3A3);
  selectedStyle(Q3A2);
}
// Third selections, disable 2 & 3
function selectThirdRow1() {
  Q1A2.disabled = true;
  Q1A1.disabled = true;
  disableStyle(Q1A2);
  disableStyle(Q1A1);
  selectedStyle(Q1A3);
}

function selectThirdRow2() {
  Q2A2.disabled = true;
  Q2A1.disabled = true;
  disableStyle(Q2A2);
  disableStyle(Q2A1);
  selectedStyle(Q2A3);
}
function selectThirdRow3() {
  Q3A2.disabled = true;
  Q3A1.disabled = true;
  disableStyle(Q3A2);
  disableStyle(Q3A1);
  selectedStyle(Q3A3);
}

//Selection Styles

function disableStyle(inputName) {
  let icon = inputName.parentNode.parentNode.children[0].children[0];
  if ((inputName.disabled = true)) {
    inputName.parentNode.style.backgroundColor = "rgb(167, 163, 163)";
    inputName.parentNode.style.borderColor = "white";
    inputName.parentNode.parentNode.style.backgroundColor =
      "rgb(167, 163, 163)";
    icon.style.color = "lightgrey";
  }
}

function selectedStyle(inputSelected) {
  icon = inputSelected.parentNode.parentNode.children[0].children[0];
  icon.style.color = "rgb(255, 101, 127)";
}

//__Submit and Results Style

function getResults() {
  if (catCount >= 1) {
    resultText.style.color = "green";
    return (resultText.innerHTML = `Get a cat ${catCount} <i class="fas fa-heart"></i>`);
  } else if (catCount == 0) {
    resultText.style.color = "gold";
    return (resultText.innerHTML = `You seem on the fence... ${catCount}`);
  } else {
    resultText.style.color = "red";
    return (resultText.innerHTML = `Don't get a cat ${catCount}           <i class="far fa-times-circle"></i>
    `);
  }
}

function clearQuiz() {
  ///LOOP HERE, this all could be hard coded to remove loop
  catCount = 0;
  let arrayTest = [Q1A1, Q2A1, Q3A1, Q1A2, Q2A2, Q3A2, Q1A3, Q2A3, Q3A3];
  for (let i = 0; i < arrayTest.length; i++) {
    let curItem = arrayTest[i];
    curItem.disabled = false;
    curItem.checked = false;
    testFun(curItem);
    resultText.innerHTML = "get results";
  }
}
function testFun(arrayItem) {
  let icon = arrayItem.parentNode.parentNode.children[0].children[0];
  if (arrayItem.disabled == false) {
    arrayItem.parentNode.style.backgroundColor = "rgb(255, 250, 251)";
    arrayItem.parentNode.style.borderColor = "rgb(254, 117, 140)";
    arrayItem.parentNode.parentNode.style.backgroundColor =
      "rgb(244, 212, 219) ";
    icon.style.color = "white";
  }
}
