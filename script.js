
//time 

function updateTime() {
    var now = new Date();
    var timeElement = document.getElementById("current-time");
    timeElement.innerHTML = now.toLocaleString();
}
setInterval(updateTime, 1000);



// function to open next pages 
function goToQuizPage1(){
    window.location.href = 'quiz1.html';
}

function goToQuizPage2(){
    window.location.href = 'quiz2.html';
    
}

function goToQuizPage3(){
    window.location.href = 'quiz3.html';

}

function goToQuizPage4(){
    window.location.href = 'quiz4.html';
}

function goToQuizPage5(){
    window.location.href = 'quiz5.html';
}



// validation 
function validateForm() {
	// Get the value of the input field with id="email"
	var email = document.getElementById("email").value;
	// Get the value of the input field with id="password"
	var name = document.getElementById("name").value;
	// Regular expression to check if the email is in the correct format
	var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	// Check if the email is empty
	if (email == "") {
	  alert("Email field must be filled out");
	  return false;
	}
	// Check if the email is in the correct format
	if (!email.match(emailRegex)) {
	  alert("Please enter a valid email address");
	  return false;
	}
	// Check if the password is empty
	if (name == "") {
	  alert("Name field must be filled out");
	  return false;
	}

	// call function 
	setCookie("name", name);
	// Send a request to the server to check the user's credentials
	// If the credentials are correct, return true to submit the form
	// If the credentials are incorrect, display an error message and return false to prevent the form from being submitted
	return true;
  }


  function delay(){
	setTimeout('validateForm()',3000);
  }



// cookie 
function setCookie(cname, cvalue){ 
   
    cvalue = document.getElementById("name").value;
    
    document.cookie = cname + "=" + cvalue;

    window.location.href = 'home.html';
}


function getCookie(cname){
    var name = cname + "=" ;
    
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++){
        var c = ca[i];

        c = c.trim();

        if(c.indexOf(name) === 0){
            return c.substring(name.length, c.length);
        }
        
    }
    return "student";
}



function checkCookie(){
    document.getElementById("display").innerHTML = "Hi " + getCookie("name") + "!";

   
}


function showName(){
	document.getElementById("showName").innerHTML= getCookie("name");
}




