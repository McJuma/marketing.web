function checkemail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}



function sendmessage(event){
    const form = document.getElementById("contact-form");
    const u_name = document.getElementById("name").value.trim();
    const mail = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (u_name == "" || mail == "" || msg == ""){

        alert("Please fill in in the entries!");
        event.preventDefault(); // prevent form submission

    }
    else{
        if (checkemail(mail)) {
            alert("Message sent successfully 😊! Please wait for our reply");
            form.submit(); // submit the form
        }
        else {
            form.reset();
            alert("Please enter a valid email address!");
            event.preventDefault(); // prevent form submission
        }
    }
};

function subscribe(e){
    const subform = document.getElementById("newsletter-form");
    const submail = document.getElementById("newsletter-email").value.trim();

    if (submail == ""){
        alert("Please enter email address");
        e.preventDefault();
    }
    else{
        if (checkemail(submail)){
            alert("Thank you for joining us");
            subform.submit();
        }
        else{
            subform.reset();
            alert("Please enter a valid email address!");
        }
    }
}