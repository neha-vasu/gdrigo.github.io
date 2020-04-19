let song = []; //will hold all sounds the user adds to song

// Constructor function for Sound objects
function Sound(audio="", duration=0, buttonID="") {
  this.audio = new Audio(audio);
  this.duration = duration;
  this.buttonID = buttonID;
}

//Create Sound objects
var monkey = new Sound("assets/sounds/monkeyCry.mp3", 4300, "#monkeyButton");
var bird = new Sound("assets/sounds/birds.mp3", 4552, "#birdButton");


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
function playSound(sound) {
	sound.audio.play();
}

//adds sound to song array
function addToSong(sound) {
	song.push(sound);
}


let delayBeforePlaying; //amount of time before each sound starts to play...will hold duration of prev sound in the sequence
function playSong() {
	//iterates through song array playing each sound
	for (let i =0; i<song.length; i++) { 
	    if(!song[i-1]) { //this is the first sound in song so we want a delay of 0
	    	setTimeout(function(){playSound(song[i])}, 0);
	    	delayBeforePlaying = 0; // resets this variable each time the song starts
	    }
	    else {
	    	delayBeforePlaying = delayBeforePlaying + song[i-1].duration; //updates the amount of time to delay before playing the next song..equal to the total length of all the previous sounds combined
	    	setTimeout(function(){playSound(song[i])}, delayBeforePlaying);
	    }
	}
}