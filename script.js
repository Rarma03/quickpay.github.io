document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform basic validation
  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  // Perform login check (Dummy login for demonstration)
  if (username === "TeamX" && password === "password") {
    // Redirect to payment page or perform necessary action
    alert("Login successful!");
    window.location.href = "payment.html";
  }
   else {
    alert("Invalid username or password.");
  }
});
