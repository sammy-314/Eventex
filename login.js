document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the username and password from the form
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Check if the username and password are valid (for demonstration purposes, assume username is "user" and password is "password")
        if (username === "user" && password === "password") {
            // If valid, redirect to the events page
            window.location.href = "eventslogin.html";
        } else {
            // If not valid, display an error message
            alert("Invalid username or password. Please try again.");
        }
    });
});
