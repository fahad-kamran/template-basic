var mybutton = document.getElementById("myBtn");
var navBar =document.getElementById("navbar");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    navBar.style.position = "fixed";
  } else {
    mybutton.style.display = "none";
    navBar.style.position = "sticky";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}