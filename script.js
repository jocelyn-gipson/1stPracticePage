var navbar= document.getElementById("nav");

document.getElementById("menu") .addEventListener ("click", menuToggle);

function menuToggle( ) {
	var navbarDisplay = nav.style.display;
	}
	
	if (navbarDisplay == "none") {
		makeAppear(  );
		}
	else {
  	makeDisappear(  );
  	}
  
function makeAppear ( ) {
	nav.style.display = "block";
	}
function makeDisappear ( ) {
	nav.style.display = "none";
	}
	