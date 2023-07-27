function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var gender = document.querySelector('input[name="gender"]:checked');
  
    // Check if all fields are filled
    if (gender === null) {
      alert("Please fill in the field.");
      return false;
    }
  
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return false;
    }
    alert("Registration Successful!");
    window.location.href = "nextpage.html"; // Replace "nextpage.html" with the URL of the next page
    return false; 
  
  }
