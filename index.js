var currentSheet = 1;

// Change stylesheet function
function changeCSS(sheetNumber) {
  currentSheet = sheetNumber;
  if (sheetNumber == 6) {
    document.getElementById("myCSS").disabled = true;
  } else {
    document.getElementById("myCSS").disabled = false;
    document.getElementById('myCSS').href = "css/styles" + sheetNumber + ".css";
  }
}

//Fix Button Group for stylesheet 4 on scrolling to a specific point
var btnGroupTop = document.getElementById("buttonsDiv").offsetTop;

window.onscroll = function() {
    if (currentSheet == 5){
    fixButtonGroup();
  }
};

// Fix Button Group function - only used for stylesheet 4
function fixButtonGroup() {
  console.log("offsetTop: " + btnGroupTop);
  console.log("pageYOffset: " + window.pageYOffset);
  if (window.pageYOffset > btnGroupTop) {
    document.getElementById("buttonsDiv").classList.add("fixedTop");
  } else {
    document.getElementById("buttonsDiv").classList.remove("fixedTop");
  }
}
