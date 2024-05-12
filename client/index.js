// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


function sendemail(){

	var name =document.getElementById("name").value;
	var email =document.getElementById("email").value;
	var message =document.getElementById("message").value;

	var templateParams = {
        email: email,
        to_name: name,
		message: message
      };

      emailjs.send('service_x4cdp3s', 'template_met6ywk', templateParams)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     window.alert("Sent successfully!");
     
  })

     
}
                
     