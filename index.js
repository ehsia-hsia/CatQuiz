let catCount = 0;
let inputCheck = document.getElementsByTagName("input");
let resultText = document.getElementById("result");
let Q1A1 = document.getElementById("Q1A1");
let Q2A1 = document.getElementById("Q2A1");
let Q1A2 = document.getElementById("Q1A2");
let Q2A2 = document.getElementById("Q2A2");
let Q1A3 = document.getElementById("Q1A3");
let Q2A3 = document.getElementById("Q2A3");
let noIcon = document.querySelectorAll(".noIcon");
let maybeIcon = document.querySelectorAll(".maybeIcon");
let heartIcon = document.querySelectorAll(".heartIcon");

//__HEART YES +1_______________

Q1A3.addEventListener("click", addCat);
Q1A3.addEventListener("click", disabledInputs1);
Q2A3.addEventListener("click", addCat);
Q2A3.addEventListener("click", disabledInputs1A);

function addCat() {
  catCount += 1;
}

function disabledInputs1() {
  Q1A2.disabled = true;
  Q1A1.disabled = true;
  disableStyle(Q1A2);
  disableStyle(Q1A1);
  yesIcons();
}

function disabledInputs1A() {
  Q2A2.disabled = true;
  Q2A1.disabled = true;
  disableStyle(Q2A2);
  disableStyle(Q2A1);
  yesIcons2();
}

function yesIcons() {
  noIcon[0].style.color = "lightgrey";
  maybeIcon[0].style.color = "lightgrey";
  heartIcon[0].style.color = "rgb(255, 101, 127)";
}

function yesIcons2() {
  noIcon[1].style.color = "lightgrey";
  maybeIcon[1].style.color = "lightgrey";
  heartIcon[1].style.color = "rgb(255, 101, 127)";
}

//__X NO -1______________

Q1A1.addEventListener("click", subCat);
Q1A1.addEventListener("click", disabledInputs2);
Q2A1.addEventListener("click", subCat);
Q2A1.addEventListener("click", disabledInputs2A);

function subCat() {
  catCount -= 1;
}

function disabledInputs2() {
  Q1A2.disabled = true;
  Q1A3.disabled = true;
  disableStyle(Q1A2);
  disableStyle(Q1A3);
  noIcons();
}

function disabledInputs2A() {
  Q2A2.disabled = true;
  Q2A3.disabled = true;
  disableStyle(Q2A2);
  disableStyle(Q2A3);
  noIcons2();
}

function noIcons() {
  heartIcon[0].style.color = "lightgrey";
  maybeIcon[0].style.color = "lightgrey";
  noIcon[0].style.color = "rgb(255, 101, 127)";
}

function noIcons2() {
  heartIcon[1].style.color = "lightgrey";
  maybeIcon[1].style.color = "lightgrey";
  noIcon[1].style.color = "rgb(255, 101, 127)";
}

//__WAvE SOMETIME 0______________
Q1A2.addEventListener("click", maybeCat);
Q1A2.addEventListener("click", disabledInputs3);

Q2A2.addEventListener("click", maybeCat);
Q2A2.addEventListener("click", disabledInputs3A);

function maybeCat() {
  catCount -= 0;
}
function disabledInputs3() {
  Q1A1.disabled = true;
  Q1A3.disabled = true;
  disableStyle(Q1A1);
  disableStyle(Q1A3);
  maybeIcons();
}

function disabledInputs3A() {
  Q2A1.disabled = true;
  Q2A3.disabled = true;
  disableStyle(Q2A1);
  disableStyle(Q2A3);
  maybeIcons2();
}
function maybeIcons() {
  heartIcon[0].style.color = "lightgrey";
  noIcon[0].style.color = "lightgrey";
  maybeIcon[0].style.color = "rgb(255, 101, 127)";
}

function maybeIcons2() {
  heartIcon[1].style.color = "lightgrey";
  noIcon[1].style.color = "lightgrey";
  maybeIcon[1].style.color = "rgb(255, 101, 127)";
}

//__Disable Styles
function disableStyle(inputName) {
  if ((inputName.disabled = true)) {
    inputName.parentNode.style.backgroundColor = "grey";
    inputName.parentNode.parentNode.style.backgroundColor = "grey";
  }
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
    return (resultText.innerHTML = `DON'T get a cat ${catCount}`);
  }
}
