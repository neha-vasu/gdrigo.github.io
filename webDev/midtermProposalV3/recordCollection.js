function showDetails(evt, albumName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(albumName).style.display = "block";
  evt.currentTarget.className += " active";
}


function showDetails(albumName, artistName) {
  let artistNS = document.getElementsByClassName("artistNameSpace");
  let albumNS = document.getElementsByClassName("albumNameSpace");

  //add artistName to artistNameSpace div
  let artName = document.createElement("p");
  let artText = document.createTextNode(artistName);
  artName.appendChild(artText);
  artistNS.appendChild(artName);

  //add albumName to albumNameSpace div
  let albName = document.createElement("p");
  let albText = document.createTextNode(albumName);
  artName.appendChild(albText);
  artistNS.appendChild(albName);
}

 


 // var tag = document.createElement("p");
 //   var text = document.createTextNode("Tutorix is the best e-learning platform");
 //   tag.appendChild(text);
 //   var element = document.getElementById("new");
 //   element.appendChild(tag);




// let test = document.getElementById("test");
  
// // This handler will be executed only once when the cursor
// // moves over the unordered list
// test.addEventListener("mouseenter", function( event ) {   
//   // highlight the mouseenter target
//   event.target.style.color = "purple";

//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);

// // This handler will be executed every time the cursor
// // is moved over a different list item
// test.addEventListener("mouseover", function( event ) {   
//   // highlight the mouseover target
//   event.target.style.color = "orange";

//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);