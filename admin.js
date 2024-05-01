document.addEventListener("DOMContentLoaded", function() {
    var adminForm = document.getElementById("admin-login-form");

    adminForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the employee ID, username, and password from the form
        var employeeId = document.getElementById("employee-id").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Check if the username and password are valid (for demonstration purposes, assume username is "admin" and password is "password")
        if (employeeId == 11 && username === "admin" && password === "password") {
            // If valid, redirect to the assign event page
            window.location.href = "assignevent.html";
        } else {
            // If not valid, display an error message
            alert("Invalid username or password. Please try again.");
        }
    });
});
