var form = document.getElementById("registration");

form.onsubmit = function(){
    if (form.email.value == ""){
        alert("You must provide an email address!");
        return false;
    }
    else if (form.password.value == ""){
        alert("You must enter a password!");
        return false;
    }
    else if (form.password.value != form.confirmation.value){
        alert("Passwords do not match!");
        return false;
    }
    else if (!form.agreement.checked){
        alert("You must agree to the terms and conditions!");
        return false;
    }
    return true;
}
