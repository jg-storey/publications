// Get the input field
    var input = document.getElementById("search");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("search-button").click();
    }
    }); 

  function search(){
    let term = document.getElementById('search').value.toLowerCase();
    let divs = document.getElementsByClassName("csl-right-inline");
  
  for (let x = 0; x < divs.length; x++) {
      let div = divs[x];
      let content = div.innerHTML.trim().toLowerCase();
      if (content.indexOf(term)==-1) {
          div.parentElement.style.display = 'none';
      }
      else{
        div.parentElement.style.display = 'block';
      }
  }
  }
  
  function reset(){
    document.getElementById('search').value = "";
    let divs = document.getElementsByClassName("csl-entry");
    for (let x = 0; x < divs.length; x++) {
      let div = divs[x];
        div.style.display = 'block';
      }
  }

 
    //Get the button:
  mybutton = document.getElementById("myBtn");
  
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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 

/*
  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 
*/

const currentBadgeState = localStorage.getItem("badges");
    document.getElementById("badgeswitch").checked = true;
    if(currentBadgeState == "hide"){
      document.getElementById("badgeswitch").checked = false;
      localStorage.setItem("badges", "hide");
    }  
    showBadges();


var newScript = document.createElement("script");
        newScript.src = "https://badge.dimensions.ai/badge.js";
        var x = document.getElementsByTagName("span");
        var i;
        for (i = 0; i < x.length; i++) {
        //x[i].style.backgroundColor = "red";
        x[i].appendChild(newScript);
    } 

    function showBadges(){
            
        let divs = document.getElementsByClassName("__dimensions_badge_embed__");
        
        let checkBox = document.getElementById("badgeswitch");

        for (let x = 0; x < divs.length; x++) {
            let div = divs[x];
            
            if (checkBox.checked==true) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        }
    }
