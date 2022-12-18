// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//toggle
$(document).ready(function() {
  $('#toggle').click(function(){
    $('nav').fadeToggle();
  });
});
//off toggle
$(document).ready(function() {
  $('#offtoggle').click(function(){
    $('nav').fadeToggle();
  });
})
$(document).ready(function() {
  $('#itemtg1').click(function(){
    $('nav').fadeToggle();
  });
})
$(document).ready(function() {
  $('#itemtg2').click(function(){
    $('nav').fadeToggle();
  });
})
$(document).ready(function() {
  $('#itemtg3').click(function(){
    $('nav').fadeToggle();
  });
})
$(document).ready(function() {
  $('#itemtg4').click(function(){
    $('nav').fadeToggle();
  });
})


