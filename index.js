let catCount = 0;
let inputCheck = document.getElementsByTagName("input");
let resultText = document.getElementById("result");
let Q1A1 = document.getElementById("Q1A1");
let Q2A1 = document.getElementById("Q2A1");
let Q1A2 = document.getElementById("Q1A2");
let Q2A2 = document.getElementById("Q2A2");
let Q1A3 = document.getElementById("Q1A3");
let Q2A3 = document.getElementById("Q2A3");
let button = document.getElementsByClassName("Q1");
let label = document.getElementsByTagName("label");
let weirdArr = 0;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("focus", backColor);
  function backColor() {
    if (button[i].focus && weirdArr == 0) {
      button[i].style.borderColor = "pink";
      button[i].style.borderWidth = "10px";
      // weirdArr++;
    }
  }
}
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
    resultText.style.color = "green";

    return (resultText.innerHTML = `get a cat ${catCount}`);
  } else if (catCount == 0) {
    resultText.style.color = "gold";
    return (resultText.innerHTML = `you seem on the fence ${catCount}`);
  } else {
    resultText.style.color = "red";
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
