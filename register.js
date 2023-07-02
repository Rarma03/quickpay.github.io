document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform basic validation
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }
  
    // Perform registration (Dummy registration for demonstration)
    alert("Registration successful!");
    window.location.href = "index.html";
  });
  
