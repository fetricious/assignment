<<<<<<< HEAD

function validation(){
    var username = document.getElementById('username').value;
    var phone = document.getElementById('phoneNo').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var error_message = document.getElementById('error_msg');
    var text;
    if(username = ""){
        text = "User cannot be blank";
        error_message.innerHTML = text;
    }
    if(length.phoneNo !=10){
        text = "Invalid Phone number";
        error_message.innerHTML = text;
    }
    if(email.indexOF("@") =-1){
        text = "Invalid email address";
        error_message.innerHTML = text;
    }
    if(password = ""){
        text = "Password cannot be blank";
        error_message.innerHTML = text;
    }
=======
function validate()
{
    var name1  = document.getElementById(username).nodeValue;
    var pswd = document.getElementById();
>>>>>>> feature-correction
}