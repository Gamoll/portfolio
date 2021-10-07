var i = 0; 			
var images = [];	
var time = 3000;	
	 
// Image List
images[0] = "../img/hero1024x768.jpg";
images[1] = "../img/process2.jpg";
images[2] = "../img/process3.jpg";
images[3] = "../img/process4.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	
	if(i < images.length - 1){
	
	  i++; 
	} else { 
		
		i = 0;
	}

	
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;