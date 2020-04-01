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
  theButton.style.backgroundColor = "rgb(173,255,47)";
  theTxt.style.filter = "blur(0px)";
  for (let i=0; i<glassesFrame.length; i++) {  
    glassesFrame[i].style.visibility = "visible";
  }
}

const eyes = document.querySelectorAll(".eye");
const mouth = document.querySelector(".mouth");

for (let i=0; i<eyes.length; i++) {  
    eyes[i].addEventListener("mouseover", onEye);
    eyes[i].addEventListener("mouseout", offEye);
}
mouth.addEventListener("mouseover", onMouth);
mouth.addEventListener("mouseout", offMouth);

function onEye(){
  for (let i=0; i<eyes.length; i++) {  
    eyes[i].style.backgroundColor = "pink";
  }
}
function offEye(){
  for (let i=0; i<eyes.length; i++) {  
    eyes[i].style.backgroundColor = "white";
  }
}

function onMouth(){
  mouth.style.transform = "scale(1.3)";
}
function offMouth(){
  mouth.style.transform = "scale(1)";
}
