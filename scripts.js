function checkEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function sendMessage(event) {
    event.preventDefault(); // prevent form submission by default
    const form = document.getElementById("contact-form");
    const uName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (uName === "" || email === "" || message === "") {
        alert("Please fill in all the entries!");
    } else {
        if (checkEmail(email)) {
            alert("Message sent successfully 😊! Please wait for our reply");
            form.submit(); // submit the form
        } else {
            // form.reset();
            alert("Please enter a valid email address!");
        }
    }
}

function subscribe(event) {
    event.preventDefault(); // prevent form submission by default
    const subForm = document.getElementById("newsletter-form");
    const subEmail = document.getElementById("newsletter-email").value.trim();

    if (subEmail === "") {
        alert("Please enter an email address");
    } else {
        if (checkEmail(subEmail)) {
            alert("Thank you for joining us");
            subForm.submit();
        } else {
            subForm.reset();
            alert("Please enter a valid email address!");
        }
    }
}

// Attach event listeners
document.getElementById("contact-form").addEventListener("submit", sendMessage);
document.getElementById("newsletter-form").addEventListener("submit", subscribe);
