let catCount = 0;
let inputCheck = document.getElementsByTagName("input");
let resultText = document.getElementById("result");

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

// First selection, diable 1 & 3

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

//Second selections, disable 1 & 2

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

//Selection Styles

function disableStyle(inputName) {
  let icon = inputName.parentNode.parentNode.children[0].children[0];
  if ((inputName.disabled = true)) {
    inputName.parentNode.style.backgroundColor = "rgb(167, 163, 163)";
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
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", getResults);

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
