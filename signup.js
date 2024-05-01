document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("registration-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form values
        var username = document.getElementById("username").value;
        var name = document.getElementById("name").value;
        var dob = document.getElementById("dob").value;
        var email = document.getElementById("email").value;
        var city = document.getElementById("city").value;
        var address = document.getElementById("address").value;
        var contactNo = document.getElementById("contact_no").value;
        var password = document.getElementById("password").value;

        // Create user object
        var user = {
            username: username,
            name: name,
            dob: dob,
            email: email,
            city: city,
            address: address,
            contactNo: contactNo,
            password: password
        };

        // Store user data in localStorage
        var users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        // Show success message
        alert("Registration successful!");

        // Reset form
        form.reset();
    });
});
