// Show the global spinner when processing
function showSpinner() {
  document.getElementById('globalSpinner').style.display = 'flex';
}

// Hide the global spinner when done
function hideSpinner() {
  document.getElementById('globalSpinner').style.display = 'none';
}

// Listen for form submission and handle spinner visibility
document.getElementById('EKOKARTForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Show the spinner
  showSpinner();

  // Get input values
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const aadhar_number = document.getElementById('aadhar_number').value;
  const address = document.getElementById('address').value;

  // Validate the mobile number (should be 10 digits)
  const mobilePattern = /^[0-9]{10}$/;
  if (!mobilePattern.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    hideSpinner(); // Hide the spinner if invalid input
    return;
  }

  // If Aadhar number is entered, validate it (should be 12 digits)
  const aadharPattern = /^\d{12}$/;
  if (aadhar_number && !aadharPattern.test(aadhar_number)) {
    alert("Please enter a valid 12-digit Aadhar number.");
    hideSpinner(); // Hide the spinner if invalid input
    return;
  }

  // Simulate a page redirect after form submission
  setTimeout(function () {
    // Redirect to the ewaste.html page after form submission
    window.location.href = "ewaste.html"; // Redirect to Page 2 (Please wait page)
    hideSpinner(); // Hide the spinner after page transition
  }, 2000); // Simulate a 2-second delay for the transition
});
