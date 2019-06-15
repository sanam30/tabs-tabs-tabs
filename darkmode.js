// Sets body background to black -- injecting into HTML - DOM
document.body.style.background = 'rgb(44, 42, 42)';

// Collect all div elements
var divs = document.getElementsByTagName("div");
// Iterate and set every div's background to black
for (var i = 0; i < divs.length; i++) {
   divs[i].style.background = 'rgb(44, 42, 42)'; // set div background to black
   // TODO: figure out color inversions
   divs[i].style.color = 'white';
}

// Set all p elements to white
var ps = document.getElementsByTagName("p");
for (var i = 0; i < ps.length; i++) {
   ps[i].style.color = 'white';
}

// Set all header text to white, darken background
var headers = document.getElementsByTagName("header");
for (var i = 0; i < headers.length; i++) {
   headers[i].style.background = 'rgb(44, 42, 42)';
   headers[i].style.color = 'white';
}

// Set h1's to h6's to white
for (var i = 1; i <= 6; i++) {
   var hx = document.getElementsByTagName("h"+i); // get hx elements
   
   for (var j = 0; j < hx.length; j++) {
      hx[i].style.color = 'white !important';
      hx[i].style.background = 'rgb(42, 43, 46)';
   }
}

// Set all a's (links) to light blue
var as = document.getElementsByTagName("a");
for (var i = 0; i < as.length; i++) {
   as[i].style.color = 'lightBlue';
}