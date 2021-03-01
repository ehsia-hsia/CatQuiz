let catCount = 0;
let inputCheck = document.getElementsByTagName("input");
let resultText = document.getElementById("result");
let Q1A1 = document.getElementById("Q1A1");
let Q2A1 = document.getElementById("Q2A1");
let Q1A2 = document.getElementById("Q1A2");
let Q2A2 = document.getElementById("Q2A2");
let Q1A3 = document.getElementById("Q1A3");
let Q2A3 = document.getElementById("Q2A3");

Q1A1.addEventListener("click", subCat);
Q2A1.addEventListener("click", subCat);

Q1A2.addEventListener("click", noCat);
Q2A2.addEventListener("click", noCat);

Q1A3.addEventListener("click", addCat);
Q2A3.addEventListener("click", addCat);

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", getResults);

function getResults() {
  if (catCount >= 1) {
    return (resultText.innerHTML = `get a cat ${catCount}`);
  } else if (catCount == 0) {
    return (resultText.innerHTML = `you seem on the fence ${catCount}`);
  } else {
    return (resultText.innerHTML = `dont get a cat ${catCount}`);
  }
}

function addCat() {
  catCount += 1;
}

function subCat() {
  catCount -= 1;
}

function noCat() {
  catCount -= 0;
}
