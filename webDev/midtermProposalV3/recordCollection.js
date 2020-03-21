//executed when disc on homepage is clicked
function homepageAnimations() {
  //fade out disc and white background
  let disc = document.getElementById("homepageDisc");
  let whiteFilm = document.getElementById("homepageOverlay");
  
  let fadeDisc = setInterval(function () {
        if (!disc.style.opacity) {
            disc.style.opacity = 1;
        }
        if (disc.style.opacity > 0) {
            disc.style.opacity -= 0.01;
        } else {
            clearInterval(fadeDisc);
        }
    }, 5);

  let fadeOverlay = setInterval(function () {
        if (!whiteFilm.style.opacity) {
            whiteFilm.style.opacity = 0.7;
        }
        if (whiteFilm.style.opacity > 0) {
            whiteFilm.style.opacity -= 0.01;
        } else {
            clearInterval(fadeOverlay);
        }
    }, 20);

  let recCovers = document.getElementsByClassName("recCover");
  let fadeRecCovers = setInterval(function () {
        if (!recCovers[0].style.filter) {
            for (var i=0; i<recCovers.length; i++) {
              recCovers[i].style.filter = "blur(16px)";
            } 
        }
        let blurLevel = parseInt(recCovers[0].style.filter.substring(5,7));
        if (blurLevel > 0) {
          for (var i=0; i<recCovers.length; i++) {
            blurLevel--;
            recCovers[i].style.filter = "blur(" + blurLevel + "px)";
          } 
        } else {
            clearInterval(fadeOverlay);
        }
    }, 90);

  //open recordslist.html
  setTimeout(function(){ window.location.href = "recordslist.html"; }, 1900);
}



//FOR all audioTags
function setVolume() {
  let audioTag = document.getElementById('audioTag');
  audioTag.volume = 0.2;
}

/////////////////////
//FOR recordlist.html

//adds the album and artist names to the sides of the grid of albums when one is hovered over 
function showDetails(albumName, artistName, textColor) {
  let artistNS = document.getElementById("artistNameSpace");
  let albumNS = document.getElementById("albumNameSpace");

  //add artistName to artistNameSpace div
  let artistPara = document.createElement("p");
  let artistText = document.createTextNode(artistName);
  artistPara.appendChild(artistText);
  artistNS.appendChild(artistPara);

  //add albumName to albumNameSpace div
  let albumPara = document.createElement("p");
  let albumText = document.createTextNode(albumName);
  albumPara.appendChild(albumText);
  albumNS.appendChild(albumPara);

  //add styling to album and artist names
  addStyling(artistNS.firstChild, textColor);
  addStyling(albumNS.firstChild, textColor);
}

//makes the album name and artist the color of the album cover
function addStyling(artistOrAlbumText, textColor) {
  let artistNS = document.getElementById("artistNameSpace");
  let albumNS = document.getElementById("albumNameSpace");

  artistOrAlbumText.style.color = textColor;
  artistOrAlbumText.style.writingMode = "vertical-rl";
  artistOrAlbumText.style.textOrientation = "sideways";
  artistOrAlbumText.style.textAlign = "center";
  artistOrAlbumText.style.fontSize = "4vw";
}

function removeDetails() {
  let artistNS = document.getElementById("artistNameSpace");
  let albumNS = document.getElementById("albumNameSpace");

  while (artistNS.firstChild){
    artistNS.removeChild(artistNS.firstChild); 
  }

  while (albumNS.firstChild){
    albumNS.removeChild(albumNS.firstChild); 
  }
}
//Link to onomouseover and onmouseleave: https://www.w3schools.com/jsref/event_onmouseover.asp



//////////////////////////////
//FOR whenicomehome.html

//plays track when user on it
let currHighlightedTrack = 1;
function playSong(songNum, album) {
  let filepath = "assets/" + album + "/songs/" + songNum + ".mp3";
  // console.log(filepath);
  var audioTag = document.getElementById("audioTag");
  audioTag.src = filepath;
  // setVolume
  audioTag.load();

  greyoutTrack(currHighlightedTrack);
  highlightTrack(songNum)
  currHighlightedTrack = parseInt(songNum)
  // unactiveAll();
  // setActive(songNum);
}

//sets all tracks on a page to not active(colored grey)
function unactiveAll() {
  let tracks = document.getElementsByClassName('track');
  for (var i=0; i<tracks.length; i++) {
    tracks[i].style.color = "grey";
  }
}

//sets specified track to white
// function setActive(trackNum) {
//   let tracks = document.getElementsByClassName('track');
//   tracks[parseInt(trackNum)-1].style.color = "white";
// }

function highlightTrack(trackNum) {
  let tracks = document.getElementsByClassName('track');
  tracks[parseInt(trackNum)-1].style.color = "white";
}

function greyoutTrack(trackNum) {
  let tracks = document.getElementsByClassName('track');
  tracks[parseInt(trackNum)-1].style.color = "grey";
}