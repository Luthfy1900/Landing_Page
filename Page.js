function check() {
    if (!document.getElementById("email").checkValidity()) {

        //do stuff here ie. show errors
        alert("Bro! NO!!!");

    } else {
        callMeIfValid();
    }
}

function callMeIfValid() {
    //submit form or whatever
    alert("valid input");
}