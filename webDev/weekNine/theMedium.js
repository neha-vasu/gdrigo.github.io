console.log("the message!");

const theButton = document.querySelector("#firstButton");
const theTxt = document.querySelector("h2");

theButton.addEventListener("click", isClicked);
function isClicked() {
  console.log("clicked!");
  theTxt.style.filter = "blur(3px)";

}


const glassesFrame = document.querySelectorAll(".glasses");
const face = document.querySelector(".face");
theButton.addEventListener("dblclick", doubledClicked);
function doubledClicked() {
  theButton.style.backgroundColor = "blue";
  theTxt.style.filter = "blur(0px)";
  face.style.backgroundColor = "yellow";
  for (let i=0; i<glassesFrame.length; i++) {  
    glassesFrame[i].style.visibility = "visible";
  }
}

// const eye = document.querySelectorAll(".eye");
const eyes = document.querySelectorAll(".eye");
const mouth = document.querySelector(".mouth");

mouth.addEventListener("mouseover", hovered);
// eye.addEventListener("hover", hovered);
for (let i=0; i<eyes.length; i++) {  
    eyes[i].addEventListener("mouseover", hovered);
  }

function hovered(){
  mouth.style.transform = "scale(1.5)";
  for (let i=0; i<eyes.length; i++) {  
    // eyes[i].style.transform = "scale(1.5)";
    eyes[i].style.backgroundColor = "pink";
  }
}
function unhovered(){
  mouth.style.transform = "scale(1.5)";
  for (let i=0; i<eyes.length; i++) {  
    // eyes[i].style.transform = "scale(1.5)";
    eyes[i].style.backgroundColor = "white";
  }
}


mouth.addEventListener("mouseout", off);

function off(){
  mouth.style.transform = "scale(1)";
}


