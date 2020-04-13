console.log("Testing testing 123");

let song = []; //will hold all sounds the user adds to song

//ADD SOUNDS HERE
const monkey = new Audio("assets/sounds/monkeyCry.mp3");
monkey.duration = 4300; //must include this line for any new sounds added. Holds the length of the sound in milliseconds

const bird = new Audio("assets/sounds/birds.mp3");
bird.duration = 4552;




//Adding single click actions. 
//Specific sound plays when button clicked. (and icon will popup. not yet implemented) 
$('#monkeyButton').click(e => playSound(monkey));
$('#birdButton').click(e => playSound(bird));
$('#playbackButton').click(function() {
	playSong();
});

//Adding double click actions. 
//Adds specified sounds to the song when button dblclicked. (Accompanying animation not yet decided)
$('#monkeyButton').dblclick(function() {
  addToSong(monkey);
});

$('#birdButton').dblclick(function() {
  addToSong(bird);
});



//FUNCTONS

//plays specificed sound
function playSound(soundName) {
	soundName.play();
	//add in time delay to prevent other sounds from playing simultaneously
}

//adds sound to song array
function addToSong(soundName) {
	song.push(soundName);
}

//iterates through the song array playing each sound
function playSong() {
	for (let i=0; i<song.length; i++) {
		// delay(song[i].duration); //supposed to prevent next sounds from playing simultaneously 
	}
}