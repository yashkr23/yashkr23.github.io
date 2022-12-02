const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})
const About= document.getElementsByClassName('about-text')[0]
function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("about").style.display = "block";
        document.getElementsByClassName('about-text').style.width="1000px";
    } else {
        document.getElementById("about").style.display = "flex";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x)
  x.addListener(myFunction)

  function openCity(mealName,buttonName) {
    var i;
    var x = document.getElementsByClassName("menu-tab");
    var y = document.getElementsByClassName("city1");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      y[i].style.color="black"; 
    }
    document.getElementById(buttonName).style.color = "orange";
    document.getElementById(mealName).style.display = "flex";  
  }