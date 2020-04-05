const titleMedium = document.querySelector("#titleMedium");
const titleMessage = document.querySelector("#titleMessage");



titleMedium.addEventListener("mouseover", onMedium);
titleMedium.addEventListener("mouseout", offMedium);

function onMedium() {
	titleMedium.innerHTML = "Message";
}
function offMedium() {
	titleMedium.innerHTML = "Medium";
}


//enables Message --> Massage --> Mass Age when hovered over
titleMessage.addEventListener("mouseover", onMessage);

function onMessage() {
	//Message --> Massage --> Mass Age
	if (titleMessage.textContent == "Message") {
		titleMessage.innerHTML = "Massage";
	}
	else if (titleMessage.textContent == "Massage") {
		titleMessage.innerHTML = "Mass Age";
	}
	else { //titleMessage.textContent == "Mass Age"
		titleMessage.innerHTML = "Message";
	}
	
}


//highlight eye or mouth or nose or ear
const overlay = document.querySelector("#overlay");

const eye = document.querySelector(".eye");
eye.addEventListener("mouseover", onEye);
eye.addEventListener("mouseout", offEye);

const nose = document.querySelector(".nose");
nose.addEventListener("mouseover", onNose);
nose.addEventListener("mouseout", offNose);

const ear = document.querySelector(".ear");
ear.addEventListener("mouseover", onEar);
ear.addEventListener("mouseout", offEar);

const mouth = document.querySelector(".mouth");
mouth.addEventListener("mouseover", onMouth);
mouth.addEventListener("mouseout", offMouth);


function onEye() {
	overlay.style.background = "radial-gradient(farthest-corner at 34vw 20vh, #ededed 0%, #707070 12%)";
}
function offEye() {
	overlay.style.background = "radial-gradient(farthest-corner at 30vw 20vh, #707070 0%, #707070 15%)";
}
function onNose() {
	overlay.style.background = "radial-gradient(farthest-corner at 58vw 15vh, #ededed 0%, #707070 18%)";
}
function offNose() {
	overlay.style.background = "radial-gradient(farthest-corner at 30vw 20vh, #707070 0%, #707070 15%)";
}
function onEar() {
	overlay.style.background = "radial-gradient(farthest-corner at 38vw 67vh, #ededed 0%, #707070 23%)";
}
function offEar() {
	overlay.style.background = "radial-gradient(farthest-corner at 30vw 20vh, #707070 0%, #707070 15%)";
}
function onMouth() {
	overlay.style.background = "radial-gradient(farthest-corner at 76vw 35vh, #ededed 0%, #707070 23%)";
}
function offMouth() {
	overlay.style.background = "radial-gradient(farthest-corner at 30vw 20vh, #707070 0%, #707070 15%)";
}
// info on radial-gradient https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient


